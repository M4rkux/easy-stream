<script setup lang="ts">
import { RouterLink } from "vue-router";
import IconMdi from "@/components/IconMdi.vue";

defineProps<{
  icon: string;
  text: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="link" class="item" :title="text">
    <IconMdi :icon="icon" class="icon" />
  </RouterLink>
</template>

<style scoped lang="scss">
.item {
  @apply flex justify-center h-[48px]  text-purple-100 ml-[2px];
  @apply border-solid border-0 border-l-2 border-transparent;

  &.router-link-exact-active {
    @apply border-white text-white;
  }

  .icon {
    @apply self-center;
  }
  &:hover {
    @apply text-white;
  }
}
</style>
