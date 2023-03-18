import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    component:()=>import('@/components/pages/index.vue')
  },

  {
    path:'/manger',
    component:()=>import ('@/components/adminmanger/manger.vue'),
    meta:{
      require:true
    },
    redirect: '/manger/data',
    children:[{
      path:'news',
      component:()=>import('@/components/news/new.vue')
    },
    {
      path:'userlist',
      component:()=>import('@/components/userlist/user.vue')
    },
    {
      path:'data',
      component:()=>import('@/components/userlist/data.vue')
    }
  ]
  },
  {
    path:'/login',
    component:()=>import('@/components/login/login.vue')
  },
  {
    path:'/register',
    component:()=>import('@/components/login/register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
