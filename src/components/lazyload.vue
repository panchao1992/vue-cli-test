<template>
    <div>
        <img src="../assets/img/linian.jpg" alt="">
        <img v-lazy="require('../assets/img/linian.jpg')" alt="">
        <img v-lazy="require('../assets/img/linian.jpg')" alt="">
        <img v-lazy="require('../assets/img/linian.jpg')" alt="">
        <img v-lazy="require('../assets/img/linian.jpg')" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
img{
    display: block;
    margin:100px 0;
}
</style>