<template>

    <el-form :model="data"  label-width="50px">

    <div >
    <el-form-item label="姓名" >
        <el-input v-model="data.username" type="text"/>
    </el-form-item>
    <el-form-item label="password" >
        <el-input v-model="data.password" type="text" />
    </el-form-item>
    <el-form-item label="年龄" >
        <el-input v-model="data.age" type="text"/>
    </el-form-item>
    <el-form-item label="性别" >
        <el-input v-model="data.gender" type="text"/>
    </el-form-item>
    <el-form-item label="电话" >
        <el-input v-model="data.phone" type="text"/>
    </el-form-item>
    <el-button type="primary" @click="register">注册</el-button>
    
    </div>
    </el-form>
  
</template>
<script setup>
import { useStore } from 'vuex'; 
import axios from 'axios'
import { message,notification } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


let data=ref({

username:'',
password:'',
age:'',
gender:'',
role:'学生',
phone:'',

})

let vuex=useStore()
let router=useRouter()
let login=()=>{
    router.push("/login")
}
let register= ()=>{
axios.post("/api/user",data.value)
.then(
res=>{
    console.log(res.data);
    if(res.data!=''){
        console.log(res.data);
       
    
        message.success("注册成功,账号为"+res.data.id,10)
        router.push("/login")
       
    }else{
       
        message.error(res.data)
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