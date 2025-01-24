import { databases } from "~/utils/appwrite";

export interface Player {
  aliases?: string[];
  avatar?: string;
  gender: string;
  id?: string;
  level?: number;
  name?: string;
  nickname: string;
  score?: number;
}

const PLAYERS_ID = process.env.PLAYERS_COLLECTION_ID || "";
const DB_ID = process.env.DATABASE_ID || "";

export default defineEventHandler(async (): Promise<Player[]> => {
  const players = await databases.listDocuments(DB_ID, PLAYERS_ID);

  const data =
    players.documents.length > 0
      ? players.documents.map((doc) => ({
          gender: doc.gender,
          nickname: doc.nickname,
        }))
      : [];

  return data;
});
