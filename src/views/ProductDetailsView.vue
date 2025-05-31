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
      class="flex w-[1600px] h-[700px] mx-auto my-auto bg-gray-500">
    <div class="flex flex-col font-semibold bg-red-500 m-[100px] mr-[10px] items-center justify-center w-[500px] h-[500px]">
      <p class="">Avaliação: {{ product.rating }}</p>
      <img :src="product.images[0]" alt="" class="bg-white w-[400px] h-[400px]">
      <div class="flex bg-blue-400 w-full py-2">
        <p class="ml-[50px]">R$ {{ product.price }}</p>
        <p class="ml-auto mr-[50px]">Restam {{ product.stock }}</p>
      </div>
    </div>
    <div class="flex flex-col bg-blue-400 w-[1000px] my-[100px]">
      <div class="mt-[100px]">
        <h1 class="mb-auto text-5xl font-semibold bg-white">{{ product.title }}</h1>
        <h6 class="mb-auto text-2xl font-semibold bg-black text-white">{{ product.category }}</h6>
        <p class="mt-auto font-medium bg-gray-500">{{ product.description }}</p>
      </div>
      <button class="w-[300px] h-[45px] mt-auto mr-auto mb-[15px] bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer">Comprar</button>
    </div>
  </div>
</template>

<style scoped>

</style>