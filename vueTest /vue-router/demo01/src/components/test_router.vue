<template>
  <div>
  <h1>{{msg}}</h1>
  <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'test_router',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App,哈哈'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color:#f37938;
}
</style>
