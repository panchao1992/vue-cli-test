<template>
    <div id="main">
        <div ref="dom" class="begin">
            <h1>1111111111</h1>                
        </div>
        <button @click="move">move</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showFlag:false,
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        move(){
            // this.$refs.dom.style['transform'] = `translate3d(0,100px,0)`
            // this.$refs.dom.style['transition'] = `transform 1s`
            this.$refs.dom.classList.add('end')
        }
    }
}
</script>
<style scoped>
.begin{
    transform:translate3d(0,0,0);
}
.end{
    transform:translate3d(0,100px,0);
    transition:transform 3s;
}
</style>
