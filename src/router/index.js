import Vue from 'vue'
import VueRouter from 'vue-router'
import AdmRoutes from '@/views/Administration/Router'

Vue.use(VueRouter)

const routes = [
   ...AdmRoutes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
