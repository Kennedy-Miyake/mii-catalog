<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '../assets/services/products.js'

const route = useRoute()

const product = ref(null)

onMounted(async () => {
  const id = route.params.id
  const { data } = await getProductById(id)
  product.value = data
  console.log(product.value)
})
</script>

<template>
  <div
      v-if="product"
      class="flex w-[1600px] h-[700px] mx-auto my-auto bg-[#322886] rounded-lg">
    <div class="flex flex-col font-semibold bg-[#ededed] m-[100px] mr-0 items-center justify-center w-[500px] h-[500px] rounded-l-xl">
      <p class="">Avaliação: {{ product.rating }}</p>
      <img :src="product.images[0]" alt="" class="w-[400px] h-[400px]">
      <div class="flex w-full py-2">
        <p class="ml-[50px]">R$ {{ product.price }}</p>
        <p class="ml-auto mr-[50px]">Restam {{ product.stock }}</p>
      </div>
    </div>
    <div class="flex flex-col bg-[#ededed] w-[900px] my-[100px] rounded-r-xl">
      <div class="mt-[100px]">
        <h1 class="mb-auto text-5xl font-semibold">{{ product.title }}</h1>
        <h6 class="mb-auto text-2xl font-semibold">{{ product.category }}</h6>
        <p class="mt-auto font-medium">{{ product.description }}</p>
      </div>
      <button class="w-[300px] h-[45px] mt-auto mr-auto mb-[15px] bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer">Comprar</button>
    </div>
  </div>
</template>

<style scoped>

</style>