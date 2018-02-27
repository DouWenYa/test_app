import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
 // mode:"history",//设置两种模式 hash路径中包含#，history不包含history
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:title',
      name: 'Params',
      component: Params,
      //钩子函数可以在路由中配置，也可以在模版组件中配置
      /*beforeEnter:(to,from,next)=>{//to是目的页面相关信息，from是来源页面相关信息，next函数控制页面跳转可传布尔值也可以传入对象path
        console.log(to,from)
       // next()//默认是true
        //next(false)
        next({path:"/"})
      }*/

    },{
      path:"/goHome",
      redirect:"/",//页面重定向
      alias:"/backHome"//重命名
    },
    {
      path: '/goParams/:title',
      redirect: '/params/:title',
    },
    {//配置错误页面
      path:"*",
      component:Error

    }

  ]
})
