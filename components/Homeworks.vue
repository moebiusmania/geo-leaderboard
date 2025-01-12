<script setup lang="ts">
const { data: homeworks } = defineProps<{
  data: Array<string>;
}>();
</script>

<template>
  <section class="paper">
    <div class="content">
      <h3>📚 Compiti per casa</h3>
      <p>
        Ecco gli esercizi da completare per questa stagione. Completa tutti gli
        esercizi per ottenere il massimo dei punti!
      </p>
      <ul>
        <li v-for="(homework, index) in homeworks" :key="index">
          <a :href="homework" target="_blank" rel="noopener">
            Esercizio {{ index + 1 }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.paper {
  background: #fff;
  padding: 2rem;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  margin: 5rem auto 0;
}

.content {
  & h3 {
    font-family: var(--title-font);
    color: var(--primary);
    margin: 0 0 1rem;
    font-size: 1.8rem;
  }

  & p {
    margin: 0 0 1.5rem;
    line-height: 1.5;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;

    & li {
      margin: 0.5rem 0;
      padding-left: 1rem;
      border-left: 3px solid var(--primary);

      & a {
        color: var(--text);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
