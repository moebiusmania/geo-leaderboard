<script setup lang="ts">
const { data: season } = await useFetch<Season>("/api/seasons/0");
</script>

<template>
  <Leaderboard :season="season" />
</template>
