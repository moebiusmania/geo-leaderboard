<script setup lang="ts">
import type { Season } from "~/server/api/seasons";

const { data: season } = await useFetch<Season>("/api/seasons/0", {
  default: () => emptySeason,
});
</script>

<template>
  <Header />
  <Leaderboard :season="season" />
</template>
