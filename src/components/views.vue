<template>
    <div class="main">
        <router-view name="header" class="header"></router-view><!-- 不写的话默认是default -->
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
