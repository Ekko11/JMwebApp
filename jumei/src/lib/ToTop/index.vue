<template>
    <div v-if="toTopFlag" class="toTop" @click="topHandle" ref="toTop"></div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Totop",
    methods:{
        topHandle(){
            
        }
    }
}
</script>

<style>
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
