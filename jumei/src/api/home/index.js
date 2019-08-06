import http from "utils/http.js"
export const home_mum_api =()=> http("get","/muandbaby/ajaxList",{page:1,card_id:7430})
export const home_Luxury_api =()=> http("get","/luxury/ajaxList",{page:1,card_id:1837})
