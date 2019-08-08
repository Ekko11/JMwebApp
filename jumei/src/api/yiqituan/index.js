import http from "utils/http.js"
import { get } from "https";
// export const yiqituan_recom_api =(page=1,per_page=20)=> http("get","/yiqituan/tab_list/tab=coutuan_home",{page:1,per_page:20})
export const yiqituan_recom_api =()=>http("get","/yiqituan/tab_list",{tab:"coutuan_home",page:1,per_page:20}) 