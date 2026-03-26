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
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () => import('../views/Tables/BasicTables.vue'),
      meta: {
        title: 'Basic Tables',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },

    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },

    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Fredian Simanjuntak - ${to.meta.title}`
  next()
})
