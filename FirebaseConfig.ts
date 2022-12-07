import {initializeApp} from 'firebase/app';
import {getFirestore} from "@firebase/firestore";

if(process.env.FIREBASE_SECRET === null){
    console.error("Could not read FIREBASE_SECRET : empty")
}
const firebaseConfig = JSON.parse(process.env.FIREBASE_SECRET!)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);