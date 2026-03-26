<template>
  <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
    
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">
      {{ pageTitle }}
    </h2>

    <nav>
      <ol class="flex items-center gap-1.5">
        <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path">

          <router-link
            v-if="index !== breadcrumbs.length - 1"
            :to="crumb.path"
            class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
          >
            {{ crumb.label }}

            <svg
              class="stroke-current"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                stroke=""
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

          </router-link>

          <span
            v-else
            class="text-sm text-gray-800 dark:text-white/90"
          >
            {{ crumb.label }}
          </span>

        </li>
      </ol>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)

  const crumbs = [
    { label: "Home", path: "/" }
  ]

  let currentPath = ""

  paths.forEach((segment) => {
    currentPath += `/${segment}`

    crumbs.push({
      label: segment
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      path: currentPath,
    })
  })

  return crumbs
})

const pageTitle = computed(() => route.meta.title)
</script>