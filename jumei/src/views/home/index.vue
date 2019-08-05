<template>
  <div id="home">
    <JM-scroll >
      <div data-id='23'>
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
        <router-view></router-view>
      </div>
    </JM-scroll>
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
          info: "首页",
          url: "/home/home"
        },
        {
          info: "母婴",
          url: "/home/mumbaby"
        },
        {
          info: "极速免税店",
          url: "/home/speed"
        },
        {
          info: "轻奢",
          url: "/home/shechi"
        },
        {
          info: "名品特卖",
          url: "/home/goods"
        }
      ]
    }
  },
  
};
</script>

<style>
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
