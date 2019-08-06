import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import order from "./order"
import mine from "./mine"
import yiqituan from "./yiqituan"
import login from "./login"
import register from "./register"




Vue.use(VueRouter)
const router = new VueRouter({
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



// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     if(to.path !="/login" && to.meta.auth){
//         if(sessionStorage.getItem("token")){
//             next();
//         }else{
//             next("/login");
//         }
//     }else{
//         next();
//     }
   
// })




export default router;