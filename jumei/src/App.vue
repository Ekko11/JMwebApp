<template>
  <div id="app">
    <router-view></router-view>
    <TabBar />
  </div>
</template>
<script>
import http from "utils/http.js";
import TabBar from "common/tabBar"; 
import axios from "axios"
export default {
  name: "App",
  components: {
    TabBar
  },
  created() {
    // http(
    //   "GET",
    //   "/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json"
    // ).then((data) => {
    //   console.log(data, 1111);
    // });
    
 
    http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
        console.log(data);
      })
  }
}
</script>



<style scoped>
#app{
  height: 100%;
}
</style>
