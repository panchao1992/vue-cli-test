<template>
    <div class="main">
        原数组：<br>{{mes}}<br>
        filter-大于20：<br>{{mes | greaterThan}}<br>
        多重过滤：大于20小于30<br>
        {{mes | greaterThan | lessThan}}<br>
    </div>
</template>
<script>
export default {
    data(){
        return {
            mes:[21,25,14,0,45,-3]
        }
        
    },
    filters:{
        greaterThan(val){
            // return val.map((item)=>{
                
            //     if(item>20){
            //         return item
            //     }
            // })
            let arr = [];
            val.forEach((item,i) => {
                if(item>20){
                    arr.push(item)
                }
            })
            return arr
        },
        lessThan(val){
            let arr = [];
            val.forEach((item,i) => {
                if(item<30){
                    arr.push(item)
                }
            })
            return arr
        }
    }
}
</script>
<style scope>
.main{
    padding: 20px;
}
</style>
