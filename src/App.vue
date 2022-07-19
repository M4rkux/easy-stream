<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDark } from "@vueuse/core";
import NavBar from "./components/NavBar.vue";

useDark();
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

html.dark {
  color-scheme: dark;
}

#app {
  @apply m-0 font-normal flex flex-row;
}
</style>
