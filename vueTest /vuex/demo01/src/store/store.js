import Vue from 'vue';//es6写法
//import Vuex from 'vuex';//es6写法

const Vuex = require("vuex");//require.js写法
Vue.use(Vuex);
const state = {
    count:1,
};
const mutations = {
    add(state,n){
        n?state.count+=n:state.count++;
    },
    reduce(state){
        state.count--;
    },
}
//用export default 封装代码，让外部可以引用
export default new Vuex.Store({
    state,mutations
})