export interface Player {
  aliases?: string[];
  avatar?: string;
  gender: string;
  id?: string;
  level?: number;
  name?: string;
  nickname: string;
  score?: number;
}

export const data: Player[] = [
  {
    nickname: "SuperPandina",
    gender: "female",
  },
  {
    nickname: "edoardo",
    aliases: ["edo", "edordo"],
    gender: "male",
  },
  {
    nickname: "geltri",
    gender: "male",
  },
  {
    nickname: "asia",
    gender: "female",
  },
  {
    nickname: "francesco",
    gender: "male",
  },
  {
    nickname: "pablo",
    gender: "male",
  },
  {
    nickname: "lorenzo",
    gender: "male",
    aliases: ["lorenzo bomba", "loreno", "ciccio lorenzo", "mi chiamo lorenzo"],
  },
  {
    nickname: "riccardo",
    gender: "male",
  },
];

export default defineEventHandler(async (): Promise<Player[]> => {
  return data;
});
