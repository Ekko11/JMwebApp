import Speed from "views/home/speed"
import Mumbaby from "views/home/mumbaby"
import Home from "views/home/home/index.vue"
import Tomorrow from "views/home/home/tomorrow.vue"
import Today from "views/home/home/today.vue"



export default{
    path:"/home",
    component:()=>import("views/home"),
    name:'home',
    children:[
        {
            path:"/",
            redirect:"home"
        },
        {
            path:"home",
            name:"Home",
            component:Home,
            children:[
                {
                    path:"/",
                    redirect:"today.vue"
                },
                {
                    path:"today.vue",
                    name:"Today",
                    component:Today
                },
                {
                    path:"tomorrow.vue",
                    name:"Tomorrow",
                    component:Tomorrow
                },
            ]

        },
        {
            path:"mumbaby",
            name:"Mumbaby",
            component:Mumbaby
        },
        {
            path:"speed",
            name:"Speed",
            component:Speed
        },
      

    ]
}