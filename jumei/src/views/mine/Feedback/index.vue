<template>
    <div class="feedback">
        <div class="feeback-header">
           <router-link to="/mine/index"  tag="span">&lt;</router-link> 
           <span>意见反馈</span>
           <router-link to="/home/home/index"  tag="span" class="iconfont">&#xe61d;</router-link>
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
   
}
.feeback-header{
   
}

.feeback-header .iconfont{

}


.field_header {
    
}

.feed-txt{
   
}

.phone{
    
}

.btn-submit {
  
}

</style>

