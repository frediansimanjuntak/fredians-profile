<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div
      class="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12"
    >
      <div class="w-full max-w-[800px]">
        <h3
          class="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl"
        >
          Fredian Simanjuntak
        </h3>

        <p class="text-md text-gray-500 dark:text-gray-400 md:text-base">
          I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Angular, Vue.js, Laravel, Python, and Ruby on Rails. API design, database modeling, and performance optimization. Strong focus on writing clean, maintainable code and delivering real business impact.
        </p>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";

const currentPageTitle = ref("Introduction");
</script>

<style></style>
