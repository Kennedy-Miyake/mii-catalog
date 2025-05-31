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
      <div class="flex bg-blue-400 w-full py-2">
      </div>
    </div>
    <div class="flex flex-col bg-blue-400 w-[1000px] my-[100px]">
      <div class="mt-[100px]">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>