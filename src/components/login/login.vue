<template>

        <el-form :model="logindata"  label-width="50px">

        <div >
        <el-form-item label="账号" >
            <el-input v-model="logindata.id" type="text"/>
        </el-form-item>
        <el-form-item label="密码" >
            <el-input v-model="logindata.password" type="text" />
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
   
        </div>
        </el-form>
      
</template>
<script setup>
import { useStore } from 'vuex'; 
import axios from 'axios'
import { message,notification } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let logindata=ref({
    id:'',
    
    password:'',
    
})

let vuex=useStore()
let router=useRouter()
let register=()=>{
    router.push("/register")
}
let login= ()=>{
    axios.post("/api/user/login",logindata.value)
.then(
    res=>{
        if(res.data!=''){
            console.log(vuex.state.userdata);
           
           
            vuex.commit('updateuserdata',res.data);
         
            message.success("登录成功")
            router.push("/manger")
           
        }else{
            console.log(logindata.value);
            message.error("账号或者密码错误！")
        }
    }
)
.catch(
    res=>{
        message.error(res.message)
    }
)
}
</script>
<style lang="less" scoped>
.el-form{
    width: 40vw;
    height: 60vh;
    margin: 50px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -30vh;
    margin-left: -20vw;
    z-index: 100;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .el-button{
    width: 100%;
}
}
</style>