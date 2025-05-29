<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <main class="flex flex-col min-h-screen bg-[#ededed]">
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>