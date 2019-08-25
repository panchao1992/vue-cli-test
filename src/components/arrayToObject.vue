<template>
    <div>
        <p>{{name}}</p>
        <p>{{arr}}</p>
        <p>{{obj}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'zhangsan',
            arr:[['name',18],['sex','man'],['height',178]],
            obj:{}
        }
    },
    mounted(){
        this.name = 'lisi'
        this.arr.forEach(element => {
            /* 
            this.obj[element[0] = element[1]] //这种能修改对象，但是不更新视图
            */
            this.$set(this.obj,element[0], element[1]) //这里用到vue.set(this.$set)方法双向绑定数据，实时更新视图
        })
    },
    methods:{
        arr2obj(key,val){

        }
    }
}
</script>