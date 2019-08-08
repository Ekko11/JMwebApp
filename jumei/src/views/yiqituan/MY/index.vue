<template>
  <div class="content" ref="scroll">
    <JM-scroll>
    <ul>
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
            <span class="price-now">{{item.jumei_price}}</span>
            <span class="tuan">去开团</span>
            <p class="price-old">{{item.single_price}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    </JM-scroll>
  </div>
</template>

<script>
import http from "utils/http.js";

export default {
  name: "Recom",
  data() {
    return {
      data: []
    };
  },
  created() {
    http("get", "/yiqituan/tab_list?tab=coutuan_baby&page=1&per_page=20").then(
      data => {
        this.data = data.data;
      }
    );
  }
};
</script>

<style>
</style>
