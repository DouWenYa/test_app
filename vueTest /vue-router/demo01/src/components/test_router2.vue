<template>
  <div>
  <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'test_router2',
  data () {
    return {
      msg: '这是test_router的子路由2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color:green;
}
</style>
