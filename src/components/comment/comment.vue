<template>
 
  


  <a-comment v-for="item in datas" style="border: 1px solid; margin-bottom: 6px;">
    <template #datetime>
    
      <a-tooltip :title="dayjs(item.creattime).format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ dayjs().fromNow() }}</span>
      </a-tooltip>
      
    </template>
    <template #actions>
      <span key="comment-basic-like">
     
          <template v-if="action === 'liked'">
            <LikeFilled @click="like" />
          </template>
          <template v-else>
            <LikeOutlined @click="like" />
          </template>
       
        <span style="padding-left: 8px; cursor: auto">
          
        </span>
      </span>
      <span key="comment-basic-dislike">
       
          <template v-if="action === 'disliked'">
            <DislikeFilled @click="dislike" />
          </template>
          <template v-else>
            <DislikeOutlined @click="dislike" />
          </template>
       
        <span style="padding-left: 8px; cursor: auto">
          
        </span>
      </span>
      <span key="comment-nested-reply-to" @click="reply(item)">回复</span>
    </template>
    <template #author >
      <p style="font-size: 20px;">{{item.userid}}</p>
    </template>
    <template #avatar>
      <a-avatar src="https://joeschmoe.io/api/v1/random" :alt=value />
    </template>
    <template #content>
      <a-typography>
        <a-typography-paragraph
        :ellipsis="ellipsis ? { rows: 2, expandable: true, symbol: '阅读更多' } : false"
        :content="item.commenttext"
        style="width: 90%;"></a-typography-paragraph>
      </a-typography>
    </template>
    <template v-if="item.children">
      <comment :datas="item.children"></comment>
      
    </template>
   
  </a-comment>
</template>
<script setup>
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import {ref }from 'vue'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import comment from './comment.vue'
dayjs.extend(relativeTime);
defineProps(['datas'])
let ellipsis=ref(true)
const likes=ref(0)
const dislikes=ref(0)
const action=ref()
const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = 'liked';
      console.log($item);
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = 'disliked';
    };
let reply=(props)=>{
  console.log("回复"+props.username);
}
</script>