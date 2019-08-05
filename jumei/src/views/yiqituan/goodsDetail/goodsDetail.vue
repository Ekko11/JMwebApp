<template>
    <div class="goods_detail">
        <header class="header">
            <nav class="nav">
                <a href="javascript:history.go(-1)" class="back"></a>
                <a @click="goHome" class="home"></a>
                <div class="title">{{staticDetail.short_name}}</div>
            </nav>
        </header>
        <div class="banner">
                <div class="silde-left-icon">
                    <img :src="staticDetail.area_icon_v2" alt="">
                </div>
                <div class="silde">
                    <img :src="dynamicDetail.img" alt="">
                </div>
        </div>
        <div class="detail">
            <div class="price_info">
                <span class="cur_pirce">￥{{dynamicDetail.jumei_price}}</span>
                <del>￥{{dynamicDetail.market_price}}</del>
                <span class="detail_text">价格详情</span>
                <strong>{{dynamicDetail.buyer_number_text}}</strong>
            </div>
            <div class="down_wrap">
                <div class="count_down">
                    <span v-date:endTime='dynamicDetail.end_time'></span>
                </div>
            </div>
        </div>
        <div class="goodsName">
            <div>
                <span class="ziying">{{staticDetail.special_tags?staticDetail.special_tags.jm_owner:''}}</span>
                {{staticDetail.name}}
            </div>
        </div>
        <div class="info">
            <a class="freight" :href="freightMore">
                <div class="postage-type">运费</div>
                <div class="postage-content">
                    <span class="tip-word">{{dynamicDetail.freight?dynamicDetail.freight.text:''}}</span>
                    <span class="more"></span>
                </div>
            </a>
            <div class="icon_tag">
                <div class="introduction">说明</div>
                <div v-if="lookMoreDesc"  class="introductionsDesc" @click="toggleMoreDesc(false)">
                    <div class="title">可详细阅读一下商品说明</div>
                    <div class="desc">
                        <a v-for="(item,index) in dynamicDetail.icon_tag" :key="index" :href="item.url_tag" v-if="item.name!==''">
                            <div class="name">
                                <span class="bingo"></span>
                                {{item.name}}
                                <span class="lookmore" v-if="item.url_tag"></span>
                            </div>
                            <div class="text">{{item.text?item.text:''}}</div>
                        </a>
                    </div>
                </div>
                
                <div v-else class="introductionsDesc" @click="toggleMoreDesc(true)">
                    <div class="showShort">
                        <p v-for="(item,index) in dynamicDetail.icon_tag" :key="index" :href="item.url_tag" v-if="item.name!==''">
                            <span class="icon"></span>
                            <span>{{item.name}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detailDesc">
            <div class="tab-box">
                <li class="pr">
                    图文详情<span class="pa"></span>
                </li>
                <li class="pr">
                    商品参数<span class="pa"></span>
                </li>
                <li class="pr">
                    评价<span class="pa"></span>
                </li>
            </div>
        </div>
        <div class="bottom">
            <div class="left" @click="goBuyCart">
                <div class="icon"></div>
                购物车
            </div>
            <div class="center" @click="addGoods">
                加入购物车
            </div>
            <div class="right" @click="buyIt">
                立即购买
            </div>
        </div>
    </div>
</template>

<script>
import { constants } from 'crypto';
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            dynamicDetail:{},
            staticDetail:{},
            lookMoreDesc:false
        }
    },
    created(){
        var id = location.search.split('?')[1].split('&')[0].split('=')[1];
        var type = location.search.split('?')[1].split('&')[1].split('=')[1];
        this.$axios.get(`/zjm/product/ajaxDynamicDetail?item_id=${id}&type=${type}`).then(res=>{
            console.log('static',res)
            this.dynamicDetail = res.data.data.result;
        })
        this.$axios.get(`/zjm/product/ajaxStaticDetail?item_id=${id}&type=${type}`).then(res=>{
            console.log('dyna',res)
            this.staticDetail = res.data.data;
        })
    },
    computed:{
        freightMore(){
            return this.dynamicDetail.freight?this.dynamicDetail.freight.href_url:'#';
        }
    },
    mounted(){
        var banner = document.querySelector('.banner');
        banner.style.height= banner.offsetWidth + 'px';
    },
    methods:{
        goHome(){
            this.$router.push('/');
        },
        toggleMoreDesc(toggle){
            this.lookMoreDesc = toggle;
        },
        goBuyCart(){
            this.$router.push('/index/buyCart')
        },                                                                    
        addLocalBuyCart(goods){
            if(sessionStorage.buyCart){
                var localBuyCart = JSON.parse(sessionStorage.buyCart);
                var isHas = false;
                localBuyCart.forEach(item=>{
                    if(item.goods_id === goods.goods_id){
                        item.number++;
                        isHas = true;
                        return;
                    }
                })
                if(!isHas){
                    localBuyCart.push(goods);
                }
                sessionStorage.buyCart = JSON.stringify(localBuyCart);
            }else{
                sessionStorage.buyCart = JSON.stringify([goods]);
            }
            Toast({
                message: "添加购物车成功",
                position: "middle",
                duration: 2000
            });
        },
        addGoods(){
            if(!sessionStorage.user){
                var goods = {
                    goods_id:this.staticDetail.item_id,
                    goods_name:this.staticDetail.name,
                    now_price:this.dynamicDetail.jumei_price,
                    old_price:this.dynamicDetail.market_price,
                    size:this.dynamicDetail.size[0].name,
                    number:1,
                    goods_img:this.dynamicDetail.img,
                    type:this.staticDetail.type
                }
                this.addLocalBuyCart(goods);
                return;
            }
            this.$axios.post('/jm/users/addgoods',{
                params:{
                    user_id:JSON.parse(sessionStorage.user).id,
                    goods:{
                        goods_id:this.staticDetail.item_id,
                        goods_name:this.staticDetail.name,
                        now_price:Number(this.dynamicDetail.jumei_price),
                        old_price:Number(this.dynamicDetail.market_price),
                        size:this.dynamicDetail.size[0].name,
                        number:1,
                        goods_img:this.dynamicDetail.img,
                        goods_type:this.staticDetail.type
                    }
                }
            }).then(res=>{
                Toast({
                    //信息、位置、期间
                    message: "添加购物车成功",
                    position: "middle",
                    duration: 2000
                });
            })
        },
        buyIt(){
            console.log('你买个锤子买，败家玩意')
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-bottom: .02rem solid #eee;
        width: 100%;
    }
    .nav{
        overflow: hidden;
        font-size: .28rem;
        color:#333;
        
    }
    .nav .back{
        float: left;
        height: 1rem;
        width: .82rem;
        background: url('../assets/home_img/left_arrow.png') no-repeat center center;
        background-size: 0.2rem 0.4rem;
    }
    .nav .home{
        float: right;
        height: .44rem;
        width: .44rem;
        margin:.23rem .23rem 0 0;
        background: url('../assets/home_img/home.png') no-repeat;
        background-size: .44rem .44rem;
    }
    .banner{
        width: 100%;
        position: relative;
    }
    .banner .silde-left-icon{
        position: absolute;
        z-index: 2;
        width: 1rem;
    }
    .banner .silde{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .detail{
        padding: .33rem .26rem 0;
    }
    .detail .price_info{
        width: 100%;
        height: .56rem;
        color:#666;
        font-size: .26rem;
        .cur_pirce{
            float: left;
            font-size: .56rem;
            line-break: .56rem;
            color: #f33873;
        }
        del{
            float: left;
            line-height: 1;
            margin-left: .08rem;
            margin-top: .2rem;
        }
        .detail_text{
            float: left;
            margin-left: .09rem;
            margin-top:.2rem;
            line-height: 1;
        }
        strong{
            float: right;
            font-weight: 400;
            text-align: right;
            line-height: 1;
            margin-top: .2rem;
        }
    }
    .down_wrap{
        margin-top: .25rem;
        color: #666;
        font-size: .26rem;
        text-align: left;
        overflow: hidden;
    }
    .goodsName{
        padding: .2rem .24rem;
        line-height: 0.5rem;
        font-size: .28rem;
        .ziying{
            color: #fff;
            background: #fe4070;
            border-radius: .08rem;
            padding: .02rem .08rem;
            font-size: .2rem;
            margin-right: .08rem;
        }
    }
    .bottom{
        position: fixed;
        background: #fff;
        z-index: 20;
        display: flex;
        width: 100%;
        overflow: hidden;
        border-top: .02rem solid #eee;
        height: 1rem;
        line-height: 1rem;
        bottom: 0;
        font-size: .28rem;
        text-align: center;
        .left{
            width: 2.38rem;
            .icon{
                width:.36rem;
                height: .4rem;
                margin: .2rem auto 0.05rem;
                background: url('../assets/home_img/bag.png') center center;
                background-size: .36rem .4rem;
            }
            font-size: .2rem;
            color: #979797;
            line-height: 1;
        }
        .center{
            flex: 1;
            color: #fe4070;
            background: linear-gradient(210deg,#ffcfdf 0%,#fff1f6 98%);
        }
        .right{
            flex: 1;
            color: #fff;
            background: linear-gradient(142deg,#ff5593 0%,#fe4070 100%);
        }
    }
    .info{
        margin-bottom: .16rem;
        background: #fff;
        border-bottom: .02rem solid #eee;
        .freight{
            margin: 0 .24rem;
            font-size: .28rem;
            border-bottom: .02rem solid #eee;
            color: #333;
            font-size: .26rem;
            line-height: .26rem;
            display: block;
            .postage-type{
                padding:.24rem 0;
                width: 22%;
                color:#999;
                vertical-align: top;
                float: left; 
            }
            .postage-content{
                width: 78%;
                position: relative;
                overflow: hidden;
                padding: .24rem 0 .19rem;
                .more{
                    position: absolute;
                    width: .12rem;
                    height: .24rem;
                    top:.28rem;
                    right:0.21rem;
                    background: url('../assets/home_img/right_arrow.png');
                    background-size: contain;
                }
            }
        }
        .icon_tag{
            margin: 0 .24rem;
            overflow: hidden;
            .introduction{
                padding:.24rem 0;
                width: 22%;
                color:#999;
                vertical-align: top;
                float: left; 
            }
            .introductionsDesc{
                float: left;
                padding: 0 .24rem .31rem 0;
                width: calc(78% - .36rem);
                margin-right: .12rem;
                .showShort{
                    display: flex;
                    flex-wrap: wrap;
                    background: url('../assets/home_img/down_arrow.png') no-repeat right .22rem;
                    background-size: .24rem .12rem;
                    p{
                        padding: .24rem .2rem 0 0;
                        color: #333;
                        font-size: .26rem;
                        line-height: .26rem;
                        .icon{
                            display: inline-block;
                            margin-top: .04rem;
                            margin-right: .1rem;
                            width: .24rem;
                            height: .24rem;
                            background: url('../assets/home_img/bingo.png') center center no-repeat;
                            background-size: contain;
                            vertical-align: top;
                        }
                    }
                }
                .title{
                    margin-top: .24rem;
                    width: 100%;
                    height: .5rem;
                    line-height: .5rem;
                    background: url('../assets/home_img/up_arrow.png') no-repeat right .22rem;
                    background-size: .24rem .12rem;
                }
                .desc{
                    a{
                        display: block;
                        margin-top: .24rem;
                        font-size: .26rem;
                        color: #333;
                        line-height: .26rem;
                        .name{
                            display: flex;
                            position: relative;
                            
                            .bingo{
                                width: .24rem;
                                height: .24rem;
                                margin-right: 0.1rem;
                                background: url('../assets/home_img/bingo.png') no-repeat center center;
                                background-size: contain;
                                margin-top:.02rem;
                            }
                            .lookmore{
                                position: absolute;
                                width: .12rem;
                                height: .24rem;
                                right: 0rem;
                                top: 0rem;
                                background: url('../assets/home_img/right_arrow.png') no-repeat center center;
                                background-size: contain;
                            }
                        }
                        .text{
                            padding: .2rem 0 .2rem .32rem;
                            color: #999;
                            font-size: .24rem;
                            line-height: .32rem;
                        }
                    }
                }

                
            }
        }
    }
    .detailDesc{
        margin-bottom: 1rem;
        .tab-box{
            height: .88rem;
            font-size: .28rem;
            margin-top: .16rem;
            border:.02rem solid #eee;
            display: flex;
            color: #666;
            text-align: center;
            .pr{
                flex:1;
            }
        }
    }
    .cur{
        color:#fe4070;
    }
</style>
