<script setup lang="ts">
const { entries } = defineProps<{ entries: Entry[] }>();

interface Player extends Entry {
  avatar: string;
  level: number;
}

const avatars = [
  "https://cdn.midjourney.com/793e43a4-d703-450f-8172-584d6ef688f5/0_1.png",
  `https://cdn.midjourney.com/26514a12-132b-464d-87b4-865cc9934d8b/0_3.png`,
];

// convert milliseconds to minutes and seconds
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")}`;
};

const getLevel = (score: number): number => {
  return Math.floor(score / 20);
};

const players: Player[] = entries.map((entry) => ({
  ...entry,
  avatar: avatars[Math.floor(Math.random() * avatars.length)],
  level: getLevel(entry.Score),
}));
</script>

<template>
  <section>
    <ul>
      <li v-for="player in players" :key="player.EntryId">
        <img :src="player.avatar" alt="Player avatar" />
        <span class="name">{{ player.Name }}</span>
        <span class="score">{{ player.Score }}xp</span>
        <Ribbon :value="player.level" />
        <Progress :current="player.level" />
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
      }

      & .score {
        min-width: 60px;
      }
    }
  }
}
</style>
