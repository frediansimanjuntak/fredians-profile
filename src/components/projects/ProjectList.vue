<template>
  <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>