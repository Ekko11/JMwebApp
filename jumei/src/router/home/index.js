import Speed from "views/home/speed"
import Detail from "views/home/detail"
import Famous from "views/home/famous"
import Luxury from "views/home/luxury"
import Mumbaby from "views/home/mumbaby"
import Home from "views/home/home/index.vue"
import Tomorrow from "views/home/home/tomorrow.vue"
import Today from "views/home/home/today.vue"



export default [
    {path: "/home",
    component: () => import("views/home"),
    name: 'home',
    children: [
        {
            path: "/",
            redirect: "home"
        },
        {
            path: "home",
            name: "Home",
            component: Home,
            meta:{
                tbflag:true
            },
            children: [
                {
                    path: "/",
                    redirect: "today.vue",
                    meta:{
                        tbflag:true
                    },
                },
                {
                    path: "today.vue",
                    name: "Today",
                    component: Today,
                    meta:{
                        tbflag:true
                    },
                },
                {
                    path: "tomorrow.vue",
                    name: "Tomorrow",
                    component: Tomorrow,
                    meta:{
                        tbflag:true
                    },
                },
            ]

        },
        {
            path: "mumbaby",
            name: "Mumbaby",
            component: Mumbaby,
            meta:{
                tbflag:true
            },
        },
        {
            path: "speed",
            name: "Speed",
            component: Speed,
            meta:{
                tbflag:true
            },
        }, 
        {
            path: "luxury",
            name: "Luxury",
            meta:{
                tbflag:true
            },
            component: Luxury
        },
        {
            path: "famous",
            name: "Famous",
            meta:{
                tbflag:true
            },
            component: Famous
        },
      
    ]},
    {
        path: "/homedetail/:id",
        name: "Detail",
        meta:{
            tbflag:false
        },
        component: Detail,
        props:true
    
    }
]