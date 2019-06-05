<template>
    <div class="main">
        <p>此页面包含自己的 < router-view ></p>
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
