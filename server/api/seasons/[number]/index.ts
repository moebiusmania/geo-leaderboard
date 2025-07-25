import { throwError } from "../../../utils";
import { type Season } from "../index";

export default defineEventHandler(async (event): Promise<Season> => {
  const seasons = await $fetch("/api/seasons");
  const number = getRouterParam(event, "number");
  const index = parseInt(number || "0");
  if (index < 0 || index >= seasons.length) {
    throwError(404, "Season not found");
  }
  const current = seasons[index];
  return current;
});
