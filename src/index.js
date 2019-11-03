import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.conf.js'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Tasks from './components/Tasks.vue'
import Profile from './components/Profile.vue'
import '@/sass/main.scss'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
