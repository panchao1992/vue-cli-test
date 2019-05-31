import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

/**
 * @param {state}: 驱动应用的数据源
 * @param {actions}: 响应在 view 上的用户输入导致的状态变化
 */

const store = new Vuex.Store({
    state:{
        count: 0
    },
    mutations:mutations,
    actions:actions
})

export default store