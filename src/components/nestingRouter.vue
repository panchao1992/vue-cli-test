<template>
    <div class="main">
        <p>此页面包含自己的 < router-view ></p>
        <router-link to="/nestingRouter/navRouter"><button>view1</button></router-link>
        <router-view></router-view>
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
