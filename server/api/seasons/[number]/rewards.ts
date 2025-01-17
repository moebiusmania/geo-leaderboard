import { getDocuments, getSeasonParam } from "~/server/utils";

export interface Reward {
  label: string;
  img: string;
}

const REWARDS_ID = process.env.REWARDS_COLLECTION_ID || "";

export default defineEventHandler(async (event): Promise<Reward[]> => {
  const index = getSeasonParam(event);

  const rewards = await getDocuments(REWARDS_ID, index);

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
