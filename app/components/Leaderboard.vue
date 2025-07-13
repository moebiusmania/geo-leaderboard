<script setup lang="ts">
import type { Player } from "~/server/api/players";
import type { Season } from "~/server/api/seasons";
import type { Homework } from "~/server/api/seasons/[number]/homeworks";
import type { Reward } from "~/server/api/seasons/[number]/rewards";
import type { Entry } from "~/server/api/worldwall";

const { season } = defineProps<{
  season: Season;
}>();

const { data: entries } = await useFetch<Array<Entry>>(
  "/api/worldwall?season=" + season.number,
  { default: () => [] }
);
const { data: players } = await useFetch<Array<Player>>("/api/players");
const { data: rewards } = await useFetch<Array<Reward>>(
  `/api/seasons/${season.number}/rewards/`,
  { default: () => [] }
);
const { data: homeworks } = await useFetch<Array<Homework>>(
  `/api/seasons/${season.number}/homeworks/`,
  { default: () => [] }
);

const data = entries.value?.map((entry) => ({
  ...entry,
  ...players.value?.find(
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
