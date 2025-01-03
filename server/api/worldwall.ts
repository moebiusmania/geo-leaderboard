import { MOCK } from "../mock/worlwdall";

export interface Entry {
  _type: string;
  EntryId: string;
  Name: string;
  Score: number;
  Time: number;
}

const API = "https://wordwall.net/leaderboardajax/getentries?";

const ENTRIES = [
  "activityId=83995871&templateId=22&authorUserId=1049762",
  "activityId=83996865&templateId=22&authorUserId=1049762",
  "activityId=83997309&templateId=22&authorUserId=1049762",
  "activityId=83996997&templateId=22&authorUserId=1049762",
  "activityId=83997705&templateId=22&authorUserId=1049762",
  // "activityId=12881761&templateId=5&authorUserId=4744777",
];

export default defineEventHandler(async (): Promise<Entry[]> => {
  const entries = await Promise.all(
    ENTRIES.map(async (entry) => {
      const response = await $fetch(API + entry);
      return response as string;
    })
  );

  const results = entries
    .map((entry) =>
      entry
        .replaceAll(",{null}", "")
        .replaceAll("{null}", "")
        .replaceAll("'", '"')
    )
    .map((entry) => JSON.parse(entry) as Entry[])
    // .concat(MOCK)
    .flat()
    .reduce<Entry[]>((acc, entry) => {
      const existingEntry = acc.find((e) => e.Name === entry.Name);
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
