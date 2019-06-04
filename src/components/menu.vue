<template>
    <div class="main">
        <ol>
            <li><router-link to='/fa'>父子组件传值</router-link></li>
            <li><router-link to='/filter'>filter过滤器</router-link></li>
            <li><router-link to='/if-else'>if-else</router-link></li>
            <li><router-link to='/vuex'>vuex</router-link></li>
        </ol>
    </div>
</template>
<script>
export default {
    
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
