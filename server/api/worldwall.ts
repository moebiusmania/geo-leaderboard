import { MOCK } from "../mock/worlwdall";
export interface Entry {
  _type: string;
  EntryId: string;
  Name: string;
  Score: number;
  Time: number;
}

const API = "https://wordwall.net/leaderboardajax/getentries?";

export default defineEventHandler(async (event): Promise<Entry[]> => {
  const seasons = await $fetch("/api/seasons");
  const number = (getQuery(event).season as string) || "0";
  const season = seasons[parseInt(number)];

  const entries = await Promise.all(
    season.homeworks.map(async (entry) => {
      const response = await $fetch(API + entry);
      return response as string;
    })
  );

  const results = entries
    .map((entry) =>
      entry.replace(/,?\{null\}|'/g, (match) => (match === "'" ? '"' : ""))
    )
    .map((entry) => JSON.parse(entry) as Entry[])
    // .concat(MOCK)
    .flat()
    .reduce<Entry[]>((acc, entry) => {
      const existingEntry = acc.find(
        (e) => e.Name.toLowerCase() === entry.Name.toLowerCase()
      );
      if (existingEntry) {
        existingEntry.Score += entry.Score;
      } else {
        acc.push({ ...entry });
      }
      return acc;
    }, [])
    .sort((a, b) => b.Score - a.Score);

  return results;
});
