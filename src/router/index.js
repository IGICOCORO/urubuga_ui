import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Home',component: Home },
  { path: '/about',name: 'About',component: About },
  { path: '/skills',name: 'skills',component: Skills },
  { path: '/contact',name: 'contact',component: Contact }
  
]

const router = new VueRouter({
  mode : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
