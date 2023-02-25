import { database } from '../../FirebaseConfig'
import { collection, deleteDoc, getDocs, doc, addDoc } from "@firebase/firestore"
import { Timestamp } from "@firebase/firestore"
import { query, where } from "@firebase/firestore"
import { DateTime } from "luxon";
import type { NextRequest } from 'next/server'
import { getLogger } from '../../logging/log-util'
import { ResponseError } from '@sendgrid/mail/src/mail';


const logger = getLogger('api');
if (process.env.SENDGRID_API_KEY === null) {
    console.error("Could not read SENDGRID_API_KEY : empty")
}


export const config = {
    runtime: 'edge',
}

interface MachineBooking {
    machine: string,
    days: Array<AvailabilityEntity>
}

export interface BookingRequest {
    firstName: string,
    lastName: string,
    email: string,
    startDate: string,
    endDate: string,
    qtn: number,
    co2: boolean,
    delivery: boolean,
    ecocup: boolean,
}

interface AvailabilityEntity {
    id: string
    date: Timestamp,
    machine: string,
    available: boolean
}

interface BookingEntity {
    id: string,
    orderId: string,
    machine: string,
    status: string,
    firstName: string,
    lastName: string,
    email: string,
    startDate: Date,
    endDate: Date,
    qtn: number,
    co: boolean,
    delivery: boolean,
    ecocup: boolean,
}

async function checkAvailability(startDate: DateTime, endDate: DateTime): Promise<MachineBooking | null> {
    const now = DateTime.now()
    if (startDate < now || endDate < now) {
        throw new BadRequestError('startDate or EndDate should not be in the past', 400, "DATE_PAST")
    }

    const days = endDate.diff(startDate, 'days').toObject().days! + 1 // Adding 1 because machine is more exact than business (48h usage != 3 days rental)
    const dbInstance = collection(database, 'availability')
    const q = query(dbInstance, where("date", ">=", startDate.toJSDate()), where("date", "<=", endDate.toJSDate()))
    const res = await getDocs(q)
    const DBAvailability = res.docs.map((doc) => { return { id: doc.id, ...doc.data() } as AvailabilityEntity })
    const machineAvailability = groupBy(DBAvailability, 'machine')
    for (const key of Object.keys(machineAvailability)) {
        if (machineAvailability[key].length === days) {
            return { machine: key, days: machineAvailability[key] }
        }
    }
    return null
}

export default async function handler(req: NextRequest) {
    let booking;
    if (req.method !== "POST")
        return new Response("", { status: 404, statusText: "Not Found" });
    try {
        const body = await req.json() as BookingRequest
        const availability = await checkAvailability(DateTime.fromISO(body.startDate, { zone: 'utc' }), DateTime.fromISO(body.endDate, { zone: 'utc' }))
        if (availability) {
            logger.info(`Machine ${availability.machine} available`)
            booking = await confirmBooking(availability.machine, body)
        } else {
            logger.info('machine unavailable')
            return new Response(
                JSON.stringify({
                    status: 'failed',
                    message: 'unavailable',
                    errorCode: "NO_AVAILABILITY"
                }),
                {
                    status: 200,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            )
        }

    } catch (e) {
        if (e instanceof BadRequestError) {
            let error = e as BadRequestError
            logger.error(`error while making booking : ${error.message}`)
            return new Response(
                JSON.stringify({
                    status: 'failed',
                    message: error.message,
                    errorCode: error.errorCode
                }),
                {
                    status: error.statusCode,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            )
        }

        logger.error(`error while making booking : ${e}`)
        return new Response(
            JSON.stringify({
                status: 'failed',
                message: 'server error',
                errorCode: 'ÚNKNOWN'
            }),
            {
                status: 500,
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
    }

    return new Response(
        JSON.stringify({
            status: 'success',
            booking
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}

const groupBy = function (xs: Array<any>, key: string) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

async function confirmBooking(machine: string, request: BookingRequest) {
    const orderId = `ltdf-${DateTime.now().toISODate({ format: 'basic' })}${random(100, 999)}`
    const dbInstance = collection(database, 'bookings')
    const startDate = DateTime.fromISO(request.startDate, { zone: 'utc' })
    const endDate = DateTime.fromISO(request.endDate, { zone: 'utc' })
    const booking = {
        machine,
        orderId,
        status: 'WAITING_PAYMENT',
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        qtn: request.qtn,
        co: request.co2,
        delivery: request.delivery,
        ecocup: request.ecocup,
        startDate: startDate.toJSDate(),
        endDate: endDate.toJSDate()
    } as BookingEntity
    const ref = await addDoc(dbInstance, booking)
    logger.info(`booking confirmed for ${booking.machine} with orderId ${booking.orderId}`)
    booking.id = ref.id
    await sendConfirmationEmails(booking)
    return booking
}

async function sendConfirmationEmails(booking: BookingEntity) {
    const msg = {
        "personalizations": [
            {
                "to": [
                    {
                        "email": booking.email
                    }
                ],
                "cc": [{ "email": "order@letempsdunfut.ca" }]
            }
        ],
        "from": {
            "email": "order@letempsdunfut.ca"
        },
        "subject": `Commande #${booking.orderId}`,
        "content": [
            {
                "type": "text/html",
                "value": `<h1>Merci pour votre commande !</h1><br/><hr/><br/>Voici un résumé : <br/><ul><li>⏺️Machine : ${booking.machine}</li><li> 🛒 Commande : ${booking.orderId}</li><li> Prénom : ${booking.firstName}</li><li> Nom : ${booking.lastName}</li><li> 📧 Email : ${booking.machine}</li><li> Nombre de machine : ${booking.qtn}</li><li> 📅 Date de début de location : ${booking.startDate.toISOString()}</li><li>📅 Date de fin de location : ${booking.endDate.toISOString()}</li></ul>`
            }
        ]
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.SENDGRID_API_KEY}`);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(msg)
    }
    try {
        const res = await fetch('https://api.sendgrid.com/v3/mail/send',requestOptions);
        const statusCode = res.statusText
        if(res.status >= 400){
            throw new Error(await res.json());
        }
        logger.info(`mail send to ${booking.email}`)
    } catch (error) {
        logger.error(`Error while sending confirmation email, Response from SendGrid : ${error}`)
    }

}


class BadRequestError extends Error {
    statusCode = 0;
    errorCode = ''
    constructor(msg: string, statusCode: number, errorCode: string) {
        super(msg)
        this.statusCode = statusCode
        this.errorCode = errorCode
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
