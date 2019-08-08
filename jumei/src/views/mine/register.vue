<template>
    <div class="register">
        <div class="header">
        <div class="one">
        <span class="top_left" @click="back">&lt;</span>
        <h4>注册</h4>
        <router-link to="./login" tag="span" class="top_right">登录</router-link>
        </div>
    </div>
        <form v-model="ruleForm">
        <h6>使用手机注册</h6>
            <input v-model="ruleForm.adminName" type="text" placeholder="请输入聚美账号">
            <input v-model="ruleForm.passWord" type="password" placeholder="请输入登录密码">
        <p>使用聚美账号登录<span>30天内自动登录</span></p>
            <div class="button" @click="submitForm">注册</div>
        <h5>点击注册，表示同意《聚美优品用户协议》</h5>
        </form>
    </div>
</template>

<script>
export default {
    name:"Register",
    data(){
        return {
            ruleForm: {
                adminName: "",
                passWord: ""
            }
        }
    },
    methods:{
        submitForm(){
            var obj={};
            obj.adminName = this.ruleForm.adminName;
            obj.password = this.ruleForm.passWord;
            if(obj.adminName && obj.password){
                this.$store.dispatch("register",obj);
            }else {
                alert("请重新输入")
            }
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.register{
    box-sizing: border-box;
    display: flex;
    margin-top: .367rem;

}
form{
    margin: 0 12%;
    padding: 0;
    border: 0;
    /* vertical-align: baseline; */
    font: inherit;
    color:#999;
    font-size: .167rem

}
h6{
    font-weight: normal;
    text-align: center;
    margin-top: .167rem;
}
input{
    background: #f5f5f5;
    border-radius: .167rem;
    width: 100%;
    height: .3rem;
    font-size: .117rem;
    color: #999999;
    text-align: left;
    text-indent: .175rem;
    margin-top:.167rem;
    border: 0;
}
p{
    color: #fe4070;
    padding-left:.058rem;
    font-size: .1rem;
    height: .417rem;
    line-height: .417rem;
}
p>span{
    color: #999;
    float: right;
    padding: 0px 5px;
    background: #fff;
}
.button{
    background: #feb2c5!important;
    border-radius: .167rem;
    width: 100%;
    height: .3rem;
    font-size: .117rem;
    color: #ffffff;
    line-height: .3rem;
    text-align: center;
    margin: .15rem auto 0 auto;
    display: block;
    border: 0;
    margin-top: 0
}
h5{
    font-size: .108rem;
    text-align: center;
    font-weight: normal;
    margin-top: .125rem;
    color: #808080;
}



.header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    font-size: .167rem;
    border-bottom: .004rem solid #e9e6e6

}
.one{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
h4{
    display: block;
    text-align: center;
    margin: 0px  .292rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .142rem;
    color: #666;
    height: .367rem;
    line-height: .367rem;
}
.top_left{
    position: absolute;
    top: 0;
    left: .083rem;
    width: .333rem;
    height: .367rem;
    line-height: .367rem;
}
.top_right{
    position: absolute;
    line-height: .375rem;
    right: .083rem;
    top: 0;
    color: #333;
    font-size: .125rem;
}

</style>
