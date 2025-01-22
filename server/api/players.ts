import { getDocuments, getSeasonParam } from "~/server/utils";

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

export default defineEventHandler(async (event): Promise<Player[]> => {
  const index = getSeasonParam(event);

  const players = await getDocuments(PLAYERS_ID, index);

  const data =
    players.documents.length > 0
      ? players.documents
          .map((doc) => ({
            gender: doc.gender,
            nickname: doc.nickname,
          }))
      : [];

  return data;
});
