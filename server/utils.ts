import { Query } from "appwrite";
import { H3Event } from "h3";
import { databases } from "~/utils/appwrite";

const DB_ID = process.env.DATABASE_ID || "";

export const throwError = (code: number, message: string) => {
  throw createError({
    statusCode: code,
    statusMessage: message,
  });
};

export const getDocuments = async (collectionId: string, index: number) =>
  await databases.listDocuments(DB_ID, collectionId, [
    Query.equal("season", index),
  ]);

export const getSeasonParam = (event: H3Event) => {
  const season = getRouterParam(event, "season");
  const index = parseInt(season || "0");
  if (index < 0) {
    throwError(400, "Season must be greater than 0");
  }
  return index;
};
