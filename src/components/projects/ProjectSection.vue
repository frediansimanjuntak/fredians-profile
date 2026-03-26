<template>
  <div>
    <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
      {{ title }}
    </h3>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>