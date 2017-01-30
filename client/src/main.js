// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home/Home'
import Hello from './components/Hello/Hello'
import Navbar from './components/Navbar/Navbar'
import BlogPost from './components/BlogPost/BlogPost'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.component('Navbar', Navbar)

const routes = [
  { path: '/home', component: Home },
  { path: '/hello', component: Hello },
  { path: '/blogPost', component: BlogPost },
  { path: '*', component: Home }
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  template: require('./main.template.html')
}).$mount('#container')

