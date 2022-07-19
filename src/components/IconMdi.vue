<script setup lang="ts">
defineProps<{ icon: string }>();
</script>

<template>
  <i class="mdi mdi-24px" :class="`mdi-${icon}`"></i>
</template>
