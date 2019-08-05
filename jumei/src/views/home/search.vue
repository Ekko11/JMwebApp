<template>
  <div id="search">
    <input type="text" placeholder="搜索商品 分类 功效" class="search" />
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
#search {
  height: 0.45rem;
}

.search {
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
  /* background: url("public/img/search_btn.png") no-repeat  */
}
</style>
