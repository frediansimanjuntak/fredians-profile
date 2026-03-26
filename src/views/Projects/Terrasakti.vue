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
    import terrasakti from "/images/projects/terrasakti.png"
    import terrasakti2 from "/images/projects/terrasakti-2.png"
    import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";
    const currentPageTitle = ref("Terrasakti");

    const stack = [
        "Next.js", 
        "Node.js", 
        "PostgreSQL", 
        "AWS"
    ]

    const responsibilities = [
        "Led the development team by planning tasks, distributing work to developers, and ensuring project milestones were achieved on time.", 
        "Participated in system architecture discussions and technical decision-making.", 
        "Conducted code reviews, testing processes, and daily stand-up meetings to maintain development quality and team coordination.", 
        "Collaborated closely with the project manager to align technical implementation with business requirements.", 
        "Contributed to core system development and deployment processes."
        ]

    const impact = [
        "Helped deliver a digital platform that improved operational visibility in mining production processes.", 
        "Increased development efficiency through structured team coordination and code review practices.", 
        "Ensured stable deployments and consistent delivery across development cycles.",
    ]

    const images = [
        terrasakti,
        terrasakti2,
    ]
</script>

<template>
    <admin-layout>
        <PageBreadcrumb :pageTitle="currentPageTitle" />
        <ProjectLayout title="Terrasakti — Digital Mining Management System" description="Terrasakti is a digital management platform built to support mining operations. The system provides features such as production tracking, engineering and operations management, logistics management, and workforce management to improve operational efficiency within mining environments.">
            <ProjectSection title="Technology Stack">
                <ProjectStack :stack="stack" />
            </ProjectSection>
            <ProjectSection title="Role">
                <p class="text-gray-600 dark:text-gray-400"> Senior Full Stack Developer and Team Lead </p>
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