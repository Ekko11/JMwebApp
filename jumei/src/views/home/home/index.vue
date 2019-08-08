<template>
    <div class="adv">
        <router-link v-for="(item,index) in twoclass" tag="div" class="advClass"
         :key='index' :to="item.url" >{{item.info}}</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Index",
    data() {
    return {
      twoclass:[
          {
              info:"今日10点上新",
              url:"/home/home/today.vue",
          },
          {
              info:"明日10点预告",
              url:"/home/home/tomorrow.vue",
          },
      ]
    };
  }
};

</script>

<style scoped>

.advClass{
    float: left;
    width: 50%;
    text-align: center;
    line-height: .333333rem;  
    height: .333333rem;
    background: #fff;
    z-index: 10;
}
.adv .router-link-active{
    color:#fe4070;
}
.adv{
    height: 100%;
    overflow: hidden
}
</style>
