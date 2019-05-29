<template>
    <div>
        <div v-if="name || age">姓名：{{name}}</div>
        <div v-else>未命名</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'zhangsan',
            age:'17'
        }
    }
}
</script>
<style scope>

</style>
