<template>
    <div>
        <span>来自vuex-store/index/state:{{count}}</span>
    </div>
</template>
<script>
import { mapState } from 'vuex'
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
    }
}
</script>
<style scoped>

</style>
