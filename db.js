import { MongoClient } from "mongodb";
import obj from "mongodb";
const MongoUrl = "mongodb+srv://sivapucc:siva95@cluster0.zdqwd.mongodb.net/?";
const createConnection = async () => {
  const client = new MongoClient(MongoUrl);
  await client.connect();
  return client;
};

export const client = await createConnection();
export var ObjectId = obj.ObjectId;
