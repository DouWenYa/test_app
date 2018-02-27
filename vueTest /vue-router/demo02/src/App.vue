<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="backHome">回到首页</button>
    </div>
    <router-link to="/">home</router-link>
    <router-link to="/params/today is newYear">params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/today is yuandan">goParams</router-link>
    <router-link to ="/backHome">backHome</router-link>
    <router-link to ="/noExist">noExist</router-link>
    <transition name="fade">
      <router-view ></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name: "app",
  methods:{
    forward(){
      this.$router.go(1)
    },
     back(){
      this.$router.go(-1)
    },
    backHome(){
      this.$router.push("/")
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transform: opacity 1s;
}
.fade-leave-active {
  opacity: 0;
  transform: opacity 1s;
}
button{
  width: 80px;
  height: 30px;
  line-height:30px;
  text-align:center;
  background-color: #ccc

}
</style>
