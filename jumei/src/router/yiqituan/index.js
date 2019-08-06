import Recom  from "views/yiqituan/recom"
import MZ  from "views/yiqituan/MZ"
import MY  from "views/yiqituan/MY"
import SP  from "views/yiqituan/SP"
import LP  from "views/yiqituan/LP"
import JD  from "views/yiqituan/JD"
import JJ  from "views/yiqituan/JJ"
import BJ  from "views/yiqituan/BJ"

export default{
    path:"/yiqituan",
    component:()=>import("views/yiqituan"),
    name:'yiqituan',
    meta: {
        title: "我的",
        flag: true,
        auth:false,
    },
    children:[
        {
            path:"/",
             redirect:"recom"
        },
        {
            path:"recom",
            name:"Recom",
            component:Recom,

        },
        {
            path:"MY",
            name:"MY",
            component:MY,

        },
        {
            path:"MZ",
            name:"MZ",
            component:MZ,

        },
        {
            path:"SP",
            name:"SP",
            component:SP,

        },
        {
            path:"LP",
            name:"LP",
            component:LP,

        },
        {
            path:"JD",
            name:"JD",
            component:JD,

        },
        {
            path:"JJ",
            name:"JJ",
            component:JJ,

        },
        {
            path:"BJ",
            name:"BJ",
            component:BJ,

        }
    ]

    
}