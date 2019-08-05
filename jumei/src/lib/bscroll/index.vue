<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"kl-BScroll",
    mounted(){
        new BScroll(this.$refs.wrapper,{
            tap:true
        })
    }
}
</script>


<style>
    .wrapper{
        height: 100%;
    }
</style>