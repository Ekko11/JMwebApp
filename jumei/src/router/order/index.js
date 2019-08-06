export default{
    path:"/order",
    component:()=>import("views/order"),
    meta: {
        title: "购物车",
        flag: true,
        auth:false,
    },
}