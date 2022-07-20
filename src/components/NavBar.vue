<script setup lang="ts">
import NavItem from "./NavItem.vue";
</script>
<template>
  <nav class="nav-bar">
    <div>
      <NavItem icon="filmstrip" :text="$t('menu.home')" link="/"></NavItem>
      <NavItem icon="folder" :text="$t('menu.folder')" link="/about"></NavItem>
    </div>
    <div>
      <NavItem
        icon="account-circle-outline"
        :text="$t('menu.account')"
        link="/settings"
      ></NavItem>
      <NavItem
        icon="cog"
        :text="$t('menu.settings')"
        link="/settings"
      ></NavItem>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-bar {
  @apply flex flex-col h-full justify-between w-[48px] py-[2px] bg-gray-300;

  div {
    @apply flex flex-col;
  }
}
</style>
