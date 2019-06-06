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
      path: '/hello/:id',
      name: 'hello',
      component: hello
    },
    {
      path: '/nestingRouter',
      name: 'nestingRouter',
      component: nestingRouter,
      children:[       //嵌套路由
        {
          path: '/navRouter',
          component:navRouter,
          children:[
            {
              name:'paramsRouter',
              path: '/paramsRouter',
              component:paramsRouter
            },
            {
              path:'/queryRouter',
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
      components: {
        header:header,
        // sidebar:sidebar,
        // body:body
      }
    },
  ]
})
