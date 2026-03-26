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
    import onehandshake1 from "/images/projects/onehandshake.png"
    import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";
    const currentPageTitle = ref("OneHandshake");

    const stack = [
        "Laravel Blade", 
        "Laravel API", 
        "Java (android and iOs)",
        "MySQL and MariaDB", 
        "AWS"
    ]
    const responsibilities = [
        "Developed backend services and APIs to support vessel scheduling and operational workflows." ,
        "Led the backend development process including task distribution, development planning, and technical guidance.",
        "Conducted testing, deployment, and system maintenance to ensure application reliability. ",
        "Participated in User Acceptance Testing (UAT) with clients, collecting and documenting feedback for system improvements. ",
        "Created technical documentation including QA testing guides, deployment documentation, and user manuals. "
    ]
    const impact = [
        "Delivered a centralized marine management platform that improved coordination between operational stakeholders. ",
        "Streamlined vessel scheduling and logistics processes within the marine ecosystem. ",
        "Improved system reliability through structured testing and deployment procedures. "
    ]
    const images = [
        onehandshake1,
        onehandshake1,
    ]
</script>

<template>
    <admin-layout>
        <PageBreadcrumb :pageTitle="currentPageTitle" />
        <ProjectLayout title="OneHandshake — Marine Operations Management System" description="OneHandshake is a digital platform designed to manage marine operations and vessel-related activities. The system provides scheduling management for vessels and coordinates operational activities between shipping agents, surveyors, logistics providers, and fuel supply management.">
            <ProjectSection title="Technology Stack">
                <ProjectStack :stack="stack" />
            </ProjectSection>
            <ProjectSection title="Role">
                <p class="text-gray-600 dark:text-gray-400">Backend Developer and Lead Small Backend team</p>
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