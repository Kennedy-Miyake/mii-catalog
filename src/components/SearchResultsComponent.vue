<script setup lang="ts">
defineProps({
  result: Object
})
</script>

<template>
  <div class="flex w-[600px] h-[100px] bg-[#ededed] rounded-lg text-black m-6">
    <img :src="result.images[0]" alt="" class="w-[80px] h-[70px] m-4">
    <div class="w-full mt-4 space-y-[10px]">
      <div class="h-[30px] font-semibold">{{ result.title }}</div>
      <div class="w-[120px] h-[30px] font-medium">R${{ result.price }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>