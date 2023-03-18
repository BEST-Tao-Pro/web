<template>
    <a-layout >
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible >
        <div class="logo" />
        <a-menu   mode="inline">
          <a-menu-item key="1" @click="nav1" >
            <user-outlined />
            <span>个人信息</span>
          </a-menu-item>
         <template v-if="vuex.state.userdata.role!='学生'">
         <a-menu-item key="2"  @click="nav2">
            <video-camera-outlined />
            <span>用户管理</span>
          </a-menu-item>
          <a-menu-item key="3"  @click="nav3">
            <upload-outlined />
            <span>评论管理</span>
          </a-menu-item>
            
          
         </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header >
         <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
         </div>
        <div>
          
          <a-popover v-model:visible="visible"  trigger="hover" arrow-point-at-center>
            <template #content>
              <a-popconfirm
                title="你确定要注销吗"
                ok-text="是"
                cancel-text="否"
                @confirm="confirm"
                @cancel="cancel"
                placement="bottom"
              >
                <a-button type="text">注销</a-button>
              </a-popconfirm>
            </template>
            {{ vuex.state.userdata.username }}
          </a-popover>
        </div>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflow: 'initial'  }"
          
        >
        
          <el-scrollbar height="500px">
            <router-view></router-view>
          </el-scrollbar>
         
        </a-layout-content>
      </a-layout>
    </a-layout>
    
  </template>
  <script setup>
  import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
  import {  ref } from 'vue';
  import { message,notification } from 'ant-design-vue';
 
  import { useRouter } from 'vue-router';
  import {useStore} from 'vuex'
  
  let router=useRouter()

  let collapsed= ref(false)
  let vuex=useStore()
 

   let nav1=()=>{
    router.push("data")
    
   } 
   let nav2=()=>{
    router.push("userlist")
    
   } 
   let nav3=()=>{
    router.push("news")
    
   } 
  
   notification.open({
      message:'Welcome',
      description:vuex.state.userdata.username,
      duration:5,
      style:{background:"green"}
    })
  let confirm=()=>{
    vuex.commit('updateuserdata',{});
    router.push("/login")
    message.success("注销成功！")
  }
  let cancel=()=>{
    message.success(
      "已取消"
    )
  }
 
  </script>
  <style lang="less" scoped>
  @height:20vh;
  body html{
    padding: 0;
    margin: 0;
  }
  .ant-layout{
    padding: 0;
    margin: 0;
    
    .ant-layout-sider{
     height: 100vh;
      background-color: #f5f2f2;
      ::v-deep .ant-menu-item{
        height: @height;
       
        margin-top: 0;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        &:last-child{
        margin-bottom: 0;
       
      }
      
      }
      
    }
    .ant-layout{
      .ant-layout-header{
        padding: 0;
        background: #f5f2f2 !important;
        display: flex;
        justify-content: space-between;
        align-content: center;
        .trigger{
          size: 50px ;
          align-self: center;
        }
      }
     .ant-layout-content{
      height: 80vh;
      overflow: auto;
      text-align: left;
     }
    }
  }
  
  </style>