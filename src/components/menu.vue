<template>
    <div class="main">
        <ol>
            <li><router-link to='/fa'>父子组件传值</router-link></li>
            <li><router-link to='/filter'>filter过滤器</router-link></li>
            <li><router-link to='/if-else'>if-else</router-link></li>
            <li><router-link to='/vuex'>vuex</router-link></li>
            <li><router-link to='/activeRouter'>动态路由</router-link></li>
            <li><router-link to='/nestingRouter'>嵌套路由</router-link></li>
            <li><router-link to='/views'>多视图</router-link></li>
        </ol>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>
<style scope lang='less'>
ol{
    list-style-type:disc;
    li{
        margin-bottom:8px;
    }
}
</style>
