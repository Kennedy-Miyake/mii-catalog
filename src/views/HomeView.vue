<script setup lang="ts">
import {ref, onMounted, computed} from 'vue'
import { getProducts, getProductsByCategory } from '../assets/services/products.js'
import { isSidebarOpen } from '../assets/services/sidebar.js'
import ProductCard from '../components/ProductCardComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'

const limit = 21
const skip = ref(0)

const products = ref([])

const selectedCategory = ref(null)

const fetchProduct = async () => {
  const { data } = await getProducts(limit, skip.value)
  products.value = data.products
};

const updatePagination = () => {
  if(!selectedCategory.value) { fetchProduct() }
}

const filteredProducts = computed(() => {
  if(!selectedCategory.value) { return products.value }
  return products.value.slice(skip.value, limit + skip.value)
})

async function categorySelected(category) {
  selectedCategory.value = category
  skip.value = 0
  const { data } = await getProductsByCategory(category)
  products.value = data.products
}

const nextPage = () => {
  if(products.value.length < 21 || (((skip.value + limit) > products.value.length) && selectedCategory.value)) { return }
  skip.value += limit
  updatePagination()
}

const prevPage = () => {
  if(skip.value == 0) { return }
  skip.value -= limit
  updatePagination()
}

onMounted(async() => {
  fetchProduct()
})
</script>

<template>
  <section class="relative grid grid-cols-7 grid-rows-3 w-[1575px] h-[850px] ml-auto mt-[75px] mr-[15px] bg-[#322866] p-6 rounded-2xl shadow-xl/30">
    <Sidebar
      v-if="isSidebarOpen"
      @selectCategory="categorySelected"
    />
    <ProductCard
      v-for="p in filteredProducts"
      :product="p"
    />
    <div class="absolute bottom-1 right-6 flex gap-16 mr-2">
      <button @click="prevPage" class="px-4 py-2 rounded-lg bg-[#ededed] text-[#322886] cursor-pointer">Prev</button>
      <button @click="nextPage" class="px-4 py-2 rounded-lg bg-[#ededed] text-[#322886] cursor-pointer">Next</button>
    </div>
  </section>
</template>

<style scoped>

</style>