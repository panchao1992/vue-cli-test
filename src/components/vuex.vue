<template>
    <div>
        <div>来自vuex-store/index/state:{{count}}</div>
        <button @click="modifyCount">修改count</button>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return {

        }
    },
    created(){
        console.log(this.$store)
    },
    computed:{
        ...mapState([
            'count'
        ])
    },
    methods:{
        ...mapMutations(['addCount']),
        modifyCount(){
            this.$store.commit('addCount',100)
        }
    }
}
</script>
<style scoped>

</style>
