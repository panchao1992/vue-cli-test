<template>
    <div class="main">
        <p>以下几个按钮都指向hello页，但是参数不同</p>
        <router-link to="/hello/zhang"><button>张三</button></router-link>
        <router-link to="/hello/li"><button>李四</button></router-link>
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
