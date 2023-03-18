<template>

        
        <replay @submit="submit" style="border: 1px solid;margin-bottom: 10px;"></replay>
        
        <comment :datas="datas" ></comment>
</template>
<script setup>
import comment from '@/components/comment/comment.vue'
import replay from '@/components/comment/replay.vue'
import axios from 'axios';
import {ref,onMounted} from 'vue'
const datas=ref()
let getdata=async ()=>{
    await axios.get("/api/comment").then( res=>{
            datas.value=res.data.reverse()
        }
)
       
    
    return datas.value
}
onMounted(async() => {
    await getdata()
    console.log( await getdata());
})
let submit=(data)=>{
    
    axios.post("/api/comment",data).then(
       async  res=>{
            await getdata()
            console.log("res");
    }
        )
}
</script>