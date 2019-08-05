<template>
  <div id="app">
    <router-view></router-view>
    <TabBar />
  </div>
</template>
<script>
import TabBar from "common/tabBar"; 
import axios from "axios"
export default {
  name: "App",
  components: {
    TabBar
  },
  created() {
 
    // http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
    //     console.log(data);
    //   })
  }
}
</script>



