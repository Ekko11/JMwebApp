<template>
  <div class="content" >
    <JM-scroll ref="JMscroll">
    <ul class="content_type">
      <li v-for="item in data" :key="item.item_id">
        <router-link :to="'/goodsDetail?item_id='+item.item_id+'&type='+item.type">
          <div class="content-txt">
            <span class="number">{{item.buyer_number_text}}</span>
            <img :src="item.image" />
          </div>
          <p class="des">
            <span>{{item.group_name_tag}}</span>
            <i>{{item.short_name}}</i>
          </p>
          <div class="price">
            <div class="price_box">
              <span class="price-now">{{item.jumei_price}}</span>
              <p class="price-old">{{item.single_price}}</p>
            </div>
            <span class="tuan">去开团</span>
          </div>
        </router-link>
      </li>
    </ul>
    </JM-scroll>
  </div>
</template>

<script>
import http from "utils/http.js";
import { yiqituan_recom_api } from "api/yiqituan";

export default {
  name: "Recom",
  data() {
    return {
      data:[],
      goodsList: [],
      pageId:+1
    };
  },
async created() {
    // http("get", "/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20").then(
    //   data => {
    //     this.data = data.data;
    //   }
    // );
   
    // console.log(222)
    let data = await yiqituan_recom_api(2);
    // console.log(data)
    this.data=data.data;  
  }
 
};
</script>

<style>
/*                 内容                      */
.content {
  height: 4.8083rem;
  width: 100%;
}
.content_type{
  background: rgb(245, 244, 244);
  
}

.content li {
  background: #fff;
   margin-bottom: .07rem;
   width: 100%;
   height: 2.166667rem;
}

.content-txt {
  font-size: 0.116667rem;
  position: relative;
}

.content-txt img {
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

.number {
    font-size: .091667rem;
    padding: .033333rem .058333rem;
    position: absolute;
    left: 0;
    top: 1rem;
    border: .008333rem solid #eee;
    border-left: 0;
    border-top-right-radius: 1.5625rem;
    border-bottom-right-radius: 1.5625rem;
    color: #666;
    background: rgba(251,251,251,.8);
}

.des {
    font-size:.116667rem;
    max-height: .283333rem;
    line-height: .15rem;
    padding: 0 .1rem;
    margin-top: .083333rem;
   
}
.des span {
    color: #fe4070;
    display: inline-block;
}
.des i {
  list-style: none;
}

.price {
  margin: .083333rem 0 0 ;
  height: 0.5rem;
  width: 100%;
  padding: 0.1rem;

}
.price_box{
  width:.516667rem;
  display: block;

}
.price-now {
  font-size: 0.15rem;
  width: 100%;
  color: #fe4070;
  font-weight: bold;
  display: block;
}

.price-old p{
  width: 100%;
  font-size: 0.091667rem;
  color: #999;
  display: block;

}

.tuan {
  border-radius: 0.208333rem;
  float: right;
  display: block;
  border: 0.0625rem solid #fdeef2;
  background: #fe4070;
  font-size: .116667rem;
  text-align: center;
  width: .733333rem;
  color: #eee
}


</style>
