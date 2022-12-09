import {database} from '../../FirebaseConfig'
import {collection, addDoc, getDocs} from "@firebase/firestore";
import { query, where } from "@firebase/firestore";
import type { NextRequest } from 'next/server'

const dbInstance = collection(database, 'locations');
export const config = {
    runtime: 'experimental-edge',
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

async function searchExistingBooking(startDate: string, endDate:string){
    const query = query(dbInstance, where("startDate",">=",startDate)
    getDocs(dbInstance, )
}
export default async function handler(req: NextRequest) {
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });
    try {
        const body = await req.json() as BookingRequest

    } catch(e){

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