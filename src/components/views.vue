<template>
    <div class="main">
        <h2>11111111</h2>
        <router-view name="header" class="header"></router-view>
        <router-view name="sidebar" class="sidebar"></router-view>
        <router-view name="body" class="body"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    created(){
        
    },
    computed:{
        
    },
    methods:{
        
    }
}
</script>
<style scoped>
.main{
    padding: 20px;
}
</style>
