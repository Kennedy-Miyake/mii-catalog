<script setup lang="ts">
import SidebarComponent from '../components/SidebarComponent.vue'
import { isSidebarOpen, toggleSidebar } from '../assets/services/sidebar.js'
</script>

<template>
  <nav class="fixed top-0 left-0 flex bg-[#322886] w-full h-[70px]">
    <button
        @click="toggleSidebar"
        class="flex text-[#ebebeb] font-bold text-3xl items-center ml-[30px] cursor-pointer">
      MII Catalog
    </button>
    <form class="flex items-center ml-auto">
      <input
          type="text"
          placeholder="Busque seus produtos..."
          class="w-[500px] h-[40px] border-2 border-r-0 border-[#ededed] focus:outline-none focus:ring-0 rounded-l-md text-[#ededed] px-4"
      />
      <button
        type="submit"
        class="h-[40px] mr-[30px] border-2 border-l-0 border-[#ededed] rounded-r-md px-2 cursor-pointer"
      >
        <img src="../assets/icons/search-svgrepo-com.svg" alt="search" class="h-[30px]">
      </button>
    </form>
  </nav>
  <SidebarComponent
    v-if="isSidebarOpen"
    @close="toggleSidebar"
  />
</template>

<style scoped>

</style>