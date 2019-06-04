<template>
    <div>
        <img src="../assets/img/404.jpg" alt="">
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return {
            msg:'页面找不到了！囧！'
        }
    }
}
</script>
<style scoped>
img{
    width:100%;
    
}
</style>
