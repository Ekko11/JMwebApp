<template>
    <div ref="wrapper" class="wrapper">
        
        <slot></slot>
 <v-touch v-if="toTopFlag" class="toTop" @tap="topHandle" ref="toTop">Top</v-touch>
        </div>
  
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"JM-scroll",
    data(){
        return {
            toTopFlag: false,

        }
    },

  mounted(){
       this.scroll = new BScroll(this.$refs.wrapper,{
           tap:true,
           click:true,
            pullDownRefresh:true,
            pullUpLoad:true,
            probeType:2,

       });
       this.scroll.on("scroll",this.scrollHandle)
  },
  methods:{
      topHandle(){
          this.scroll.scrollTo(0, 0, 500)
          this.toTopFlag =false
      },
        //下拉刷新数据
        handlePullDownRefresh(callback){
            this.scroll.on("pullingDown",()=>{
                callback()
            })
        },
        //通知下拉完成
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        //上划加载数据
         handlePullUpLoad(callback){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        },
        //通知上划完成
         handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        },




      //置顶小球
      scrollHandle(...rest){
          let{x,y} = rest[0]
          if(y<-625){
              if(this.toTopFlag) return
              this.toTopFlag =true
          }else{
               if(!this.toTopFlag) return
              this.toTopFlag =false
          }
          
      }
  }

}
</script>

<style>
.wrapper{
    height: 100%;
}
.toTop{
    width: .417rem;
    height: .417rem;
    background: rgba(0,0,0,.3);
    position: fixed;
    bottom: .667rem;
    right: 0.1667rem;
    z-index:10;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: .417rem;
}
</style>