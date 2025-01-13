import { getDocuments, getSeasonParam } from "~/server/utils";

export interface Homework {
  label: string;
  url: string;
}

const HOMEWORKS_ID = process.env.HOMEWORKS_COLLECTION_ID || "";

export default defineEventHandler(async (event): Promise<Homework[]> => {
  const index = getSeasonParam(event);

  const homeworks = await getDocuments(HOMEWORKS_ID, index);

  const data =
    homeworks.documents.length > 0
      ? homeworks.documents
          .sort((a, b) => a.order - b.order)
          .map((doc) => ({
            label: doc.label,
            url: doc.url,
          }))
      : [];

  return data;
});
