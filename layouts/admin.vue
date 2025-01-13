<template>
  <div class="admin-layout">
    <!-- Your admin layout structure -->
    <slot />
    <!-- This is where the page content will be rendered -->
  </div>
</template>

<style scoped>
.admin-layout {
  padding: 1rem 1.5rem;
  background: var(--white);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }
}
</style>
