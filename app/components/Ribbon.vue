<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();
</script>

<template>
  <span class="ribbon animate__animated animate__jello">
    lvl<span>{{ props.value }}</span>
  </span>
</template>

<style scoped>
/* style the component to look like a ribbon, with the value bigger than the regular text */
.ribbon {
  background-color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--secondary);
  display: inline-block;
  text-shadow: 1px 1px 0px var(--text);
  font-family: var(--title-font);
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid var(--text);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 0px var(--text);
  position: relative;

  & span {
    font-size: 1.7rem;
    font-weight: 800;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
