import Vue from 'vue'
import VueRouter from 'vue-router'
import AdmRoutes from '@/views/Administration/Router'
import Home from '@/views/Home/Home'


Vue.use(VueRouter)

const routes = [
   ...AdmRoutes,

   {
    path: '/',
    props: true,
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
