import Vue from 'vue'
import Router from 'vue-router'
const error = ()=> import('@/components/404')
const menu = ()=> import('@/components/menu')
const fa = ()=> import('@/components/fa')
const filter = ()=> import('@/components/filter')
const ifelse = ()=> import('@/components/if-else')
const vuex = ()=> import('@/components/vuex')
const activeRouter = ()=> import('@/components/activeRouter')
const hello = ()=> import('@/components/hello')
const nestingRouter = ()=> import('@/components/nestingRouter')
const nestingRouter1 = ()=> import('@/components/nestingRouter')
const nestingRouter2 = ()=> import('@/components/nestingRouter')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'menu',
      component: menu,
      alias:['/menu'] //别名
    },
    {
      path:'*',
      name:'error',
      component:error
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
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/activeRouter',
      name: 'activeRouter',
      component: activeRouter
    },
    {
      path: '/hello/:id',
      name: 'hello',
      component: hello
    },
    {
      path: '/nestingRouter',
      name: 'nestingRouter',
      component: nestingRouter,
      children:[
        {
          path: '/nestingRouter/view1',
          component:nestingRouter1
        },
        {
          path: '/nestingRouter/view2',
          component:nestingRouter2
        }
      ]
    },
  ]
})
