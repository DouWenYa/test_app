<template>
  <div>
  <h1>{{msg}}-->姓名：{{$route.params.userName}};编号：{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'test_router1',
  data () {
    return {
      msg: '这是test_router的子路由1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color:red;
}
</style>
