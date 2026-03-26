import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: () => import('../views/Introduction.vue'),
      meta: {
        title: 'Introduction',
        breadcrumb: 'Introduction',
      },
    },
    {
      path: '/about-me',
      name: 'About Me',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'About Me',
        breadcrumb: 'About Me',
      },
    },
    {
      path: '/resume',
      name: 'Resume',
      redirect: () => {
        window.open('https://drive.google.com/file/d/1P7_YrQj2TQQ2rFSd0sOQFaswY9jtFHcy/view?usp=sharing', '_blank')
        return '/'
      },
      meta: {
        title: 'Resume',
        breadcrumb: 'Resume',
      },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Project.vue'),
      meta: {
        title: 'Projects',
        breadcrumb: 'Projects',
      },
    },
    {
      path: '/projects/onehandshake',
      name: 'OneHandshake',
      component: () => import('../views/Projects/OneHandshake.vue'),
      meta: {
        title: 'OneHandshake',
        breadcrumb: 'OneHandshake',
      },
    },
    {
      path: '/projects/lilium',
      name: 'Lilium',
      component: () => import('../views/Projects/Lilium.vue'),
      meta: {
        title: 'Lilium',
        breadcrumb: 'Lilium',
      },
    },
    {
      path: '/projects/terrasakti',
      name: 'Terrasakti',
      component: () => import('../views/Projects/Terrasakti.vue'),
      meta: {
        title: 'Terrasakti',
        breadcrumb: 'Terrasakti',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Fredian Simanjuntak - ${to.meta.title}`
  next()
})
