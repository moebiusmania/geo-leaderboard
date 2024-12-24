<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>
      {{ year }} - "🌍 Geografia Season Pass" è un progetto sperimentale
      didattico senza fini di lucro. I sorgenti sono disponibili con licenza MIT
      su <a href="https://github.com/moebiusmania/geo-leaderboard">GitHub</a>.
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  & p {
    font-size: 0.8rem;
    text-align: center;
    font-style: italic;
    font-weight: 600;

    & a {
      color: var(--primary);
      text-decoration: none;
      text-shadow: 1px 1px 0px var(--text);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
