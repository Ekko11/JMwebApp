<template>
  <div class="order">
    <div class="header">
      <div class="one">
        <span class="top_left" @click="back">&lt;</span>
        <h4>购物车</h4>
        <router-link to="/home" class="top_right">首页</router-link>
      </div>
    </div>
<!--    <div class="nav">-->
<!--      <div class="oops"></div>-->
<!--      <div class="empwarp">-->
<!--        <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>-->
<!--        <div class="go-stroll">去逛逛</div>-->
<!--      </div>-->
<!--    </div>-->


    <div>
      <cart/>
    </div>

  </div>
</template>

<script>
  import cart from "components/cart"
export default {
    name:"order",
  components:{
      cart
  },
  methods:{
    back(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.order {
  box-sizing: border-box;
  display: flex;
  height: 100%;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  font-size: 0.167rem;
  border-bottom: 0.004rem solid #e9e6e6;
}
.one {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
h4 {
  display: block;
  text-align: center;
  margin: 0px 0.292rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.117rem;
  color: #666;
  height: 0.367rem;
  line-height: 0.367rem;
}
.top_left {
  position: absolute;
  top: 0;
  left: 0.083rem;
  width: 0.333rem;
  height: 0.367rem;
  line-height: 0.367rem;
}
.top_right {
  position: absolute;
  line-height: 0.375rem;
  right: 0.083rem;
  top: 0;
  color: #333;
  font-size: 0.125rem;
}

.nav {
  width: 100%;
  height: 100%;
  background: url("../../../public/images/cart.png") no-repeat center 1.917rem;
}
.empty-cart {
  font-size: 0.117rem;
  line-height: 0.333rem;
  color: rgb(71, 70, 70);
  margin-top: 1rem;
  text-align: center;
}
.go-stroll {
  width: 1.167rem;
  border-radius: 0.333rem;
  color: #fff;
  background: #fe4070;
  line-height: 0.333rem;
  text-align: center;
  margin-top: 0.167rem;
  font-size: 0.133rem;
  margin: 0.083rem auto;
}

.empwarp {
  width: 100%;
  margin-top: 2.792rem;
}
</style>
