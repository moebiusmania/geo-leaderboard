import { Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
