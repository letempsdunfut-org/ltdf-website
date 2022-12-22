import { database } from '../../FirebaseConfig'
import { collection, deleteDoc, getDocs, doc, addDoc } from "@firebase/firestore";
import { Timestamp } from "@firebase/firestore"
import { query, where } from "@firebase/firestore";
import { DateTime } from "luxon";
import type { NextRequest } from 'next/server'
import { getLogger } from '../../logging/log-util'


const logger = getLogger('api');

export const config = {
    runtime: 'edge',
}

interface MachineBooking {
    machine: string,
    days: Array<AvailabilityEntity>
}

interface BookingRequest {
    firstName: string,
    lastName: string,
    email: string,
    startDate: string,
    endDate: string,
    qtn: number,
    co2: boolean
}

interface AvailabilityEntity {
    id: string
    date: Timestamp,
    machine: string,
    available: boolean
}

interface BookingEntity {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    startDate: Date,
    endDate: Date,
    qtn: number,
    co: boolean
}

async function checkAvailability(startDate: DateTime, endDate: DateTime): Promise<MachineBooking | null> {
    const now = DateTime.now()
    if(startDate < now || endDate < now){
        throw new BadRequestError('startDate or EndDate should not be in the past', 400)
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

async function deleteAvailability(id:string) {
    await deleteDoc(doc(database, 'availability', id))
}

export default async function handler(req: NextRequest) {
    let booking;
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const body = await req.json() as BookingRequest
        const availability = await checkAvailability(DateTime.fromISO(body.startDate, { zone: 'utc' }), DateTime.fromISO(body.endDate, { zone: 'utc' }))
        if (availability) {
            logger.info(`Machine ${availability.machine} available`)
            booking = await confirmBooking(availability.machine, body)
            for await(const day of availability.days){
                logger.info(`Deleting avaialability for machine ${availability.machine} at date ${day.date.toDate()} with id ${day.id}`)
                await deleteAvailability(day.id)
            }
        } else {
            logger.info('machine unavailable')
            return new Response(
                JSON.stringify({
                    status: 'failed',
                    message: 'unavailable'
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
        if(e instanceof BadRequestError){
            let error = e as BadRequestError
            logger.error(`error while making booking : ${error.message}`)
            return new Response(
                JSON.stringify({
                    status: 'failed',
                    message: error.message
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
                message: 'server error'
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
    const dbInstance = collection(database, 'bookings')
    const startDate = DateTime.fromISO(request.startDate, { zone: 'utc'})
    const endDate = DateTime.fromISO(request.endDate, { zone: 'utc'})
    const booking = {
        machine,
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        qtn: request.qtn,
        co: request.co2,
        startDate: startDate.toJSDate(),
        endDate: endDate.toJSDate()
    }
    const ref = await addDoc(dbInstance, booking)
    return {
        id: ref.id,
        ...booking
    }
}


class BadRequestError extends Error {
    statusCode = 0;
    constructor(msg: string, statusCode: number){
        super(msg)
        this.statusCode = statusCode
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }
}
