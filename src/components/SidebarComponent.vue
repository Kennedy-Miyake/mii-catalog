<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue'
import { getCategories } from '../assets/services/products.js'

const categoriesTotal = ref([])
const categoriesSide = ref([])
const limit = 14
const skip = ref(0)

const loading = ref(true)

const emit = defineEmits(['selectCategory'])

const fetchCategories = async () => {
  const { data } = await getCategories()
  categoriesTotal.value = data
  categoriesSide.value = categoriesTotal.value.slice(skip.value, skip.value+limit)
  loading.value = false
}

function select(category) {
  emit('selectCategory', category)
}

const nextPage = () => {
  skip.value += limit
  if(skip.value > categoriesTotal.value.length) { return }
  fetchCategories()
}

const prevPage = () => {
  if(skip.value == 0) { return }
  skip.value -= limit
  fetchCategories()
}

onMounted(async () => {
  fetchCategories()
})
</script>

<template>
<div
    v-if="!loading"
    class="fixed grid grid-rows-16 top-[75px] left-[15px] flex flex-col bg-[#322886] w-[300px] h-[850px] rounded-2xl z-50">
  <h3 class="flex mx-auto text-[#ebebeb] font-bold text-3xl mt-4">Categorias</h3>
  <button
      v-for="category in categoriesSide"
      class="flex justify-center items-center w-full h-[40px] text-[#ebebeb] hover:bg-[#2d2377] cursor-pointer mt-2"
      @click="select(category)">
    {{ category }}
  </button>
  <div class="flex absolute bottom-1 items-center w-full h-[30px] px-6 mb-2 mt-auto">
    <button @click="prevPage" class="text-[#322886] w-[70px] h-full bg-[#ebebeb] border hover:text-[#ebebeb] hover:bg-transparent hover:border-[#ebebeb] cursor-pointer rounded-md">prev</button>
    <button @click="nextPage" class="text-[#322886] w-[70px] h-full bg-[#ebebeb] border hover:text-[#ebebeb] hover:bg-transparent hover:border-[#ebebeb] cursor-pointer rounded-md ml-auto">next</button>
  </div>
</div>
</template>

<style scoped>

</style>