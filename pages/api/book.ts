import {database} from '../../FirebaseConfig'
import {collection, addDoc, getDocs} from "@firebase/firestore";
import type { NextRequest } from 'next/server'

const dbInstance = collection(database, 'locations');
export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
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