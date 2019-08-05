import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import order from "./order"
import mine from "./mine"
import yiqituan from "./yiqituan"
import login from "./login"
import register from "./register"




Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        order,
        yiqituan,
        mine,
        login,
        register
    ]
})