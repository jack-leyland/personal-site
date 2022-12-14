import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
      },
      {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/404.vue')
    }
    ]
  })

export default router