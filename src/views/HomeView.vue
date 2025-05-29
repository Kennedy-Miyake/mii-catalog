<script setup lang="ts">

</script>

<template>
  <section class="relative grid grid-cols-7 grid-rows-3 w-[1575px] h-[850px] ml-auto mt-[75px] mr-[15px] p-6 rounded-2xl bg-black">
    <div class="flex flex-col items-center w-[200px] h-[230px] bg-gray-500 mx-3 my-3 rounded-lg">
      <div class="w-[80px] h-[80px] bg-white mt-4"></div>
      <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold justify-center items-center bg-red-300 mt-2">Nome do Produto</p>
      <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold items-center bg-red-300 mt-2 pl-4">R$99.90</p>
      <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold justify-center items-center bg-red-300 mt-2">Estoque</p>
    </div>

    <div class="absolute bottom-1 right-6 flex gap-16 mr-2">
      <button class="px-4 py-2 rounded-lg bg-[#322886] text-white cursor-pointer">Prev</button>
      <button class="px-4 py-2 rounded-lg bg-[#322886] text-white cursor-pointer">Next</button>
    </div>
  </section>
</template>

<style scoped>

</style>