<template>
    <fieldset>
        <legend>father:</legend>
        name:<input type="text" v-model="name">
        <son :myname="name" @getTel="getTel"></son>
        <h3>来自子组件的值</h3>
        tel:{{tel}}
    </fieldset>
</template>
<script>
import son from './son'
export default {
    data(){
        return {
            name:'',
            tel:''
        }
    },
    components:{
        son
    },
    methods:{
        getTel(data){
            this.tel = data
        }
    },
    created(){
        console.log('the author is:',this.author)
    },
}
</script>
<style scoped>

</style>
