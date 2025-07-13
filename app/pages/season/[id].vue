<script setup lang="ts">
import type { Season } from "~/server/api/seasons";

const { id } = useRoute().params;
const { data: season } = await useFetch<Season>("/api/seasons/" + id, {
  default: () => emptySeason,
});
</script>

<template>
  <Header />
  <Leaderboard :season="season" />
</template>
