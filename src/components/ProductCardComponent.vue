<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  product: Object
})

const isHoverStock = ref(false)
</script>

<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
    <div class="flex flex-col items-center w-[200px] h-[230px] bg-[#ededed] mx-3 my-3 rounded-lg">
      <img :src="product.images[0]" alt="" class="w-[80px] h-[80px] mt-4">
      <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold justify-center items-center mt-2">{{ product.title }}</p>
      <p class="flex w-full h-[35px] text-mb text-wrap text-center font-semibold items-center mt-2 pl-4">${{ product.price }}</p>
      <p class="flex w-[150px] h-[35px] bg-[#322886] hover:bg-transparent border hover:border-[#322886] text-[#ededed] hover:text-black text-mb text-wrap text-center font-semibold justify-center items-center rounded mt-2"
         @mouseenter="isHoverStock = true"
         @mouseleave="isHoverStock = false"
      >
        <span v-if="!isHoverStock">Estoque</span>
        <span v-if="isHoverStock">{{ product.stock }}</span>
      </p>
    </div>
  </router-link>
</template>

<style scoped>

</style>