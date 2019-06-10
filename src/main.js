// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// 引入Vuex
import store from './store'

Vue.use(Vuex)
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
router.beforeEach((to,from,next)=>{
  console.log('to:',to)
  console.log('from:',from)
  console.log(next)
  next()
})