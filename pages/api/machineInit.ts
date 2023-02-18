import {database} from '../../FirebaseConfig'
import {collection, addDoc, DocumentData} from "@firebase/firestore";
import {DateTime, Interval, Duration} from "luxon";
import type {NextRequest} from 'next/server'
import {getLogger} from '../../logging/log-util'

export const config = {
    runtime: 'edge',
}

const logger = getLogger('api');
const dbInstance = collection(database, 'availability')

export default async function handler(req: NextRequest) {
    if (req.method !== "POST")
        return new Response("", {status: 404, statusText: "Not Found"});

    const yearParams = req.nextUrl.searchParams.get('year')
    const start = req.nextUrl.searchParams.get('startDate')
    const end = req.nextUrl.searchParams.get('endDate')
    const machine = req.nextUrl.searchParams.get('machine')
    if (!machine || (!yearParams || (!start || !end))) {
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
    if (yearParams)
        await fillYear(yearParams, machine)
    else {
        await fillRange(start, end, machine)
    }

}

async function generateAvailability(startDate: DateTime, endDate: DateTime, machine: String) {
    try {
        const interval = Interval.fromDateTimes(startDate, endDate)
        const days = interval.splitBy(Duration.fromObject({days: 1})).map(obj => obj.start.toJSDate());

        for await (const day of days) {
            await addDoc(dbInstance, {
                date: day,
                machine,
                available: true
            } as DocumentData)
            logger.debug(`Day ${day} created for machine ${machine}`)
        }

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

async function fillRange(sDate: string, eDate: string, machine: String) {
    logger.info(`will create all availability between ${sDate} -> ${eDate} for machine ${machine}`)
    const startDate = DateTime.fromISO(sDate, {zone: 'utc'})
    const endDate = DateTime.fromISO(eDate, {zone: 'utc'})
    await generateAvailability(startDate, endDate, machine)
}

async function fillYear(year: string, machine: String) {
    logger.info(`will create all availability for year ${year} for machine ${machine}`)
    const startYear = +year
    const startDate = DateTime.fromObject({year: startYear}, {zone: 'utc'})
    const endDate = DateTime.fromObject({year: startYear + 1}, {zone: 'utc'})
    await generateAvailability(startDate, endDate, machine)
}