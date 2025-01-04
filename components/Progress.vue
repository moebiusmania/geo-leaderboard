<script setup lang="ts">
const props = defineProps<{
  levels: number;
  current: number;
  cap: number;
  score: number;
  progress: number;
}>();

const circles = Array.from({ length: props.levels }, (_, i) => i + 1);
</script>

<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: `${progress}%` }" />
      <div class="circles">
        <div
          v-for="circle in circles"
          :key="circle"
          class="circle"
          :class="{ active: circle <= current }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  width: 100%;
  padding: 20px 0;

  & .progress-bar {
    position: relative;
    height: 6px;
    background: var(--text);
    border-radius: 2px;
  }

  & .progress-fill {
    position: absolute;
    height: 100%;
    background: var(--primary);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  & .circles {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  & .circle {
    --size: 20px;

    width: var(--size);
    height: var(--size);
    background: var(--text);
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  & .circle.active {
    background: var(--primary);
  }
}
</style>
