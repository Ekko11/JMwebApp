<template>
    <div class="mum">
        <ToTop></ToTop>
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

</template>

<script>
import {home_mum_api} from "api/home/index.js"
import ToTop from "lib/ToTop"
export default {
    name:"Mumbaby",
    components:{
        ToTop
    },
    data(){
        return {
            goodList:[]
        }
    },
    async created(){
      
    let data = await  home_mum_api()
    this.goodList = data.item_list
    }
}
</script>

<style>
.rushImg img{
    width: 3.125rem;
    height: 1.558rem;
}
.rushBottom{
    background: #ffffff;
    padding: .167rem .083rem;
    display: flex;
    justify-content: space-between;

}
.rushBottom p{
    font-size: .117rem;
    color: #333;
    margin-left: .067rem;
    margin-bottom: .042rem
}
.rushBottom span{
    font-size: .1rem;
    color: #999;
    margin-left: .067rem
}

.rushBottom img{
    width: .608rem;
    height: .3rem;
}
</style>
