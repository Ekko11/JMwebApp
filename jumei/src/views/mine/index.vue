<template>
    <JM-scroll>
        <div class="mine">
            <div class="div">
                <!--      <div class="heaterwarp">-->
                <!--        <div class="header">-->
                <!--          <div class="one">-->
                <!--            <span class="top_left" @click="back">&lt;</span>-->
                <!--            <h4>我的聚美</h4>-->
                <!--            <router-link to="/home" class="top_right">首页</router-link>-->
                <!--          </div>-->
                <!--          <div class="user_bg">-->
                <!--            <div class="user_info">-->
                <!--              <span class="name">JM1ACdLsinHb5</span>-->
                <!--              <span class="grade">普通会员</span>-->
                <!--            </div>-->
                <!--          </div>-->
                <!--        </div>-->
                <!--        <img src="../../../public/images/mine.png" alt="头像" />-->
                <!--        <div class="toplist">-->
                <!--          <ul>-->
                <!--            <li v-for="(item,index) in toplist" :key="index">-->
                <!--              <i class="iconfont" v-html="item.icon"></i>-->
                <!--              <span>{{item.text}}</span>-->
                <!--            </li>-->
                <!--          </ul>-->
                <!--        </div>-->
                <!--      </div>-->


                <div class="heaterwarpTwo">
                    <div class="headerTwo">
                        <div class="one">
                            <span class="top_left" @click="back">&lt;</span>
                            <h4>我的聚美</h4>
                            <router-link to="/home" class="top_right">首页</router-link>
                        </div>
                    </div>

                    <img src="../../../public/images/mine.png" alt="头像"/>
                    <div class="headerB">
                        <router-link to="/register">注册</router-link>
                        <span>|</span>
                        <router-link to="/login">登录</router-link>
                    </div>
                </div>

                <div class="topliwarp">
                    <div class="iconwrap">
                        <div class="iconlist">
                            <div>
                                <i class="iconfont">&#xe606;</i>
                                <span>
                  我的订单
                  <span>
                    查看我的全部订单
                    <i>&gt;</i>
                  </span>
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

                    <div class="iconwrap">
                        <div class="iconlist">
                            <div>
                                <i class="iconfont">&#xe606;</i>
                                <span>
                  我的资产
                  <span>&gt;</span>
                </span>
                            </div>
                        </div>
                        <div class="orderone">
                            <div class="orderdiv" v-for="(item,index) in orderlistT" :key="index">
                                <!-- <i class="iconfont" v-html="item.icon"></i> -->
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
        </div>
    </JM-scroll>
</template>

<script>
    export default {
        name: "mine",
        data() {
            return {
                toplist: [
                    {
                        icon: "&#xe606;",
                        text: "收藏"
                    },
                    {
                        icon: "&#xe606;",
                        text: "开售提醒"
                    },
                    {
                        icon: "&#xe606;",
                        text: "心愿单"
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
                orderlistT: [
                    {
                        text: "现金券"
                    },
                    {
                        text: "红包"
                    },
                    {
                        text: "聚美余额"
                    },
                    {
                        text: "礼品卡"
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
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    };
</script>

<style scoped>
    .mine {
        box-sizing: border-box;
        display: flex;
        padding-top: 0.367rem;
        padding-bottom: 100px;
        background: #f2f2f2;
    }

    .div {
        width: 100%;
    }

    .heaterwarp, .heaterwarpTwo {
        width: 100%;
        overflow: hidden;
    }

    .heaterwarpTwo {
        background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
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

    .headerTwo {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        font-size: 0.167rem;
        background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
    }

    .headerB {
        font-size: 0.167rem;
        color: #ffffff;
        text-align: center;
        height: 110px;
        line-height: 160px;
    }

    .headerB a {
        line-height: 25px;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        width: 95px;
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
        font-weight: normal;
        font-family: "微软雅黑";
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
        left: 1.192rem;
        bottom: 0.033rem;
        letter-spacing: 0.005rem;
        font-family: "微软雅黑";
    }

    .user_info span {
        display: block;
    }

    .user_info .grade {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.833rem;
        letter-spacing: 0.005rem;
        line-height: 0.15rem;
        padding: 0.025rem 0.042rem;
        text-align: center;
        width: 0.75rem;
    }

    .topliwarp {
        width: 100%;
        /* position: relative; */
    }

    .heaterwarp img, .heaterwarpTwo img {
        position: absolute;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        top: 80px;
        left: 40px;
    }

    .heaterwarpTwo img {
        width: 60px;
        height: 60px;
        top: 50px;
        left: 160px;
    }

    .toplist {
        height: 0.467rem;
        font-size: 0.125rem;
        text-align: center;
        background: #ffffff;
        margin-top: 0.55rem;
        padding: 0.083rem 0;
    }

    .toplist li {
        display: block;
        width: 0.633rem;
        height: 0.417rem;
        float: right;
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
        height: 0.5rem;
        justify-content: space-around;
        align-items: center;
        color: #666;
        font-size: 0.133rem;
        font-family: "微软雅黑";
    }

    .orderdiv {
        font-size: 0.117rem;
        padding: 0.083rem 0;
        width: 0.633rem;
        float: left;
        color: #666;
        text-align: center;
    }

    .orderdiv i {
        font-size: 0.2rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.047rem auto;
    }

    .iconwrap {
        width: 100%;
        background: #ffffff;
        margin-top: 12px;
    }

    .iconlist {
        font-size: 0.125rem;
        color: #666;
        width: 100%;
    }

    .iconlist div {
        border-bottom: 0.004rem solid #e9e6e6;
        height: 0.383rem;
        line-height: 0.383rem;
        padding: 0 0.083rem;
    }

    .iconlist span {
        color: #333;
        margin-left: 0.083rem;
        font-size: 0.133rem;
        font-family: "微软雅黑";
    }

    .iconlist span span {
        float: right;
        color: #666;
        font-family: "宋体";
        font-size: 0.125rem;
    }

    .iconlist span span i {
        font-style: normal;
        font-size: 0.133rem;
    }

    .block {
        background: #fff;
        margin-top: 0.1rem;
        float: left;
    }
</style>
