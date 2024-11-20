import { MongoClient } from "mongodb";
import obj from "mongodb";
const MongoUrl = "mongodb://127.0.0.1:27017/";
const createConnection = async () => {
  const client = new MongoClient(MongoUrl);
  await client.connect();
  return client;
};

export const client = await createConnection();
export var ObjectId = obj.ObjectId;
