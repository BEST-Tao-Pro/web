<template>
    <a-descriptions title="个人信息">
      <a-descriptions-item label="姓名">{{vuex.username}}</a-descriptions-item>
      <a-descriptions-item label="id">{{vuex.id}}</a-descriptions-item>
      <a-descriptions-item label="角色">{{vuex.role}}</a-descriptions-item>
      <a-descriptions-item label="年龄">{{vuex.age}}</a-descriptions-item>
      <a-descriptions-item label="性别">{{vuex.gender}}</a-descriptions-item>
      <a-descriptions-item label="电话">{{vuex.phone}}</a-descriptions-item>
      <a-descriptions-item label="密码">{{vuex.password}}</a-descriptions-item>
    </a-descriptions>
</template>
<script setup>
import { useStore } from 'vuex';
let vuex=useStore().state.userdata

</script>