<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toggleSidebar } from '../assets/services/sidebar.js'
import { getProductsOnSearch } from '../assets/services/products.js'
import debounce from '../assets/services/debounce.js'
import SearchResults from './SearchResultsComponent.vue'

const limit = 3

const searchTerm = ref('')
const results = ref([])

const route = useRoute()
const router = useRouter()

function goToHome() {
  if(route.name === 'ProductDetails') { router.push({ name: 'home' })}
}

async function fetchResults(term) {
  if(!term) {
    results.value = []
    return
  }
  try {
    const { data } = await getProductsOnSearch(term)
    results.value = data.products
    results.value = results.value.slice(0, limit)
  } catch(error) {
    console.error('Erro na busca: ', error)
  }
}

const debouncedSearch = debounce((e) => {
  fetchResults(searchTerm.value)
}, 300)
</script>

<template>
  <nav class="fixed top-0 left-0 flex bg-[#322886] w-full h-[70px]">
    <button
        @click="toggleSidebar(); goToHome()"
        class="flex text-[#ebebeb] font-bold text-3xl items-center ml-[30px] cursor-pointer">
      MII Catalog
    </button>
    <form class="flex items-center ml-auto">
      <input
          v-model="searchTerm"
          @input="debouncedSearch"
          placeholder="Busque seus produtos..."
          class="w-[600px] h-[40px] border-2 border-r-0 border-[#ededed] focus:outline-none focus:ring-0 rounded-l-md text-[#ededed] px-4"
      />
      <button
        type="submit"
        class="h-[40px] mr-[30px] border-2 border-l-0 border-[#ededed] rounded-r-md px-2 cursor-pointer"
      >
        <img src="../assets/icons/search-svgrepo-com.svg" alt="search" class="h-[30px]">
      </button>
    </form>
  </nav>
  <transition
    enter-from-class="opacity-0 translate-y-[-10px]"
    enter-to-class="opacity-100 translate-y-0"
    enter-active-class="transition duration-300 delay-600 ease-out"
    leave-active-class="transition duration-200 ease-in"
  >
    <div
        v-if="searchTerm"
        class="absolute ml-auto right-7 w-[647px] h-[400px] bg-[#322886] rounded-lg mt-18 z-50">
      <SearchResults
          v-for="r in results"
          :result="r"
      />
    </div>
  </transition>
</template>

<style scoped>

</style>