import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'petshop',
    path: '/petshop/:id',
    component: () => import('../views/Petshop.vue'),
    props: true
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
