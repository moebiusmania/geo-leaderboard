<script setup lang="ts">
const { data, season } = defineProps<{ data: Player[]; season: Season }>();

const avatars = [
  "https://cdn.midjourney.com/793e43a4-d703-450f-8172-584d6ef688f5/0_1.png",
  `https://cdn.midjourney.com/26514a12-132b-464d-87b4-865cc9934d8b/0_3.png`,
];

const getProgress = (score: number): number => {
  return Math.floor((score / season.cap) * 100);
};

const getLevel = (score: number): number => {
  if (score === 0) return 0;
  const progress = getProgress(score);
  return Math.floor((progress * (season.levels - 1)) / 100) + 1;
};

const players: Player[] = data.map((player) => ({
  ...player,
  avatar: player.gender === "male" ? avatars[1] : avatars[0],
  level: getLevel(player.Score),
}));
</script>

<template>
  <section>
    <ul>
      <li v-for="player in players" :key="player.EntryId">
        <img :src="player.avatar" alt="Player avatar" />
        <span class="name">{{ player.Name }}</span>
        <span class="score">{{ player.Score }}<span>xp</span></span>
        <Ribbon :value="player.level" />
        <Progress
          :current="player.level"
          :score="player.Score"
          :cap="season.cap"
          :levels="season.levels"
          :progress="getProgress(player.Score)"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin-top: 5rem;
  display: flex;
  justify-content: center;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 0;
    max-width: 900px;
    width: 100%;

    & li {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      & img {
        width: 45px;
        height: 45px;
        border-radius: 6px;
        object-fit: cover;
        border: 5px solid var(--primary);
      }

      & span {
        font-size: 1.2rem;
        font-weight: 600;
      }

      & .name {
        font-family: var(--title-font);
        font-size: 1.5rem;
        min-width: 100px;
        width: 200px;
      }

      & .score {
        min-width: 60px;
        font-family: var(--title-font);

        & span {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
