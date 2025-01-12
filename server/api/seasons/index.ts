import { databases } from "~/utils/appwrite";

export interface Season {
  id: string;
  cap: number;
  levels: number;
  title: string;
  number: number;
  start: string;
  end: string;
  homeworks: string[];
}

const DB_ID = process.env.DATABASE_ID || "";
const SEASONS_ID = process.env.SEASONS_COLLECTION_ID || "";

export default defineEventHandler(async (): Promise<Season[]> => {
  const seasons = await databases.listDocuments(DB_ID, SEASONS_ID);
  const data = seasons.documents.map((doc) => ({
    id: doc.$id,
    cap: doc.cap,
    levels: doc.levels,
    title: doc.title,
    number: doc.number,
    start: doc.start,
    end: doc.end,
    homeworks: doc.homeworks,
  }));
  return data;
});
