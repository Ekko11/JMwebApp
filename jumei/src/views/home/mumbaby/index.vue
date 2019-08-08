<template>
    <JM-scroll  ref="scroll">
    <div class="mum">
        <v-touch class="rush" 
        v-for="(item,index) in goodList"
         :key="index"
         @tap="toDetail(item.url)">
            <div class="rushImg">
                <img :src="item.image_url_set.main['640']" alt="">
            </div>
            <div class="rushBottom">
                <div>
                    <p>{{item.title}}</p>
                    <span>{{item.time}}</span>
                </div>
                <div>
                    <img :src="item.image_url_set.brand['640']" alt="">
                </div>
            </div>
        </v-touch>

    </div>
        </JM-scroll>

</template>

<script>
import {home_mum_api} from "api/home/index.js"
import { setInterval } from 'timers';

export default {
    name:"Mumbaby",
    components:{
       
    },
    data(){
        return {
            goodList:[],
        }
    },
    async created(){
    let data = await  home_mum_api()
         this.goodList = data.item_list
        setInterval(()=>{
            var date = new Date()
            var nowTime = date.getTime()
            this.goodList.map((item,index)=>{
            this.$set(this.goodList[index],"time",this.GetTiem((item.end_time)*1000-nowTime))
         })
            data = null
        },1000)
      
    },
    methods:{
        toDetail(url){
        this.$router.push({name:"Detail",params:{url:url}})
        },

        GetTiem(my_time){    
        var days    = my_time / 1000 / 60 / 60 / 24;
        var daysRound = Math.floor(days);
        var hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
        var hoursRound = Math.floor(hours);
        var minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
        var minutesRound = Math.floor(minutes);
        var seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
        var time = hoursRound + ':' + minutesRound + ':' + seconds
        var time = '仅剩'+daysRound + '天'+ hoursRound + '时'+ minutesRound + '分'+ seconds.toFixed(0) + '秒'
        return time;
}
    },
    mounted(){
   
    this.$refs.scroll.handlePullDownRefresh( async()=>{
        let data = await  home_mum_api()
        this.goodList = data.item_list
        this.$refs.scroll.handlefinishPullDown();
    })
    this.$refs.scroll.handlePullUpLoad( async()=>{
        let data = await  home_mum_api()
        this.goodList =[...this.goodList,...data.item_list]
        this.$refs.scroll.handlefinishPullUp();
    })
  },

 


}
</script>

<style>
.mum{
    padding-bottom: 1.2rem;
}
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
