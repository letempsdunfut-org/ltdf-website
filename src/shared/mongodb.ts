import { MongoClient } from "mongodb";
import env from "./env";


const uri = env.mongodbUri;

const client: MongoClient = new MongoClient(uri);

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.

export default client;
