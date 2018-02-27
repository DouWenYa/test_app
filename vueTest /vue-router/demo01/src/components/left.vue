<template>
  <div>
     <h3>{{msg}}</h3> 
  </div>
</template>

<script>
export default {
name:"left",
data(){
    return {
        msg:"这是左路由视图"
    }
}
}

</script>

<style scoped>
h3{
    color:aqua
}
</style>
