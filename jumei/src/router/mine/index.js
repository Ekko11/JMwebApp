export default{
    path:"/mine",
    component:()=>import("views/mine"),
    name:'mine',
    meta: {
        title: "我的",
        flag: true,
        auth:false,
    },
}