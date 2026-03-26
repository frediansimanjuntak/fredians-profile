<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="px-6 py-5">
        <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
          Project Showcase
        </h3>
      </div>
      <div class="border-t border-gray-100 p-4 sm:p-6 dark:border-gray-800">
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <!-- Card Item -->
          <div>
            <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]">
              <div class="mb-5 overflow-hidden rounded-lg">
                <img src="/images/projects/onehandshake.png" alt="card" class="overflow-hidden rounded-lg">
              </div>

              <div>
                <h4 class="mb-1 text-theme-xl font-medium text-gray-800 dark:text-white/90">
                  OneHandshake
                </h4>

                <p class="text-sm text-gray-500 dark:text-gray-400">
                  OneHandshake is a digital platform designed to manage marine operations and vessel-related activities. 
                </p>

                <a href="/projects/onehandshake" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <!-- Card Item -->
          <div>
            <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]">
              <div class="mb-5 overflow-hidden rounded-lg">
                <img src="/images/projects/lilium.png" alt="card" class="overflow-hidden rounded-lg">
              </div>

              <div>
                <h4 class="mb-1 text-theme-xl font-medium text-gray-800 dark:text-white/90">
                  Lilium
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Lilium is a Human Resource Management System designed to streamline HR operations.
                </p>

                <a href="/projects/lilium" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <!-- Card Item -->
          <div>
            <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]">
              <div class="mb-5 overflow-hidden rounded-lg">
                <img src="/images/projects/terrasakti.png" alt="card" class="overflow-hidden rounded-lg">
              </div>

              <div>
                <h4 class="mb-1 text-theme-xl font-medium text-gray-800 dark:text-white/90">
                  Terrasakti
                </h4>

                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Terrasakti is a digital management platform built to support mining operations. 
                </p>

                <a href="/projects/terrasakti" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";

const currentPageTitle = ref("Project");
</script>

<style></style>
