<template>
    <div class="imgPage">
        <div v-html="url">
          
        </div>
      
    </div>
</template>

<script>
export default {
    name:"ImgPage",
    data(){
        return {
            url:""
        }
    },
    props:{
        decUrl:{
            type:String,
            required:true
        }
    },
    watch:{
        decUrl(newP){
            this.url = newP
        }
    }

}
</script>

<style>

</style>
