<template>
    
    <div class="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-8">
        <div class="p-3 space-y-10">
            <div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
                {{ title }}
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">
                {{ description }}
            </p>
            </div>

            <slot />

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>