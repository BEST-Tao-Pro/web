<template>
    <a-comment>
   
   <template #content>
     <a-form-item>
       <a-textarea v-model:value="value.commenttext" :rows="4" />
     </a-form-item>
     <a-form-item>
       <a-button html-type="submit" :loading="submitting" type="primary" @click="submit">
         发表
       </a-button>
     </a-form-item>
   </template>
 </a-comment>

</template>
<script setup>
import { ref} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const emit=defineEmits(['submit'])

   
    const submitting = ref(false);
    const value = ref({
        userid:'',
        commenttext:'',
        createtime:dayjs().format("YYYY-MM-DD"),
        parentcomment:'',
        childcomment:'',
        isdeleted:''
    });
    
    let submit=( )=>{
       
        emit('submit',value.value)

      
    }
</script>
