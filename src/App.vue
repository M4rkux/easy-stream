<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDark } from "@vueuse/core";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

useDark();
</script>

<template>
  <div class="main">
    <header>
      <NavBar />
    </header>

    <RouterView />
  </div>
  <FooterBar />
</template>

<style lang="scss">
@import "@/assets/base.css";

html.dark {
  color-scheme: dark;
}

body {
  @apply overflow-hidden;
}

#app {
  @apply m-0 h-screen font-normal grid;

  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;

  .main {
    @apply grid;

    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
