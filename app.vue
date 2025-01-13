<script setup lang="ts">
useHead({
  title: "Geografia - Season Pass",
  htmlAttrs: {
    lang: "it",
  },
  meta: [
    {
      name: "description",
      content: "Geografia - Season Pass",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --white: #eeeeee;
  --background: #f4f1de;
  --text: #3d405b;
  --primary: #e07a5f;
  --secondary: #f2cc8f;
  --base-font: "Inter", sans-serif;
  --title-font: "Bangers", serif;
}

html {
  background-repeat: no-repeat;
  background: radial-gradient(
    circle at center,
    var(--background) 30%,
    var(--secondary)
  );
}

body {
  font-family: var(--base-font);
  color: var(--text);
  font-size: 18px;
  margin: 0;
  padding: 1rem;
}
</style>
