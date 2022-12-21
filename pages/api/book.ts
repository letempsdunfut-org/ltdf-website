import {database} from '../../FirebaseConfig'
import {collection, addDoc, getDocs} from "@firebase/firestore";
import type { Timestamp } from "@firebase/firestore"
import { query, where } from "@firebase/firestore";
import type { NextRequest } from 'next/server'
import { getLogger } from '../../logging/log-util'


const logger = getLogger('api');

export const config = {
    runtime: 'edge',
}

interface BookingRequest {
    firstName: string,
    lastName: string,
    email:string,
    startDate:string,
    endDate:string,
    qtn: number,
    co2: boolean
}

interface AvailabilityEntity {
    date: Timestamp,
    machine: string,
    available: boolean
}

async function checkAvailability(startDate: string, endDate:string){
    const dbInstance = collection(database, 'av');
    const q = query(dbInstance, where("date",">=",startDate), where("date",">=",endDate))
    const res = await getDocs(q)
}
export default async function handler(req: NextRequest) {
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const body = await req.json() as BookingRequest

    } catch(e){
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