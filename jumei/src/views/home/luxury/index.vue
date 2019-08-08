<template>
   <JM-scroll  ref="scroll">
      <div class="mum">
        <div class="rush" v-for="(item,index) in goodList" :key="index">
            <div class="rushImg">
                <img :src="item.image_url_set.main['640']" alt="">
            </div>
            <div class="rushBottom">
                <div>
                    <p>{{item.title}}</p>
                    <span>仅剩01天00时30分</span>
                </div>
                <div>
                    <img :src="item.image_url_set.brand['640']" alt="">
                </div>
            </div>
        </div>
    </div>
   </JM-scroll>
</template>

<script>
import {home_Luxury_api} from "api/home/index.js"
export default {
    name:"Luxury",
        data(){
        return {
            goodList:[]
        }
    },
    async created(){
    let data = await  home_Luxury_api()
    this.goodList = data.item_list
    },
       mounted(){
    this.$refs.scroll.handlePullDownRefresh( async()=>{
        let data = await  home_Luxury_api()
        this.goodList = data.item_list
        this.$refs.scroll.handlefinishPullDown();
    })
    this.$refs.scroll.handlePullUpLoad( async()=>{
        let data = await  home_Luxury_api()
        this.goodList =[...this.goodList,...data.item_list]
        this.$refs.scroll.handlefinishPullUp();
    })
  }
}

</script>

<style>

</style>
