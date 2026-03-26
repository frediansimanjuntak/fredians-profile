<script setup lang="ts">
    import {
        ref
    } from "vue";
    
import AdminLayout from '../../components/layout/AdminLayout.vue'
    import ProjectLayout from "@/components/projects/ProjectLayout.vue"
    import ProjectSection from "@/components/projects/ProjectSection.vue"
    import ProjectStack from "@/components/projects/ProjectStack.vue"
    import ProjectList from "@/components/projects/ProjectList.vue"
    import ProjectGallery from "@/components/projects/ProjectGallery.vue"
    // images
    import lilium1 from "/images/projects/lilium.png"
    import lilium3 from "/images/projects/lilium-3.png"
    import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";
    const currentPageTitle = ref("Lilium");

    const stack = ["Vue.js", "Flask API", "PostgreSQL", "Linode Server"]
    const responsibilities = ["Designed system architecture and HR workflows", "Developed frontend UI using Vue.js", "Built RESTful APIs with Flask", "Collaborated with product owner to refine features", "Handled deployment and production release"]
    const impact = ["Centralized HR operations in a single platform", "Automated attendance and payroll workflows", "Reduced manual HR administrative tasks"]
    const images = [
        lilium1,
        lilium3,
    ]
</script>

<template>
    <admin-layout>
        <PageBreadcrumb :pageTitle="currentPageTitle" />
        <ProjectLayout title="Lilium — HR Management System" description="HR platform designed to manage employee attendance, contracts, leave management, overtime tracking, and payroll processing.">
            <ProjectSection title="Technology Stack">
                <ProjectStack :stack="stack" />
            </ProjectSection>
            <ProjectSection title="Role">
                <p class="text-gray-600 dark:text-gray-400"> Senior Full Stack Developer </p>
            </ProjectSection>
            <ProjectSection title="Key Responsibilities">
                <ProjectList :items="responsibilities" />
            </ProjectSection>
            <ProjectSection title="Impact">
                <ProjectList :items="impact" />
            </ProjectSection>
            <ProjectSection title="Screenshots">
                <ProjectGallery :images="images" />
            </ProjectSection>
        </ProjectLayout>
    </admin-layout>
</template>