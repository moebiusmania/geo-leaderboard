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
    nickname: "Edordo",
    gender: "male",
  },
  {
    nickname: "Geltri",
    gender: "male",
  },
];

export default defineEventHandler(async (): Promise<Player[]> => {
  return data;
});
