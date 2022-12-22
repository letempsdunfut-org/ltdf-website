import { database } from '../../FirebaseConfig'
import { collection, addDoc, getDocs, getCountFromServer } from "@firebase/firestore";
import { Timestamp } from "@firebase/firestore"
import { query, where } from "@firebase/firestore";
import { DateTime } from "luxon";
import type { NextRequest } from 'next/server'
import { getLogger } from '../../logging/log-util'


const logger = getLogger('api');

export const config = {
    runtime: 'edge',
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
    date: Timestamp,
    machine: string,
    available: boolean
}

async function checkAvailability(startDate: DateTime, endDate: DateTime): Promise<boolean> {

    const days = endDate.diff(startDate, 'days').toObject().days
    const dbInstance = collection(database, 'availability')
    const q = query(dbInstance, where("date", ">=", startDate.toJSDate()), where("date", "<=", endDate.toJSDate()))
    const res = await getDocs(q)
    const DBAvailability = res.docs.map((doc) => doc.data() as AvailabilityEntity)
    const machineAvailability = groupBy(DBAvailability, 'machine')
    logger.debug(`calculated days = ${days}, response from DB = ${DBAvailability.length}`)
    return DBAvailability.length === days
}

export default async function handler(req: NextRequest) {
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const body = await req.json() as BookingRequest
        if (await checkAvailability(DateTime.fromISO(body.startDate, { zone: 'utc' }), DateTime.fromISO(body.endDate, { zone: 'utc' }))) {
            logger.info('Machine available')
        } else {
            logger.info('machine unavailable')
        }

    } catch (e) {
        logger.error(`error while getting body : ${e}`)
    }


    return new Response(
        JSON.stringify({
            name: 'Test',
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
