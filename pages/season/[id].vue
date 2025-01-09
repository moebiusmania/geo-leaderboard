<script setup lang="ts">
const { id } = useRoute().params;
const { data: season } = await useFetch<Season>("/api/seasons/" + id);
</script>

<template>
  <Leaderboard :season="season" />
</template>
