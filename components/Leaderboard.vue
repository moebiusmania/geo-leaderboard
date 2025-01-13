<script setup lang="ts">
const { season } = defineProps<{
  season: Season;
}>();

const { data: entries } = await useFetch<Array<Entry>>(
  "/api/worldwall?season=" + season.number
);
const { data: players } = await useFetch<Array<Player>>("/api/players");
const { data: rewards } = await useFetch<Array<Reward>>(
  "/api/rewards/" + season.number
);
const { data: homeworks } = await useFetch<Array<Homework>>(
  "/api/homeworks/" + season.number
);

const data = entries.value.map((entry) => ({
  ...entry,
  ...players.value.find(
    (player) => player.nickname.toLowerCase() === entry.Name.toLowerCase()
  ),
}));
</script>

<template>
  <main>
    <Hero :season="season" />
    <Rewards :data="rewards" />
    <Players v-if="data.length > 0" :data="data" :season="season" />
    <Homeworks :data="homeworks" />
    <Footer />
  </main>
</template>
