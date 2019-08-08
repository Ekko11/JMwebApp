<template>
  <div class="detail">
    <!-- 头部 -->
    <div class="detailTop">
      <v-touch class="topp1" tag="p" @tap="backBn">返回</v-touch>
      <p class="topInfo">{{goodItem.name}}</p>
      <v-touch class="topp1" tag="p" @tap="homeBn">首页</v-touch>
    </div>
    <div class="wrapDiv">
      <JM-scroll>
        <div>
          <!-- 商品视频 -->
          <div class="video">
            <video v-if="playFlag" autoplay :src="video_info"></video>
            <img v-if="!playFlag" :src="imgSrc['640']" />
            <v-touch
              v-if="video_info"
              :class="!playFlag?'playBn':'playBn nonePlayBn'"
              @tap="autoPlay"
            ></v-touch>
          </div>
          <!-- 价格 -->
          <div class="goodsPrice">
            <div class="detailprice">
              <p class="nowP">
                ￥
                <span>{{goodPrice.jumei_price}}</span>
              </p>
              <p class="oldP">
                ￥
                <span>{{goodPrice.market_price}}</span>
              </p>
            </div>
            <div>{{goodPrice.buyer_number_text}}</div>
          </div>
          <p style="font-size:15px" class="goodsname">{{goodItem.name}}</p>

          <div>
            <!-- <div>
            <h6>促销</h6>
            <p><span>X元Y件</span> 满4件实付40元</p>
            </div>-->
            <div class="decDetail yunfei">
              <h6>运费</h6>
              <p>{{freight.text}}</p>
            </div>
            <div class="decDetail decD">
              <h6>说明</h6>
              <div>
                <p>
                  <span>{{icon_tag1.name}}</span>
                  <span>{{icon_tag2.name}}</span>
                </p>
                <p>{{icon_tag3.name}}</p>
              </div>
            </div>
          </div>
          <div class="storeDec">
            <div class="storeTop">
              <div>
                <img :src="shopInfo.img" alt />
              </div>
              <div class="storeName">
                <p>
                  {{shopInfo.name}}
                  <span>官方授权</span>
                </p>
                <p>{{shopInfo.sign}}</p>
              </div>
            </div>
            <a class="storeBtm" :href="shop_url">进入店铺 &gt;</a>
          </div>
          <div class="navDec">
            <v-touch
              tag="p"
              v-for="(item,index) in navs"
              :key="index"
              @tap="navChange(index)"
              :class="activeNav==index?'activeNav':''"
            >{{item}}</v-touch>
          </div>
          <keep-alive>
          <!-- <component :is="activeNav==0?'ImgPage':activeNav==1?'GoodsDec':'Evaluate'    "> -->
          <ImgPage :decUrl="decImg" v-if="activeNav==0"></ImgPage>
          <GoodsDec v-if="activeNav==1"  :proper="proper"/>
          <Evaluate v-if="activeNav==2" />
          <!-- </component> -->
          </keep-alive>
        </div>
      </JM-scroll>
    </div>

    <!-- 底部 -->
    <div class="decBtm">
      <div class="btmStore">
        <a :href="shop_url">店铺</a>
        <p>购物车</p>
      </div>
      <div class="addShop">加入购物车</div>
      <div class="goShop">立即购买</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Evaluate from "./evaluate";
import ImgPage from "./imgPage";
import GoodsDec from "./goodsDec";
import http from "utils/http.js";
import { home_detail_api, home_goodPrice_api } from "api/home";
import { async } from "q";
export default {
  name: "Detail",
  components: {
    Evaluate,
    ImgPage,
    GoodsDec
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },

  async created() {
    let data = await home_detail_api(this.id);
    this.video_info = data.data.video_info
      ? data.data.video_info.short_video_url
      : "";
    this.imgSrc = data.data.image_url_set.single_many[0] || "";
    this.goodItem = data.data;
    let datas = await home_goodPrice_api(this.id);
    this.icon_tag1 = datas.data.result.icon_tag["1"];
    this.icon_tag2 = datas.data.result.icon_tag["2"];
    this.icon_tag3 = datas.data.result.icon_tag["3"];
    this.freight = datas.data.result.freight;
    this.goodPrice = datas.data.result;
    this.proper = data.data.properties
    this.shop_url = datas.data.result.shop_info.shop_url;
    this.shopInfo.name = datas.data.result.shop_info.store_title;
    this.shopInfo.sign = datas.data.result.shop_info.store_content;
    this.shopInfo.img = datas.data.result.shop_info.logo_url["480"];
    var url = data.data.description_url_set.detail["480"].split(".com")[1];
    console.log(data,datas)
    await axios.get(url).then(res => {
      this.decImg = res.data;
    });
  },

  methods: {
    navChange(index) {
      this.activeNav = index;
    },
    autoPlay() {
      this.playFlag = !this.playFlag;
    },
    backBn() {
      this.$router.go(-1);
    },
    homeBn() {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      goodItem: {},
      goodPrice: {},
      playFlag: false,
      icon_tag: [],
      icon_tag1: {},
      icon_tag2: {},
      icon_tag3: {},
      icon_tag4: { name: "" },
      freight: {},
      video_info: "",
      navs: ["图文详情", "商品参数", "评价"],
      activeNav: 0,
      decImg: "",
      imgSrc: "",
      shopInfo: {
        name: "",
        sign: "",
        img: ""
      },
      proper:"",
      shop_url:""
    };
  }
};
</script>

