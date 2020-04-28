<template>
    <div>
        <h1>111111</h1>
        <img :src="url" alt="">
    </div>
</template>
<script>
import request from '@/utils/request'
export default {
    data(){
        return {
            url:''
        }
    },
    created(){
        this.down()
    },
    methods:{
        down(){
            request({
                url:'/flatfile',
                method:'get',
                params:{'f1-021333233-i.708':null},
                responseType: 'blob',
                emulateJSON: true,
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
img{
    width:100%;
    
}
</style>
