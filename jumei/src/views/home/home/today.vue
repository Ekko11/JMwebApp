<template>
<div class="todayScroll">
<JM-scroll>
    <div class="today">
    
        <v-touch v-for="(item,index) in list" 
        tag="div"
        :key="index" 
        @tap="toDetail(item.id)"
        class="todayList">
        <div class="todayImg"><img :src="item.url" alt=""></div>
        <div class="dec">
            <p class="decP">{{item.name}}</p>
            <div class="hemeprice">
                <p class="nowP">￥<span>{{item.jumei_price}}</span></p>
                <p class="oldP">￥<span>{{item.market_price}}</span></p>
            </div>
            <p class="disP">{{item.product_desc}}</p>
        </div>
        </v-touch >
      
    </div>
</JM-scroll>
</div>
</template>

<script>
import axios from "axios"
export default {
    name:"Today",
    data() {
        return {
            list:[]
        };
  },
  created() {
       axios({
        method:"get",
        url:"http://localhost:3000/list",
      }).then((result)=>{
        this.list = result.data

      })
  },
  methods:{
      toDetail(id){
        this.$router.push({name:"Detail",params:{id:id}})
        },
  }
};

</script>

<style scoped>
.todayScroll{
    margin: .333rem  0  .833rem;
    height: 4rem;
    overflow: hidden;
    width: 100%;
}
.todayList{
    position: relative;
}
.today{
    position: relative;
    clear: both;
}
.todayImg img{
    width: 3.125rem;
    height: 1.125rem;
}
.dec{
    height: 100%;
    font-size: .108333rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 1.691667rem;
}
.dec .decP{
    margin: .125rem 0.0333rem .267rem  .066667rem;
    color: #333;
    line-height: .15rem;
    font-size: 0.0542rem;
}
.price{
    overflow: hidden
}
.hemeprice p{
    float: left;
}
.hemeprice .nowP{
color:#fe4070;
}
.hemeprice .nowP span{
    font-weight: 700;
    
    font-size: .166667rem
}
.hemeprice .oldP{
    color: #999;
    font-size: 0.05rem;
    text-decoration: line-through;
    margin-top: .041667rem;
    margin-left: .041667rem
}
.disP{
    clear: both;
        color: #999;
    font-size: 0.0458rem;
}
</style>
