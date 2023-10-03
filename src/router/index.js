// 引入vue路由
import { createRouter, createWebHistory } from 'vue-router'


// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
      component:()=>import('@/components/Login.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component:()=>import('@/components/Login.vue')
    },
    {
      path:'/illustration',
      name:'illustration',
      component:()=>import('../components/IllustrationFile/illustration.vue'),
      children:[
        {
          path:'details',
          name:'detailPage',
          component:()=>import('../components/IllustrationFile/detail.vue')
        }
      ]
    },
    { 
      path: '/cases',
      name: 'cases',
      component:()=>import('../components/cases.vue')
    },
    { 
      path: '/about',
      name: 'about',
      component:()=>import('../components/AboutPage.vue')
    },
    { 
      path: '/details',
      name: 'details',
      component:()=>import('../components/IllustrationFile/detail.vue')
    },
  ]
})

export default router
