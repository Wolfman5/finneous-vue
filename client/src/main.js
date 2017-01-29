// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Hello from './components/Hello'
import Navbar from './components/Navbar'
import BlogPost from './components/BlogPost'
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
  template: '<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">' +
    '<Navbar></Navbar>' +
    '<main id="content" class="mdl-layout__content">' +
      '<div class="mdl-grid">' +
        '<div class="content mdl-cell mdl-cell--1-col"></div>' +
        '<div class="content mdl-cell mdl-cell--10-col">' +
          '<router-view><router-view>' +
        '</div>' +
        '<div class="content mdl-cell mdl-cell--1-col"></div>' +
      '</div>' +
    '</main>' +
  '</div>'
}).$mount('#container')

