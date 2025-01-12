import { Query } from "appwrite";
import { databases } from "~/utils/appwrite";

export interface Reward {
  label: string;
  img: string;
}

const DB_ID = process.env.DATABASE_ID || "";
const REWARDS_ID = process.env.REWARDS_COLLECTION_ID || "";

const throwError = (code: number, message: string) => {
  throw createError({
    statusCode: code,
    statusMessage: message,
  });
};

export default defineEventHandler(async (event): Promise<Reward[]> => {
  const number = getRouterParam(event, "number");
  const index = parseInt(number || "0");
  if (index < 0) {
    throwError(400, "Season must be greater than 0");
  }

  const rewards = await databases.listDocuments(DB_ID, REWARDS_ID, [
    Query.equal("season", index),
  ]);

  const data =
    rewards.documents.length > 0
      ? rewards.documents
          .sort((a, b) => a.order - b.order)
          .map((doc) => ({
            label: doc.label,
            img: doc.img,
          }))
      : [];

  return data;
});
