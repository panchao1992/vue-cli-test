import Vue from 'vue'
import Router from 'vue-router'
const menu = ()=> import('@/components/menu')
const fa = ()=> import('@/components/fa')
const filter = ()=> import('@/components/filter')
const ifelse = ()=> import('@/components/if-else')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/fa',
      name: 'fa',
      component: fa
    },
    {
      path: '/filter',
      name: 'filter',
      component: filter
    },
    {
      path: '/if-else',
      name: 'ifelse',
      component: ifelse
    },
  ]
})
