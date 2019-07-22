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
    }
  ]
})
