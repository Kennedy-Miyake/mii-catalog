<script setup lang="ts">

</script>

<template>
<div class="fixed grid grid-rows-16 top-[75px] left-[15px] flex flex-col bg-[#322886] w-[300px] h-[850px] rounded-2xl z-50">
  <h3 class="flex mx-auto text-[#ebebeb] font-bold text-3xl mt-4">Categorias</h3>
  <div class="flex justify-center items-center w-full h-[40px] text-[#ebebeb] hover:bg-[#2d2377] cursor-pointer mt-2">Hardware</div>
  <div class="flex absolute bottom-1 items-center w-full h-[30px] px-6 mb-2 mt-auto">
    <button class="text-[#322886] w-[70px] h-full bg-[#ebebeb] border hover:text-[#ebebeb] hover:bg-transparent hover:border-[#ebebeb] cursor-pointer rounded-md">prev</button>
    <button class="text-[#322886] w-[70px] h-full bg-[#ebebeb] border hover:text-[#ebebeb] hover:bg-transparent hover:border-[#ebebeb] cursor-pointer rounded-md ml-auto">next</button>
  </div>
</div>
</template>

<style scoped>

</style>