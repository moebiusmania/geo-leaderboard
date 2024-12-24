import { Entry } from "../api/worldwall";

const length = 10;
const names = ["John Doe", "Jane Doe", "Jack Doe", "Jill Doe", "Jim Doe"];

export const MOCK: Entry[] = Array.from({ length }, (_, i) => ({
  _type: "Entry",
  EntryId: i.toString(),
  Name: names[i % names.length],
  Score: Math.floor(Math.random() * 100),
  Time: Math.floor(Math.random() * 100000),
}));
