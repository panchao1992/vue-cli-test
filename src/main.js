// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// 引入Vuex
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '../static/loading.gif',
  attempt: 1
})
//Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

//全局前置守卫
// router.beforeEach((to,from,next)=>{
//   console.log('to:',to)
//   console.log('from:',from)
//   console.log(next)
//   next() //必须的
// })

//全局后置钩子
router.afterEach((to, from) => {
  console.log('to:',to)
  console.log('from:',from)
})
Vue.prototype.author = 'Panchao' //相当于全局变量
Vue.prototype.$axios = axios