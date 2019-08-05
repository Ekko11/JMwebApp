<template>
    <div class="feedback">
        <div class="feeback-header">
           <router-link to="/index/mine"  tag="span" class="iconfont">&#xe663;</router-link> 
           <span>意见反馈</span>
           <router-link to="/index/home"  tag="span" class="iconfont">&#xe61d;</router-link>
        </div>
        <div>
            <div class="field_header">反馈内容(必填)：</div>
            <textarea name="detail" placeholder="乐意聆听您对聚美触屏版的意见或建议!" class="feed-txt"></textarea>
            <div class="field_header">联系方式(选填)：</div>
            <input type="text" placeholder="手机号或邮箱(选填)" name="contact" class="phone">
        </div>
            <input class="btn-submit" type="submit" value="提交">
    </div>
</template>


<style scoped>
.feedback{
    position: fixed;
    top:0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: #f7f7f7;
    box-sizing: border-box;
}
.feeback-header{
    width: 100%;
    background: #ed145b;
    color: #fff;
    height: .88rem;
    line-height: .88rem;
    display: flex;
    padding:0 .3rem;
    justify-content: space-between;
    box-sizing: border-box;
    font-size:.32rem;
}

.feeback-header .iconfont{
    font-size:.52rem;
}


.field_header {
    background: #fff;
    border: .02rem solid #e0e0e0;
    border-left: none;
    border-right: none;
    color: #333;
    padding: .24rem;
    font-size: .28rem;
    line-height: .58rem;
}

.feed-txt{
    border: none;
    font-size: .28rem;
    outline: 0;
    text-transform: none;
    -webkit-appearance: none;
    display: block;
    width: 100%;
    padding: .4rem .4rem .4rem .24rem;
    box-sizing: border-box;
    color: #333;
    font-family: STHeiti Light,Microsoft YaHei,sans-serif,Helvetica,Tahoma,sans-serif;
}

.phone{
    padding-left:.24rem;
    width: 100%;
    height: 1rem;
    border-bottom: .02rem solid #e0e0e0;
    line-height: 1rem;
    box-sizing: border-box;
}

.btn-submit {
  width:100%;
  height: 1rem;
  background: #fff;
  color: #ed145b;
  border-top:.02rem solid #e0e0e0;
  border-bottom:.02rem solid #e0e0e0;
  font-size: .32rem;
  position:fixed;
  bottom: 0;
  z-index: 300;
}

</style>

