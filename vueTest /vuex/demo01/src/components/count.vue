<template>
  <div>
      <h4>{{msg}}</h4>
      <h3>计次：{{$store.state.count}}--{{count}}</h3>
      <p>
          <button @click="$store.commit('add',2)">add</button>
          <button @click="$store.commit('reduce')">reduce</button><br>
          <button @click="add(3)">+</button>
          <button @click="reduce">-</button>
      </p>
  </div>
</template>

<script>
import store from '@/store/store.js'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
       return { msg:"使用vuex管理数据状态"}
    },
    store,
    methods:{
        print(){
            //console.log($store)
        },
    },
    //直接使用store中的数据
    computed:mapState(["count"]),
    methods:mapMutations(["reduce","add"])
    /*computed:{
        count(){
            return this.$store.state.count
        }
    }*/
    //computed:mapState({count:(state)=>{ return state.count}})
}
</script>

<style>
button{
    background-color: #cccccc
}
</style>