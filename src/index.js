import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Tasks from './components/Tasks.vue'
import '@/sass/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
