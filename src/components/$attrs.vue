<template>
    <div id="app">
        ------------child1开始------------
        <child1
            :p-child1="child1"
            :p-child2="child2"
            v-on:test1="onTest1" 
            v-on:test2="onTest2"> 
            <!-- 此处监听了两个事件test1,test2，可以在B组件或者C组件中直接触发 -->
            <template v-slot:son>这是子节点的插槽</template>
            <template v-slot:grandson>这是孙子节点的插槽</template>
        </child1>
        ------------child1结束------------
    </div>
</template>
<script>
 import Child1 from './Child1.vue';
 export default {
    data () {
        return {
           child1:'子组件的属性值1',
           child2:'子组件的属性值2',
        };
    },
    components: { Child1 },
    methods: {
        onTest1 () {
            console.log('test1 running...');
        },
        onTest2 () {
            console.log('test2 running');
        }
    }
 };
</script>