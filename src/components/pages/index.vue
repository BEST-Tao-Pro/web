<template>
   <a-layout>
    <a-layout-header >
        <nav style=" position: fixed;border: 1px solid; height: 9vh;background-color: aliceblue;width: 100%;text-align: start;padding-left: 10vw;left: 0;" >
           <a-space :size="80">
            <a href="">首页</a><a-divider type="vertical" style="background-color: black;"/>
            <a href="">资讯</a><a-divider type="vertical" style="background-color: black;"/>
            <a href="">useful</a> 
           </a-space>
           
        </nav>
        
    </a-layout-header>
    <a-layout-content style="height: 100vh;">
      <el-button  @click="showDrawer" type="primary">llll</el-button>
   
     <login :visible="visible" @val="changevisible"></login>
   </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<style>

</style>
<script setup>
import {ref} from 'vue'
import login from '@/components/pages/login.vue'
let visible=ref(false)
let bool=ref(true)
let showDrawer = () => {
      visible.value = true;
      
    };
  let  changevisible=(e)=>{
   visible.value=e
  }
</script>