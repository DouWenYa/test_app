<template>
  <div>
     <h3>{{msg}}</h3> 
  </div>
</template>

<script>
export default {
name:"right",
data(){
    return {
        msg:"这是右路由视图"
    }
}
}

</script>

<style scoped>
h3{
    color: orange;
}
</style>
