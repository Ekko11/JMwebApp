<template>
  <div class="mine">
    <div class="header">
      <div class="one">
        <span class="top_left">&lt;</span>
        <h4>我的聚美</h4>
        <router-link to="/home" class="top_right">首页</router-link>
      </div>
      <div class="user_bg">
        <div class="user_info">
          <span class="name">JM1ACdLsinHb5</span>
          <span class="grade">普通会员</span>
        </div>
      </div>
    </div>

    <div>
      <div class="toplist">
        <ul>
          <li v-for="(item,index) in toplist" :key="index">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>

      <div>
        <div class="iconlist">
          <div>
            <i class="iconfont">&#xe606;</i>
            <span>
              我的订单
              <span>&gt;</span>
            </span>
          </div>
        </div>
        <div class="orderone">
          <div class="orderdiv" v-for="(item,index) in orderlist" :key="index">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>

      <div class="iconlist block">
        <div v-for="(item,index) in iconlist" :key="index">
          <i class="iconfont" v-html="item.icon"></i>
          <span>
            {{item.text}}
            <span>&gt;</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      toplist: [
        {
          icon: "&#xe606;",
          text: "心愿单"
        },
        {
          icon: "&#xe606;",
          text: "开售提醒"
        },
        {
          icon: "&#xe606;",
          text: "收藏"
        }
      ],
      orderlist: [
        {
          icon: "&#xe606",
          text: "代付款"
        },
        {
          icon: "&#xe606",
          text: "待收货"
        },
        {
          icon: "&#xe606",
          text: "待评价"
        },
        {
          icon: "&#xe606",
          text: "退货/退款"
        }
      ],
      iconlist: [
        {
          icon: "&#xe606",
          text: "售后服务"
        },
        {
          icon: "&#xe606",
          text: "意见反馈"
        },
        {
          icon: "&#xe606",
          text: "收货地址"
        },
        {
          icon: "&#xe606",
          text: "退出登录"
        },
        {
          icon: "&#xe606",
          text: "400-123-888"
        }
      ]
    };
  }
};
</script>

<style scoped>
.mine {
  box-sizing: border-box;
  display: flex;
  margin-top: 0.367rem;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.917rem;
  font-size: 0.167rem;
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
}
.one {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* border-bottom: 0.004rem solid #e9e6e6; */
}
h4 {
  display: block;
  text-align: center;
  margin: 0px 0.292rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.142rem;
  color: #ffffff;
  height: 0.367rem;
  line-height: 0.367rem;
}
.top_left {
  position: absolute;
  color: #ffffff;
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
  color: #ffffff;
  font-size: 0.125rem;
}

.user_info {
  font-size: 0.133rem;
  color: #fff;
  position: absolute;
  left: 1.292rem;
  bottom: 0.033rem;
  letter-spacing: 0.005rem;
}
.user_info span {
  display: block;
}
.user_info .grade {
  background: rgba(255, 255, 255, 0.2);
  border-radius: .833rem;
  letter-spacing: .005rem;
  line-height: .15rem;
  padding: .025rem .042rem;
  text-align: center;
  width: 0.75rem;
}

.toplist {
  height: 0.417rem;
  font-size: 0.125rem;
  text-align: center;
  margin: 0.65rem 0 0 1rem;
}
.toplist li {
  display: block;
  width: 0.633rem;
  height: 0.417rem;
  float: left;
  color: #666;
  margin: 0 0.033rem;
}
.toplist li i,
.orderdiv i {
  display: block;
  font-size: 0.15rem;
  margin-bottom: 0.033rem;
}

.orderone {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.orderdiv {
  font-size: .117rem;
  padding: .083rem 0;
  width: 0.633rem;
  height: 0.417rem;
  float: left;
  color: #666;
  text-align: center;
}
.orderdiv i{
  font-size:24px;
    width: 24px;
    height: 24px;
    margin: 5px auto;
}

.iconlist {
  font-size: 0.125rem;
  color: #666;
}
.iconlist div {
  border-bottom: 0.004rem solid #e9e6e6;
  height: .383rem;
  line-height: .383rem;
  padding: 0 .083rem;
}
.iconlist span {
  color: #333;
  margin-left: .083rem;
  font-size: .133rem;
  font-family: "微软雅黑";
}
.iconlist span span {
  float: right;
  font-weight: 600;
  color: #666;
  font-size: .133rem;
  font-family: "宋体";
}

.block {
  background: #fff;
  margin-top: .1rem;
  float: left;
}
</style>
