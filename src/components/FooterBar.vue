<script setup lang="ts">
import IconMdi from "@/components/IconMdi.vue";
import Button from "@/components/ButtonComponent.vue";
</script>

<template>
  <footer>
    <IconMdi icon="account" class="icon" text="66.666" />
    <IconMdi icon="video" class="text-purple-200" text="01:22:33" />
    <Button :text="$t('button.end_stream')"></Button>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply flex flex-row justify-end items-center gap-x-[15px] h-[48px] w-full px-[15px] bg-gray-300;
}
</style>
