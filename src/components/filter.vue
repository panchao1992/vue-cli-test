<template>
    <div class="main">
        {{mes | greaterThan}}
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
        }
    }
}
</script>
<style scope>

</style>
