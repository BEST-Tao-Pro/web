<template>
<!--    :visible    开启drawer
        @val        关闭
 -->
      <a-drawer
      v-model:visible="show.visible"
      class="custom-class"
      style="color: red; "
      title="登录"
      placement="right"
      @after-visible-change="afterVisibleChange"
      width="40vw"
      @close=close
   >
   <template #extra>
      <a-space>
        <a-button @click="bool=!bool" type="primary">{{bool==true?"注册":"登录"}}</a-button>
      </a-space>
    </template>
    <register v-if="!bool"></register>
    <login v-if="bool"></login>
      </a-drawer>
</template>
<script setup>
import {ref} from 'vue'
import login from '@/components/login/login.vue'
import register from '@/components/login/register.vue'

let show=defineProps(['visible'])
const emit=defineEmits(['val'])
let bool=ref(true)
let close=()=>{
    emit('val',!show.visible)
    
}

</script>