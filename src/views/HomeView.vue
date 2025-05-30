<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProducts } from '../assets/services/products.js'
import { isSidebarOpen } from '../assets/services/sidebar.js'
import ProductCard from '../components/ProductCardComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'

const limit = 21
const skip = ref(0)

const products = ref(null)

const fetchProduct = async () => {
  const { data } = await getProducts(limit, skip.value)
  products.value = data.products
};

const nextPage = () => {
  skip.value += limit
  fetchProduct()
}

const prevPage = () => {
  if(skip.value == 0) {
    return
  }
  skip.value -= limit
  fetchProduct()
}

onMounted(async() => {
  fetchProduct()
})
</script>

<template>
  <section class="relative grid grid-cols-7 grid-rows-3 w-[1575px] h-[850px] ml-auto mt-[75px] mr-[15px] p-6 rounded-2xl shadow-xl/30">
    <Sidebar
      v-if="isSidebarOpen"
    />
    <ProductCard
      v-for="p in products"
      :product="p"
    />
    <div class="absolute bottom-1 right-6 flex gap-16 mr-2">
      <button @click="prevPage" class="px-4 py-2 rounded-lg bg-[#322886] text-white cursor-pointer">Prev</button>
      <button @click="nextPage" class="px-4 py-2 rounded-lg bg-[#322886] text-white cursor-pointer">Next</button>
    </div>
  </section>
</template>

<style scoped>

</style>