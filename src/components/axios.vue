<template>
    <div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            
        }
    },
    methods:{
        
    },
    created(){
        let data = {
            username:'test',
            password:'123456',
        }
        let formData = new FormData()
        formData.append("username", "test");
        formData.append("password", 123456);
        axios.post('http://11.0.0.186:8080/login',formData,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
            }
        }).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    },
    mounted(){

    }
}
</script>
<style scoped>

</style>
