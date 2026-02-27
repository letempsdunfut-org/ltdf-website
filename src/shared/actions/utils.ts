import { Collection,Document } from "mongodb";
import client from "@/shared/mongodb";

export async function getCollection<TSchema extends Document = Document>(collection: string): Promise<Collection<TSchema>> {
  const mongoClient = await client.connect();
  // For security reason make sure the database name is in the connection string if not by default, add it
  const db = mongoClient.db();
  return db.collection<TSchema>(collection);
}
