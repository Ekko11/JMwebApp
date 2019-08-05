<template>
    <div class="today">
    
        <div v-for="(item,index) in list" :key="index" class="todayList">
        <div class="todayImg"><img :src="item.url" alt=""></div>
        <div class="dec">
            <p class="decP">{{item.name}}</p>
            <div class="price">
                <p class="nowP">￥<span>{{item.jumei_price}}</span></p>
                <p class="oldP">￥<span>{{item.market_price}}</span></p>
            </div>
            <p class="disP">{{item.product_desc}}</p>
        </div>
        </div>
      
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
};

</script>

<style>

.todayList{
    position: relative;
}
.today{
    height: 100%;
     overflow: scroll;
    position: relative;
    clear: both;
}
.todayImg img{
    width: 3.125rem;
    height: 1.125rem;
}
.dec{
    font-size: .108333rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 1.691667rem;
    height:1.083333rem;
}
.dec .decP{
    margin: .125rem 0.0333rem .333333rem  .066667rem;
    color: #333;
    line-height: .15rem;
    font-size: 0.0542rem;
}
.price{
    overflow: hidden
}
.price p{
    float: left;
}
.price .nowP{
color:#fe4070;
}
.price .nowP span{
    font-weight: 700;
    
    font-size: .166667rem
}
.price .oldP{
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
