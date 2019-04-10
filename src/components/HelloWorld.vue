<template>
  <div id="app">
    <p @click="f_watch">{{msg}}</p>
    <p v-html="c"></p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'click this text and look console',
      a:1,
      b:2,
      c:{
        name:'xx'
      }
    }
  },
  created(){
    console.log('$option:',this.$options)
    console.log('$data:',this.$data)
    
  },
  methods:{
    f_watch(){
      this.$watch(
        ()=>{
          console.log(this.a+this.b)
        }
      )
      this.$set(this.c,'age',17);
      console.log(this.c)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
