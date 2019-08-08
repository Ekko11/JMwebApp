<template>
  <div id="search">
    <div>
      <v-touch
        tag="input"
        type="text"
        placeholder="搜索商品 分类 功效"
        class="searchIpt"
        @tap="searchHandle"
      />
      <v-touch tag="span" class="iconfont searchList" @tap="twoList">&#xe76a;</v-touch>
    </div>
    <!-- 背景板 -->
    <v-touch v-if="bgflag" class="bgColor" tag="div" @tap="bgHandle"></v-touch>

    <!-- 搜索框 -->
    <div :class="searchflag?'searchPage display':'searchPage'">
      <div class="box">
        <v-touch @tap="searchHandle" tag="div">返回</v-touch>
        <input type="text" placeholder="搜索商品 分类 功效" class="searchIpt search" />
        <v-touch @tap="search" tag="div">搜索</v-touch>
      </div>
    </div>
    <!-- 商品二级列表 -->
    <div :class="listflag?'goodsList goodsListDisplay':'goodsList'">
      <ul class="oneUl">
        <li  v-for="(item,index) in goodsList" :key="index" 
        
        :class="listFlag==index?'oneList activeLi':'oneList'">
            <v-touch @tap ="listShow(index)" tag="p"> {{item}}</v-touch>
            <ul v-show="listFlag==index" >
              <li v-for="(child, ids) in itemList[index]" :key="ids">{{child}}</li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      bgflag: false,
      listflag: false,
      searchflag: false,
      listFlag:-1,
      goodsList: [
        "面部护肤",
        "彩妆",
        "身体护理",
        "香水",
        "男士护理",
        "套装礼盒",
        "美容工具",
        "其他"
      ],
      itemList: [
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
          [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
          [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
        [
          "眼部护理",
          "化妆水",
          "啫喱",
          "精华",
          "面霜",
          "唇部护理",
          "洁面",
          "面膜",
          "护肤套装"
        ],
      ]
    };
  },
  methods: {
    //首页搜索框点击事件
    searchHandle() {
      this.searchflag = !this.searchflag;
      this.bgflag = this.searchflag;
    },
    //搜索
    search() {},
    //列表图标点击事件
    twoList() {
      this.listflag = !this.listflag;
      this.bgflag = this.listflag;
    },
    //灰色背景 点击事件
    bgHandle() {
      this.bgflag = false;
      this.listflag = false;
    },
    listShow(index){
      if(this.listFlag == index) {
        this.listFlag = -1
      }else{
        this.listFlag=index
      }
    }
  }
};
</script>

<style scoped>
#search {
  height: 0.45rem;
  background: #fff;
  z-index: 11;
  position: relative;
}

.searchIpt {
  padding-left: 0.041667rem;
  height: 0.25rem;
  width: 2.0833rem;
  border: none;
  background: gainsboro;
  color: #999;
  text-align: center;
  float: left;
  margin-left: 30px;
  border-radius: 20px;
  margin-top: 10px;
}
.bgColor {
  height: 5.558rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.searchList {
  font-size: 0.25rem;
  display: inline-block;
  margin-left: 0.375rem;
  margin-top: 0.083rem;
}

.searchPage ,.goodsList {
  background: #fff;
  height: 5.558rem;
  width: 100%;
  position: absolute;
  left: 5.5rem;
  top: 0;
  z-index: 100;
  transition: all 1s;
}

.display {
  left: 0;
  top: 0;
}
.goodsList{
  width: 70%
}
.goodsListDisplay{
  left: .958rem;
  top: 0;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.2083rem;
  border-bottom: 0.0083rem solid #ccc;
}
.box div {
  height: 0.25rem;
  line-height: 0.25rem;
  color: #999;
}
.search {
  margin: 0;
  padding: 0;
}
.oneList{
  background:#fff;
  margin-bottom: .042rem;
  display: block;
  font-size: .15rem;

}
.oneList ul li{
  text-indent: .25rem;

  line-height: .367rem;
  margin-bottom: .008rem;
  background: #ccc;
}
.oneList ul{
  text-indent: .25rem;
  color: black;
}
.oneList p{
  border-bottom: .008rem solid #ccc;
  line-height: .333rem;
}
.activeLi{
  color: pink;
}
.oneUl{
  padding-top: .25rem
}
</style>
