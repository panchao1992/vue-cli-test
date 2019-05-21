<template>
    <fieldset class="son" @input="postTel">
        <legend>son:</legend>
        <h3>这是子往父传值</h3>
        <span>tel:</span>
        <input class="tel" type="text" v-model="tel_1">-
        <input class="tel" type="text" v-model="tel_2">
        <h3>这是接收父组件的值</h3>
        <span>name:{{myname}}</span>
    </fieldset>
</template>
<script>
export default {
    name:'son',
    data(){
        return {
            tel_1:'',
            tel_2:''
        }
    },
    props:['myname'],
    methods:{
        postTel(){
            this.$emit('getTel',this.tel_1+this.tel_2)
        },
    }
}
</script>
<style scoped>
.son{
    border:1px solid #ccc;
}
.tel{
    
}
</style>
