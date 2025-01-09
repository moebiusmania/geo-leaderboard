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
    nickname: "ciccio lorenzo",
    gender: "male",
  },
  {
    nickname: "lorenzo bomba",
    gender: "male",
  },
  {
    nickname: "loreno",
    gender: "male",
  },
  {
    nickname: "mi chiamo lorenzo",
    gender: "male",
  },
  {
    nickname: "lorenzo boss",
    gender: "male",
  },
  {
    nickname: "lorenzo bomba 281214",
    gender: "male",
  },
  {
    nickname: "lollo",
    gender: "male",
  },
];

export default defineEventHandler(async (): Promise<Player[]> => {
  return data;
});
