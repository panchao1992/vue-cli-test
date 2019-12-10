<template>
    <div class="main">
        <ol>
            <li><router-link to='/fa'>父子组件传值</router-link></li>
            <li><router-link to='/filter'>filter过滤器</router-link></li>
            <li><router-link to='/if-else'>if-else</router-link></li>
            <li><router-link to='/vuex'>vuex</router-link></li>
            <li><router-link to='/activeRouter'>动态路由</router-link></li>
            <li><router-link to='/nestingRouter'>嵌套路由</router-link></li>
            <li><router-link to='/views/demo'>多视图</router-link></li>
            <li><router-link to='/transition'>动画</router-link></li>
            <li><router-link to='/scrollTop'>scrollTop</router-link></li>
            <li><router-link to='/alimap'>高德地图</router-link></li>
            <li><router-link :to='{path:"routeAppend"}' append tag="span">router-link其他属性</router-link></li>
            <li><router-link to='/css3' >水平垂直居中</router-link></li>
            <li><router-link to='/arrayToObject' >数组转对象</router-link></li>
            <li><router-link to='/topology' >visjs-network</router-link></li>
            <li><router-link to='/axios' >axios</router-link></li>
        </ol>
        
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
