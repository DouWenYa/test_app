<template>
  <div>
      <h2>{{msg}}</h2>
      <h3>{{$route.params.title}}</h3>
  </div>
</template>

<script>
export default {
    name:"Params",
    data(){
        return {
            msg:"向内页传递参数"
        }
    },
    beforeRouteEnter:(to,from,next)=>{
        next(true)
        console.log("进入当前页面")
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log("离开当前页面")
        next()
    }
}
</script>

<style>
h2{
    color: red;
}
</style>
