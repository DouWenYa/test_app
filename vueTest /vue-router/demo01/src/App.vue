<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-link to="/">首页</router-link>
    <router-link to="/test">测试</router-link>
    <router-link :to="{name:'test1',params:{userName:'douwenya',id:'qr05128'}}">子路由1</router-link>
    <router-link to="/test/test2">子路由1</router-link>
    <p>{{$route.name}}</p>
    <router-view/>
    <router-view name = "left" class="left"></router-view>
    <router-view name = "right" class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  width:100%;
  height:44px;
  line-height:44px;
  font-size:16px;

}
.right{
  float: left;
  width: 50%;
  background-color: #f6f6f6;
  height: 10vh
}
.left{
  float: left;
  width: 50%;
  background-color: #999;
  height: 10vh
}
</style>
