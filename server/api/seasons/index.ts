export interface Season {
  id: string;
  cap: number;
  levels: number;
  title: string;
  number: number;
}

export const seasons: Season[] = [
  {
    id: "2a423bdf-6c8f-4c3e-a02d-b088c1656d23",
    cap: 70,
    levels: 5,
    title: "Winter adventures 🎄☃️",
    number: 0,
  },
];

export default defineEventHandler(async (): Promise<Season[]> => {
  return seasons;
});
