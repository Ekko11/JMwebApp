import http from "utils/http.js"
export const home_mum_api =(page=1,card_id=7430)=> http("get","/muandbaby/ajaxList",{page:1,card_id:7430})