<style scoped>
.decBtm {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 16777271;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 0.008rem solid #ccc;
}
.decBtm > div {
  flex: 1;
  text-align: center;
  line-height: .4rem;
}
.decBtm > div > p{
  float: left;
  width: 50%;
}
.decBtm > div > a{
  display: block;
  float: left;
  width: 50%;
}
.decBtm > div > p:nth-of-type(1) {
    border-right: 0.0083rem solid #ccc
}
.addShop {
  color: #fe4070;
  background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
  font-size: .117rem;
}
.goShop{
  background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
    color: #fff;
}

.wrapDiv {
  height: 5.517rem;
  padding: 0.4rem 0;
  overflow: hidden;
}
.navDec {
  display: flex;
  justify-content: space-around;
  line-height: 0.3667rem;
  background: #fff;
  margin-top: 0.083rem;
}
.navDec>p{
  flex: 1;
  text-align: center;
}
.activeNav {
  color: #fe4070;
  border-bottom: 0.0083rem solid #fe4070;
}

.imgpage {
  width: 2.5rem;
  height: 500px;
}

.decDetail {
  display: flex;
  justify-content: space-between;
  padding: 0.042rem;
  background: #fff;
}
.decDetail h6 {
  color: #999;
}
.yunfei {
  line-height: 0.417rem;
  border-bottom: 0.0083rem solid #ccc;
}

.topInfo {
  width: 1.583rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.125rem;
  color: #333;
}
.topp1 {
  color: #999;
}
.decD {
  margin-bottom: 0.083rem;
}
.storeDec {
  background: #fff;
  padding: 0.083rem;
}
.storeTop img {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.167rem;
  border: #999 0.008rem solid;
}
.storeTop {
  overflow: hidden;
}
.storeTop > div {
  float: left;
}
.storeBtm {
  clear: both;
  display: block;
}
.storeName {
  margin-top: 0.042rem;
}
.storeName p:nth-of-type(1) {
  max-width: 9rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  line-height: 16px;
  font-size: 0.133rem;
}
.storeName p:nth-of-type(2) {
  font-size: 11px;
  color: #999;
  margin-top: 6px;
}
.storeName span {
  font-size: 10px;
  color: #fff;
  padding: 1px 4px;
  background: #fe4070;
  color: #fff;
  border-radius: 4px;
  margin-left: 4px;
  line-height: 14px;
}
.storeBtm {
  width: 1.2333rem;
  height: 0.3167rem;
  line-height: 0.3167rem;
  border-radius: 0.2rem;
  margin: 0 auto;
  display: block;
  text-align: center;
  margin-top: 0.083rem;
  background-size: 0.05rem 0.1rem;
  color: #666;
  position: relative;
  border: 1px solid #ddd;
}
.goodsname {
  background: #fff;
}
.detail {
  height: 100%;
  font-size: 0.108rem;
  font-family: Arial, helvetica, "\5FAE\8F6F\96C5\9ED1", Microsoft Yahei,
    sans-serif;
  background: #f5f5f5;
}
.detailTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.367rem;
  padding: 0 0.083rem;
  border-bottom: 0.008rem solid #ccc;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
}
.video {
  position: relative;
}
video,
.video img {
  height: 2.5rem;
  width: 100%;
}
.playBn {
  background: url("../../../../public/images/play.png") no-repeat;
  background-size: cover;
  height: 0.667rem;
  width: 0.667rem;
  position: absolute;
  top: 0.792rem;
  left: 1.1833rem;
}
.nonePlayBn {
  height: 0.25rem;
  width: 0.25rem;
  top: 1.975rem;
  left: 0.075rem;
}
.goodsPrice {
  background: #fff;

  display: flex;
  justify-content: space-between;
  line-height: 0.242rem;
  margin-top: 0.083rem;
}
.detailprice p {
  float: left;
}
.detailprice .nowP {
  font-size: 0.233rem;
  color: #fe4070;
  margin-left: 0.167rem;
}

.detailprice .oldP {
  color: #999;
  font-size: 0.117rem;
  text-decoration: line-through;
  margin-top: 0.041667rem;
  margin-left: 0.041667rem;
}
</style>
