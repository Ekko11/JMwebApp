<template>
  <div id="footer">
    <ul>
      <router-link v-for="(item,index) in navs" :key="index" tag="li" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          icon: "&#xe606;",
          text: "首页",
          path: "/home"
        },
        {
          icon: "&#xe63c;",
          text: "一起团",
          path: "/yiqituan"
        },
        {
          icon: "&#xe658;",
          text: "购物车",
          path: "/order"
        },
        {
           icon:"&#xe616;",
           text:"我的",
           path:"/mine"
        },
      ]
    };
  }
};



// 查找
// &#xe642;    查找 表单 列表  &#xe76a;

</script>

<style>
#footer{
  width: 100%;
        height: 0.4167rem;
        position: fixed;
        left: 0;
        bottom:0;
        background: #fff;
        border-top:1px solid #ccc;
}
 #footer ul,#footer ul li{
        width: 100%;
        height: 100%;
    }
    #footer ul{
        display: flex;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:0.0417rem
    }
    #footer ul li i{
        font-size:0.1667rem;
    }
    #footer ul li span{
        margin-top: 0.0208rem
    }

    #footer ul .router-link-active{
        color:#c33;
    }
</style>
