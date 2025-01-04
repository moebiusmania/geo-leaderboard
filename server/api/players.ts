export interface Player {
  id?: string;
  name?: string;
  nickname: string;
  gender: string;
  avatar?: string;
  score?: number;
  level?: number;
}

const data: Player[] = [
  {
    nickname: "SuperPandina",
    gender: "female",
  },
  {
    nickname: "Edoardo",
    gender: "male",
  },
  {
    nickname: "Geltri",
    gender: "male",
  },
  {
    nickname: "Asia",
    gender: "female",
  },
  {
    nickname: "Francesco",
    gender: "male",
  },
];

export default defineEventHandler(async (): Promise<Player[]> => {
  return data;
});
