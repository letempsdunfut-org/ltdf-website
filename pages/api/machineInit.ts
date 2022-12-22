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
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const yearParams = req.nextUrl.searchParams.get('year')
        const machine = req.nextUrl.searchParams.get('machine')
        if(!machine || !yearParams){
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

        logger.info(`will create all availability for year ${yearParams} for machine ${machine}`)
        const startYear = +yearParams 
        const startDate = DateTime.fromObject({ year:startYear}, { zone: 'utc'})
        const endDate = DateTime.fromObject({year: startYear + 1}, { zone: 'utc'})
        const interval = Interval.fromDateTimes(startDate, endDate)
        const days = interval.splitBy(Duration.fromObject({days: 1})).map(obj => obj.start.toJSDate());
        
        await Promise.all(days.map(async (day) => {
            await addDoc(dbInstance, {
                date: day,
                machine,
                available: true
            })
            logger.debug(`Day ${day} created for machine ${machine}`)
          }));

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