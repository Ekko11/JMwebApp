<template>
    <div class="cart">
        <div class="center">
            <div class="title">
                <label>
                    <input type="checkbox">
                </label>
                <span>某某店铺</span>
            </div>
            <div class="shopwarp">
                <div class="shop">
                    <label>
                        <input type="checkbox">
                    </label>
                    <img src="https://p1.jmstatic.com//product/197/933/df4638220197933503_std/s_df4638220197933503_200_200.jpg""
                    alt="">
                    <ul>
                        <li><p class="lip">MUSIWEI 100抽天然棉美容巾 洗脸巾</p></li>
                        <li class="guige">
                            <span>4包装（100抽/包） 20*12cm</span><span>X<span>1</span></span>
                        </li>
                        <li><span>¥43.8</span><span class="update">编辑</span></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>

        <div class="submit-bottom submit-bottom-padding">
            <div class="sub-info"><span class="check-box-checked"></span>
                <input type="checkbox"><span>全选</span>
                <div class="summary">
                    <div><span>合计：</span> <span class="red">¥43.8</span></div>
                </div>
            </div>
            <div class="submit-btn go-to-submit"> 去结算<span>(1)</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>
    body {
        color: #333;
        font-size: .75rem;
        line-height: 1;
        font-family: sans-serif;
    }

    img {
        height: 84px;
        width: 84px;
    }

    .cart {
        font-size: 16px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

    /*  购物车*/
    .center {
        width: 375px;
        margin-top: 45px;
        overflow: hidden;

    }

    .center input {
        height: 15px;
        width: 15px;
    }

    .title {
        background: #ffffff;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
    }

    .title > span {
        font-size: 15px;
        padding: 0 15px;
    }

    .shopwarp {
        display: flex;
        width: 100%;
        padding: 0 10px;
        flex-direction: row;
        height: 110px;
        background: #ffffff;
    }
    .shop{
        display: flex;
        width: 100%;
        align-items: center;
    }
    .shop>ul{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .shop>ul li{
        display: flex;
        padding: 1px 0;
        justify-content: space-between;
    }
    .shop .lip{
        font-size: 14px;
        color: black;
    }
    .shop .guige>span{
        font-size: 13px;
        color: #898581;
    }
    .shop>ul li:nth-child(3) span{
        color: #fe4070;
    }
    .shopwarp .shop .update{
        color: black;
        font-size: 14px;
        font-family: "微软雅黑";
    }

    /*结算区*/
    .submit-bottom{
        width: 100%;
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        position: fixed;
        bottom: 50px;
        background: #ffffff;
    }
    .sub-info{
        display: flex;
        width: 180px;
    }
    .submit-btn{
        background: #fe4070;
        height: 36px;
        width: 125px;
        border-radius: 20px;
        color: #fff;
        text-align: center;
        line-height: 36px;
        font-size: 16px;
        font-family: "微软雅黑";
    }
    .summary{
        margin-left: 20px;
    }
    .red{
        color: #fe4070;
    }
</style>