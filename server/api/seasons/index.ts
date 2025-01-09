export interface Season {
  id: string;
  cap: number;
  levels: number;
  title: string;
  number: number;
  start: string;
  end: string;
  homeworks: string[];
}

export const seasons: Season[] = [
  {
    id: "2a423bdf-6c8f-4c3e-a02d-b088c1656d23",
    cap: 60,
    levels: 5,
    title: "Winter adventures 🎄☃️",
    number: 0,
    start: "2024-12-01",
    end: "2025-01-31",
    homeworks: [
      "activityId=83995871&templateId=22&authorUserId=1049762",
      "activityId=83996865&templateId=22&authorUserId=1049762",
      "activityId=83997309&templateId=22&authorUserId=1049762",
      "activityId=83996997&templateId=22&authorUserId=1049762",
      "activityId=83997705&templateId=22&authorUserId=1049762",
    ],
  },
  {
    id: "2a423bdf-6c8f-4c3e-a02d-b088c1656d24",
    cap: 60,
    levels: 5,
    title: "Spring adventures 🌸🌼",
    number: 1,
    start: "2025-02-01",
    end: "2025-03-31",
    homeworks: [],
  },
];

export default defineEventHandler(async (): Promise<Season[]> => {
  return seasons;
});
