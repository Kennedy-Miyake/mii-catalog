<script setup lang="ts">

</script>

<template>
  <nav class="flex bg-[#322886] h-[70px]">
    <h3 class="flex text-[#ebebeb] font-bold text-3xl items-center ml-[30px]">MII Catalog</h3>
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
</template>

<style scoped>

</style>