<script setup lang="ts">
const { season } = defineProps<{
  season: Season;
}>();

const { data: entries } = await useFetch<Array<Entry>>("/api/worldwall");
const { data: players } = await useFetch<Array<Player>>("/api/players");

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
    <Rewards />
    <Players :data="data" :season="season" />
    <Footer />
  </main>
</template>
