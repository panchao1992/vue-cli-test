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
const navRouter = ()=> import('@/components/navRouter')
const paramsRouter = ()=> import('@/components/paramsRouter')
const queryRouter = ()=> import('@/components/queryRouter')
const views = ()=> import('@/components/views')
const header = ()=> import('@/components/header')
const sidebar = ()=> import('@/components/sidebar')
const body = ()=> import('@/components/body')
const transition = ()=> import('@/components/transition')
const scrollTop = ()=> import('@/components/scrollTop')
const alimap = ()=> import('@/components/alimap')
const routeAppend = ()=> import('@/components/route-append')
const css3 = ()=> import('@/components/css3')
const arrayToObject = ()=> import('@/components/arrayToObject')
const topology = ()=> import('@/components/topology')
const axios = ()=> import('@/components/axios')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home' //重定向
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
      path: '/hello/:id', //动态路由
      name: 'hello',
      component: hello
    },
    {
      path: '/nestingRouter',
      name: 'nestingRouter',
      component: nestingRouter,
      children:[       //嵌套路由
        {
          path: 'navRouter',
          component:navRouter,
          children:[
            {
              name:'paramsRouter',
              path: 'paramsRouter',
              component:paramsRouter
            },
            {
              path:'queryRouter',
              component:queryRouter
            }
          ]
        }
      ]
    },
    {
      path: '/views',
      name: 'views',
      component:views,
      children:[
        {
          path:'demo',
          components: {
            header:header,
            sidebar:sidebar,
            body:body
          },
          meta:{ requiresAuth:true }, //路由元信息
          beforeEnter:(to,from ,next)=>{ //路由独享的守卫
            console.log('to:',to)
            console.log('from:',from)
            next() //必须的
          }
        }
      ]
      
    },
    {
      path: '/transition',
      name: 'transition',
      component:transition
    },
    {
      path: '/scrollTop',
      name: 'scrollTop',
      component:scrollTop
    },
    {
      path: '/alimap',
      name: 'alimap',
      component:alimap
    },
    {
      path: '/home/routeAppend',
      name: 'routeAppend',
      component:routeAppend
    },
    {
      path: '/css3',
      name: 'css3',
      component:css3
    },
    {
      path: '/arrayToObject',
      name: 'arrayToObject',
      component:arrayToObject
    },
    {
      path: '/topology',
      name: 'topology',
      component:topology
    },
    {
      path: '/axios',
      name: 'axios',
      component:axios
    },
    {
      path: '/$attrs',
      name: '$attrs',
      component: () => import ('@/components/$attrs'),
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: () => import ('@/components/lazyload'),
    },
    {
      path: '/image',
      name: 'image',
      component: () => import ('@/components/image'),
    },
  ]
})
