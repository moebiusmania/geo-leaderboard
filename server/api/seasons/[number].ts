import { type Season, seasons } from "../seasons";

export default defineEventHandler(async (event): Promise<Season> => {
  const number = getRouterParam(event, "number");
  const index = parseInt(number || "0");
  if (index < 0 || index >= seasons.length) {
    throw createError({
      statusCode: 404,
      statusMessage: "Season not found",
    });
  }
  return seasons[index];
});
