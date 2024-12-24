<script setup lang="ts">
const { data: entries } = await useFetch<Array<Entry>>("/api/worldwall");
</script>

<template>
  <main>
    <Hero />
    <Rewards />
    <Players :entries="entries" />
    <Footer />
  </main>
</template>
