<template>
    <div class="main">
        <p>子路由页面</p>
        <h3>路由传参的两种方式 router.push</h3>
        <p>一：name-params</p>
        <button @click="paramsTo">编程式跳转</button>
        <router-link :to="{name:'paramsRouter',params:{id:'001'}}"><button>声明式跳转</button></router-link>
        <p>二：path-query</p>
        <button @click="queryTo">编程式跳转</button>
        <router-link :to="{path:'/nestingRouter/navRouter/queryRouter',query:{id:'001'}}"><button>声明式跳转</button></router-link>
        <router-view></router-view>
        <h3 style="margin-top:20px;">路由替换 router.replace</h3>
        <p>history里面没有记录</p>
        <p>一：:to声明式</p>
        <router-link :to="{name:'paramsRouter',params:{id:'001'}}" replace=""><button>声明式跳转</button></router-link>
        <p>二：编程式</p>
        <button @click="replaceTo">编程式跳转</button>
        <h3 style="margin-top:20px;">路由跳转 router.go</h3>
        <button @click="goTo">router.go(-1)</button>
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
        paramsTo(){
            this.$router.push({name:'paramsRouter',params:{id:'001'}})
        },
        queryTo(){
            this.$router.push({path:'/nestingRouter/navRouter/queryRouter',query:{id:'001'}})
        },
        replaceTo(){
            this.$router.replace('/nestingRouter/navRouter/paramsRouter')
        },
        goTo(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.main{
    padding: 20px;
}
h3{
    display: block;
}
</style>
