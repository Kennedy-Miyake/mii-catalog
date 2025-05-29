<script setup lang="ts">
defineProps({
  product: Object
})
</script>

<template>
  <div class="flex flex-col items-center w-[200px] h-[230px] bg-gray-500 mx-3 my-3 rounded-lg">
    <img :src="product.images[0]" alt="" class="w-[80px] h-[80px] bg-white mt-4">
    <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold justify-center items-center mt-2">{{ product.title }}</p>
    <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold items-center mt-2 pl-4">${{ product.price }}</p>
    <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold justify-center items-center bg-red-300 mt-2">Estoque</p>
  </div>
</template>

<style scoped>

</style>