import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testRouter from '@/components/test_router'
//设置子路由
import testRouter1 from '@/components/test_router1'
import testRouter2 from '@/components/test_router2'
//引入多路由，多个router-view
import leftRouter from '@/components/left'
import rightRouter from '@/components/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:leftRouter,
        right:rightRouter
      }
    },
    {
      path: '/change',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:rightRouter,
        right:leftRouter
      }
    },{
      path: '/test',
      name: 'test_router',
      component: testRouter,
      children:[
        {
          path: '/',
          name: 'test_router',
          component: testRouter,
        },
        {
          path: 'test1',
          name: 'test1',
          component: testRouter1,
        },
        {
          path: 'test2',
          name: 'test2',
          component: testRouter2,
        },
      ]
    }
  ]
})
