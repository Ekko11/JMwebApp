<template>
    <div  class="goodsDec">
        <div v-for="(item,index) in proper" :key="index" class="goodsdec">
            <p>{{item.name}}</p>
            <p>{{item.value}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name:"GoodsDec",
    props:{
        proper:{
            type:Array,
            required:true
        }
    },
    
}
</script>

<style>
.goodsDec{
    height: 4.583rem;
    background: #fff;
}
.goodsdec{
    display: flex;
    line-height: .167rem;
    margin-top: .083rem
}
.goodsdec p:nth-of-type(1){
    width: 30%;
    color: #999;
}
.goodsdec p:nth-of-type(2){
    width: 70%;
    color: #333;
}
</style>
