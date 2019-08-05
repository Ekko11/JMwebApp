<template>
  <div class="login">
    <div class="header">
      <div class="one">
        <span class="top_left">&lt;</span>
        <h4>登录</h4>
        <!-- <span class="top_right">注册</span> -->
        <router-link to="/register" class="top_right">注册</router-link>
      </div>
    </div>
    <form>
      <h6>使用手机登录</h6>
      <input type="text" placeholder="请输入11位手机号" />
      <input type="password" placeholder="请输入密码" />
      <p>
        使用聚美账号登录
        <span>30天内自动登录</span>
      </p>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {}
};
</script>

<style scoped>
.login {
  box-sizing: border-box;
  display: flex;
  margin-top: 0.367rem;
}
form {
  margin: 0 12%;
  padding: 0;
  border: 0;
  /* vertical-align: baseline; */
  font: inherit;
  color: #999;
  font-size: 0.167rem;
}
h6 {
  font-weight: normal;
  text-align: center;
  margin-top: 0.1rem;
}
input {
  background: #f5f5f5;
  border-radius: 0.167rem;
  width: 100%;
  height: 0.3rem;
  font-size: 0.117rem;
  color: #999999;
  text-align: left;
  text-indent: 0.175rem;
  margin-top: 0.167rem;
  border: 0;
}
p {
  color: #fe4070;
  padding-left: 7px;
  font-size: 0.1rem;
  height: 0.417rem;
  line-height: 0.417rem;
}
p > span {
  color: #999;
  float: right;
  padding: 0px 5px;
  background: #fff;
}
button {
  background: #feb2c5 !important;
  border-radius: 0.167rem;
  width: 100%;
  height: 0.3rem;
  font-size: 0.117rem;
  color: #ffffff;
  line-height: 0.117rem;
  text-align: center;
  margin: 0.15rem auto 0 auto;
  display: block;
  border: 0;
  margin-top: 0;
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
  font-size: 0.142rem;
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
</style>
