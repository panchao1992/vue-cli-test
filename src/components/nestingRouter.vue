<template>
    <div class="main">
        <p>此页面包含自己的 < router-view ></p>
        <router-link to="/nestingRouter/view1"><button>view1</button></router-link>
        <router-link to="/nestingRouter/view2"><button>view2</button></router-link>
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
