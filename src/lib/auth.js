import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(
  "mongodb+srv://UserForDragonNews:RdapTktauxdjmKqL@cluster0.m0myjlf.mongodb.net/?appName=Cluster0",
);
const db = client.db("dragon news user data");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },
});
