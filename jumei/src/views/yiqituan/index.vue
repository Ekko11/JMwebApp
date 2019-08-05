<template>
  <div class="yiqituan">
    <div class="conta">
      <ul class="list-titel">
        <router-link
          v-for="(item,index) in list"
          :key="index"
          :to="item['id']"
          tag="li"
        >{{item.name}}</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "推荐", id: "/yiqituan/recom" },
        { name: "母婴健康", id: "/yiqituan/MY" },
        { name: "美妆", id: "/yiqituan/MZ" },
        { name: "饰品配饰", id: "/yiqituan/SP" },
        { name: "百科礼品箱包", id: "/yiqituan/LP" },
        { name: "数码家电", id: "/yiqituan/JD" },
        { name: "家居", id: "/yiqituan/JJ" },
        { name: "内衣", id: "/yiqituan/NY" },
        { name: "食品保健", id: "/yiqituan/BJ" },
        { name: "女装", id: "/yiqituan/NZ" },
        { name: "鞋类", id: "/yiqituan/XL" },
        { name: "下期预告", id: "/yiqituan/YG" }
      ],
      data: []
    };
  }
};
</script>

<style scoped>
.yiqituan {
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.conta {
  height: 0.366667rem;
  overflow-y: hidden;
}
.list-titel {
  padding: 0 0.125rem;
  white-space: nowrap;
  border-bottom: 0.0625rem solid #eee;
  background: #fff;
  height: 0.366667rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.875rem;
}
.list-titel li {
  padding: 0 0.125rem;
  color: #666;
  display: inline-block;
  text-align: center;
  position: relative;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
}

.list-titel .router-link-active {
  color: #fe4070;
  border-bottom: 0.015rem solid #fe4070;
}


</style>
