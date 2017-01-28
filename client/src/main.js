// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Hello from './components/Hello'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/hello', component: Hello },
  { path: '*', component: Home }
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#container')

