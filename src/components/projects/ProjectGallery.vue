<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

    <div
      v-for="(image, index) in images"
      :key="index"
      class="overflow-hidden border rounded-xl border-gray-200 dark:border-gray-700"
    >
      <img
        :src="image"
        class="w-full transition hover:scale-105"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>