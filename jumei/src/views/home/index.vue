<template>
  <div id="home">
    <Search />
    <div class="navs">
      <router-link
        v-for="(item,index) in navs"
        :key="index"
        :to="item.url"
        tag="span"
        class="navspan"
      >{{item.info}}</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Search from "./search";
import Index from "./index";
export default {
  name: "Home",
  components: {
    Search
  },
  data() {
    return {
      navs: [
        {
          info: "专场",
          url: "/home/home"
        },
        {
          info: "母婴",
          url: "/home/mumbaby"
        },
        {
          info: "轻奢",
          url: "/home/luxury"
        },

        {
          info: "极速免税店",
          url: "/home/speed"
        },

        {
          info: "名品特卖",
          url: "/home/famous"
        }
      ]
    };
  }
};
</script>

<style scoped>
#home {
  height: 100%;
  font-size: 0.058333rem;
}
.navs {
  width: 3.75rem;
  overflow: hidden;
  border-bottom: 0.004167rem solid #eee;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
}
.navspan {
  margin-left: 0.091667rem;
  height: 0.366667rem;
  line-height: 0.366667rem;
  margin: 0 0.145833rem;
  font-family: Arial, helvetica, "\5FAE\8F6F\96C5\9ED1", Microsoft Yahei,
    sans-serif;
  display: block;
  float: left;
}
.navs .router-link-active {
  color: pink;
  border-bottom: pink solid 0.0125rem;
}
</style>
