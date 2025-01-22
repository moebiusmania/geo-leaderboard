<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<template>
  <h1>Player {{ slug }}</h1>
</template>
