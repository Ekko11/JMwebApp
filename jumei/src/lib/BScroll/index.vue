<template>
    <div ref="wrapper" class="wrapper" data-id="456">
        
        <slot></slot>
 <div class="toTop" @click="topHandle" ref="toTop"></div>
        </div>
  
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"JM-scroll",
    data(){
        return {
            toTopFlag: true,
        }
    },

  mounted(){
       this.scroll = new BScroll(this.$refs.wrapper,{
           tap:true,
           click:true,
       })
  },
  methods:{
      topHandle(){
          this.scroll.scrollTo(0, 0, 500, easing)

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
    bottom: 0.1667rem;
    right: 0.1667rem;
    z-index:10;
    border-radius: 50%;
}
</style>