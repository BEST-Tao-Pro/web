<template>

    <el-form :model="updata" v-if="updatabool=='updata'" label-width="50px">

        <div >
            <el-form-item label="id" >
            <el-input v-model="updata.id" type="text" disabled/>
        </el-form-item>
        <el-form-item label="姓名" >
            <el-input v-model="updata.username" type="text"/>
        </el-form-item>
        <el-form-item label="性别" >
            <el-input v-model="updata.gender" type="text" />
        </el-form-item>
        <el-form-item label="角色" >
            <el-input v-model="updata.role" type="text" :disabled="vuex.state.userdata.role=='管理员'?false:true"/>
        </el-form-item>
        <el-form-item label="年龄" >
            <el-input v-model="updata.age" type="text"/>
        </el-form-item>
        <el-form-item label="电话" >
            <el-input v-model="updata.phone" type="text"/>
        </el-form-item>
        <el-form-item label="密码" >
            <el-input v-model="updata.password" type="password" show-password/>
        </el-form-item>
        <el-button type="primary" @click="gengxin">更新</el-button>
        <el-button type="primary" @click="updatabool=''">退出</el-button>
        </div>
    </el-form>
        <el-form :model="adddata" v-if="updatabool=='add'" label-width="50px">

        <div >
        <el-form-item label="姓名" >
            <el-input v-model="adddata.username" type="text"/>
        </el-form-item>
        <el-form-item label="性别" >
            <el-input v-model="adddata.gender" type="text" />
        </el-form-item>
        <el-form-item label="角色" >
            <el-input v-model="adddata.role" type="text" :disabled="vuex.state.userdata.role=='管理员'?false:true"/>
        </el-form-item>
        <el-form-item label="年龄" >
            <el-input v-model="adddata.age" type="text"/>
        </el-form-item>
        <el-form-item label="电话" >
            <el-input v-model="adddata.phone" type="text"/>
        </el-form-item>
        <el-form-item label="密码" >
            <el-input v-model="adddata.password" type="password" show-password/>
        </el-form-item>
        <el-button type="primary" @click="tianjia">添加</el-button>
        <el-button type="primary" @click="updatabool=''">退出</el-button>
        </div>
        </el-form>

  <el-table :data="userlist" style="width: 100%;" height="450" >
    
    <el-table-column label="id" width="100%" prop="id" align="center"/>
    <el-table-column label="姓名" width="100%" prop="username" align="center"/>
    <el-table-column label="性别" width="100%" prop="gender" align="center"/>
   
    <el-table-column label="角色" width="100%" prop="role" align="center"/>
   
    <el-table-column label="年龄" width="200" prop="age" align="center"/>
    <el-table-column label="密码" width="100" prop="password" align="center"/>
    <el-table-column label="电话" width="200" prop="phone"  align="center"/>
    <el-table-column label="" align="center">
        
      <template #header>
        <div style="display: flex;">
        <el-input v-model="searchdata" size="small" placeholder="Type to search" />
        <el-button type="primary" :icon="Search" @click="search">Search</el-button>
        </div>
      </template>
    
      <template #default="scope" >
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-row style="margin-top: 10px;">
    
    <el-col  :offset="1" :span="1">
        <el-pagination 
        background 
        layout="prev, pager, next" 
        v-model:total="total"
        v-model:page-size="size" 
        v-model:current-page="current"
        v-model:default-current-page="currentpage"
        pager-count=10
    :span="6"
        @current-change="updatecurrent"
        />
    </el-col>
    <el-col :span="2" :offset="19" >
        <el-button type="primary" :span="5" @click="updatabool='add'">添加</el-button>
    </el-col>
  </el-row>
    
    
  
</template>
<script setup>
import {
  Search,
  
} from '@element-plus/icons-vue'
import axios from 'axios'
import {ref,onMounted} from 'vue'
import { message,notification } from 'ant-design-vue';
import { useStore } from 'vuex';
let vuex=useStore()
let currentpage=ref()
let userlist=ref()
let current=ref(1)
let size=ref(15)
let total=ref(100)
let updata=ref()
let updatabool=ref()
let searchdata=ref()
let adddata=ref({
    username:'',
    age:'',
    gender:'',
    role:'学生',
    password:'',
    phone:''
})  
    axios.get("/api/user/"+current.value+"/"+size.value).then(
    res=>{
            userlist.value=res.data.records
            total.value=res.data.total
    }
)
    
let handleDelete=(index,row)=>{
  axios.delete("/api/user/"+row.id)
  .then(
    
    ()=>{
        message.success("删除成功")
        axios.get("/api/user/"+current.value+"/"+size.value).then(
                    res=>{
                        userlist.value=res.data.records
                        }
                    )
    }
  )
  .catch(
         (res)=>{
            message.error(res.message)
                }
        )
}

let handleEdit=(index,row)=>{
 
 updata.value=row
 updatabool.value='updata'

  
 
}



let updatecurrent=(val)=>{
  
  currentpage.value=val
  axios.get("/api/user/"+currentpage.value+"/"+size.value).then(
    res=>{
        userlist.value=res.data.records
        
    })
}
let gengxin=()=>{
    axios.put("/api/user",updata.value)
    .then(
        ()=>{
            message.success("数据已更新！")
            updatabool.value=''
        }
    )
    .catch(
        (res)=>{
            message.error(res.message)
        }
    )
   
}
let tianjia=()=>{
    console.log(adddata,adddata.value);
   axios.post("/api/user",adddata.value)
   .then(
    ()=>{
        message.success("用户已添加！")
        updatabool.value=''
    }
   )
   .catch(
    (res)=>{
        message.error(res.message)
    }
   )
}
let search=()=>{
    axios.get("/api/user/"+searchdata.value)
    .then(
        (res)=>{
           userlist.value=res.data
           message.success("查询成功！一共有"+res.data.length+"条数据")
           
           
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
    .div{
        .el-form-item{
        
            .el-input{
                width: 100px;
            }
        };
        
    }
}
.el-button{ width: 125px;}
</style>