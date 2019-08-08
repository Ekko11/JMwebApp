import  Vue from "vue"
import  Vuex from "vuex"
Vue.use(Vuex)

import login from "./mine/login"
import register from "./mine/register"
const state = {}
const actions = {}
const mutations = {}
const getters = {}





export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        login,
        register
    }
})