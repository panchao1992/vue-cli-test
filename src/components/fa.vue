<template>
    <div>
        <my-title :thetitle='title'></my-title>
        <fieldset>
            <legend>father:</legend>
            name:<input type="text" v-model="name">
            <son :myname="name" @getTel="getTel"></son>
            <h3>来自子组件的值</h3>
            tel:{{tel}}
        </fieldset>
    </div>
</template>
<script>
import son from './son'
import myTitle from './my-title'
export default {
    data(){
        return {
            name:'',
            tel:'',
            title:''
        }
    },
    components:{
        son,
        myTitle
    },
    methods:{
        getTel(data){
            this.tel = data
        }
    },
    created(){
        console.log('the author is:',this.author)
    },
    mounted(){
        this.title = this.$route.name + ''
    }
}
</script>
<style scoped>

</style>
