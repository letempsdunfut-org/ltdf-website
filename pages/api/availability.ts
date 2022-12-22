import { database } from '../../FirebaseConfig'
import { collection, addDoc, getDocs, getCountFromServer } from "@firebase/firestore";
import { Timestamp } from "@firebase/firestore"
import { query, where } from "@firebase/firestore";
import { DateTime, Interval, Duration } from "luxon";
import type { NextRequest } from 'next/server'
import { getLogger } from '../../logging/log-util'
import { log } from 'util';

export const config = {
    runtime: 'edge',
}

const logger = getLogger('api');
const dbInstance = collection(database, 'availability')

export default async function handler(req: NextRequest) {
    if (req.method !== "GET")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const start = req.nextUrl.searchParams.get('startDate')
        const end = req.nextUrl.searchParams.get('endDate')
        if (!start || !end) {
            return new Response(
                JSON.stringify({
                    error: 'missing params',
                }),
                {
                    status: 400,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            )
        }

        const startDate = DateTime.fromISO(start, { zone: 'utc' })
        const endDate = DateTime.fromISO(end, { zone: 'utc' })
        const q = query(dbInstance, where("date", ">=", startDate.toJSDate()), where("date", "<=", endDate.toJSDate()))
        const res = await getDocs(q)
        const DBAvailability = res.docs.map(doc => doc.data()).map((doc) => {
            const date = doc.date as Timestamp
            doc.date = date.toDate().toISOString()
            return doc
        })
        const machineAvailability = groupBy(DBAvailability, 'date')
        return new Response(
            JSON.stringify(machineAvailability),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
    } catch (e) {
        logger.error(`error : ${e}`)
        new Response(
            JSON.stringify({
                error: JSON.stringify(e),
            }),
            {
                status: 500,
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
    }
}

const groupBy = function (xs: Array<any>, key: string) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};