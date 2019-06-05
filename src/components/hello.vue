<template>
    <div class="main">
        hello {{msg}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:''
        }
    },
    created(){
        console.log(this.$route)
        this.msg = this.$route.params.id
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
    font-size: 22px;
}
</style>
