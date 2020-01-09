<template>
    <div>
        <div>来自vuex-store/index/state:{{count}}</div>
        <button @click="modifyCount">修改count</button>
    </div>
</template>
<script>
import { mapState,mapMutations,mapActions } from 'vuex'
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
        ...mapActions(['addNowCount']),
        modifyCount(){
            // this.$store.commit('addCount',100)//action与mutation都可以
            this.$store.dispatch('addNowCount',100)
        }
    }
}
</script>
<style scoped>

</style>
