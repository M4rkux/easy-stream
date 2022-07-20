<script setup lang="ts">
defineProps<{
  theme?: string;
  text?: string;
}>();

function log() {
  console.log("Button clicked");
}
</script>

<template>
  <button @click="log">{{ text }}</button>
</template>

<style scoped lang="scss">
button {
  @apply bg-transparent px-[10px] py-[5px] text-purple-200;
  @apply border-2 rounded-[5px] border-purple-200 border-opacity-30 border-solid;

  &:hover {
    @apply bg-purple-200 bg-opacity-30 text-white cursor-pointer;
  }

  &:active {
    @apply bg-opacity-0;
  }
}
</style>
