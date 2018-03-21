import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test' //引入test.vue
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import params from '@/components/params'
import error404 from '@/components/error404'

Vue.use(Router)

export default new Router({
  mode: 'history', //去除地址栏中的'#'
  routes: [{
      path: '/',
      alias: '/HHH', //alias别名
      name: 'HelloWorld',
      // component: HelloWorld
      components: { //配置单页面多路由时,注意是组件的复数s
        default: HelloWorld, //对应的app.vue里没有name的router-view,即默认
        top: HelloWorld, //对应的app.vue里name值为top的router-view
        bottom: test3
      },
      // beforeEnter: (to, from, next) => {//路由钩子,进入根目录前
      //   console.log('进入模板');
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
    },
    {
      path: '/test', //配置test.vue路由
      component: test, //需要与import引入的组件名相同
      children: [{
          path: '/', //以 / 开头的嵌套路径会被当作根路径
          name: 'test', //其实并不需要和组件名相同
          component: test
        },
        {
          path: 'test1', //注意子路由不需要'/'
          name: 'test/test1', //其实并不需要和组件名相同
          component: test1
        },
        {
          path: 'test2',
          name: 'test/test2', //其实并不需要和组件名相同
          component: test2
        }
      ]
    }, {
      path: '/params/:num(\\d+)/:user', //':'绑定参数,'()'传递正则,只允许纯数字参数
      component: params
    }, {
      path: '/home',
      redirect: '/', //重定向,回首页
      alias: '/goHome' //alias别名
    }, {
      path: '/goParams/:num(\\d+)/:user',
      redirect: '/params/:num(\\d+)/:user' //带参重定向
    }, {
      path: '*', //404页面
      component: error404
    }
  ]
})
