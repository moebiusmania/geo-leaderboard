<script setup lang="ts">
import type { Season } from "~/server/api/seasons";

const { season } = defineProps<{
  season: Season;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
  });
};
</script>

<template>
  <header>
    <hgroup>
      <h1>Geografia - Season Pass</h1>
      <h2>Season {{ season.number }} - "{{ season.title }}"</h2>
    </hgroup>
    <!-- display the current season start date and end date formatted as dd/mm/yyyy -->
    <p>
      <span>{{ formatDate(season.start) }}</span>
      <span>-</span>
      <span>{{ formatDate(season.end) }}</span>
    </p>
  </header>
</template>

<style scoped>
header {
  font-family: var(--title-font);
  text-align: center;
  margin-bottom: 2.5rem;

  & hgroup {
    font-weight: 400;
    font-style: normal;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & h1 {
      font-size: 4.2rem;
      margin: 0.5rem 0 0;
      color: var(--primary);
      text-shadow: 2px 2px 0 var(--text);
      letter-spacing: 0.1rem;
    }

    & h2 {
      font-size: 3rem;
      margin: 0;
      /* color: var(--secondary); */
      /* text-shadow: 0 0 0.2rem var(--primary); */
    }
  }

  & p {
    margin-top: 0.2rem;
    font-style: italic;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
  }
}
</style>
