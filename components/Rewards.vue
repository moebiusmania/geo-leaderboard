<script setup lang="ts">
interface Reward {
  label: string;
  img: string;
}

const rewards: Reward[] = [
  {
    label: "Pantaloni",
    img: "https://cdn.midjourney.com/cb5b55a5-472d-40cc-bdce-1d0f4dd8d916/0_2.png",
  },
  {
    label: "Giacca",
    img: "https://cdn.midjourney.com/87bedb9f-781f-4293-b383-12aaeb9e25fb/0_0.png",
  },
  {
    label: "Zaino",
    img: "https://cdn.midjourney.com/781a45c3-b617-49c8-8de6-e5b5bda030e6/0_1.png",
  },
  {
    label: "T-shirt",
    img: "https://placehold.co/150x150",
  },
  {
    label: "Cappello",
    img: "https://placehold.co/150x150",
  },
];
</script>

<template>
  <ul>
    <li
      v-for="(reward, index) in rewards"
      :key="reward.label"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <img :src="reward.img" :alt="reward.label" />
      <span>Lvl {{ index + 1 }}: {{ reward.label }}</span>
    </li>
  </ul>
</template>

<style scoped>
/* add animation for every li to scale from 0 to 1 */
@keyframes scale-in {
  from {
    rotate: z 180deg;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    rotate: z 0deg;
  }
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;
  margin: 0 0 3rem;
  padding: 0;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    width: 150px;
    height: 150px;
    animation: scale-in 0.5s ease-in-out;
    animation-fill-mode: both;
    transition: all 0.3s ease-out;

    &:hover {
      /* rotate the image 180deg */
      scale: 1.4;
      z-index: 2;
    }

    & span {
      font-family: var(--title-font);
      font-weight: 400;
      font-style: normal;
      margin-top: -2.4rem;
      margin-left: -0.5rem;
      z-index: 1;
      font-size: 1.3rem;
      text-align: center;
      color: var(--primary);
      background-color: var(--text);
      padding: 0 0.4rem;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: skewX(-8deg);
      border: 7px solid var(--primary);
      border-radius: 6px;
    }
  }
}
</style>
