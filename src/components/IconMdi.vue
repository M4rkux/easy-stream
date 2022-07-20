<script setup lang="ts">
defineProps<{ icon: string; text?: string }>();
</script>

<template>
  <div class="items-center flex gap-x-[5px]">
    <i class="mdi mdi-24px" :class="`mdi-${icon}`"></i>
    <span v-if="text">{{ text }}</span>
  </div>
</template>
