<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    
    <!-- router-link是vue内置的导航组件,作用相当于a标签,to相当于href -->
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">test</router-link>
      <router-link to="/test/test1">test1</router-link>
      <!-- router-link :to传参 -->
      <router-link :to="{name:'test/test2',params:{username:'hhh',id:'321321231'}}">test2</router-link>
      <!-- url传参 路由文件 '/:' 方式传参  -->
      <router-link to="/params/123/hhh">url传参</router-link>
      <!-- redirect重定向 -->
      <router-link to="/home">回到首页redirect</router-link>
      <router-link to="/goHome">回到首页alias</router-link>
      <router-link to="/goParams/456/aaa">带参重定向</router-link>
      <!-- 404错误页面 -->
      <router-link to="/abcdefg">404页面</router-link>
      <!-- name传参{{$route.name}} -->
      <p>{{$route.name}}</p>
    </div>

    <!-- 编程式导航(与router-link不同) -->
    <div>
      <button @click='goForward'>编程式导航:前进</button>
      <button @click='goBack'>编程式导航:后退</button>
      <button @click='goHome'>编程式导航:返回首页</button>
    </div>

    <!-- 过渡动画transition -->
    <transition name='fade' mode="out-in">
    <router-view></router-view>
    </transition>
    <!-- <router-view name="top"></router-view> -->
    <router-view name="bottom"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeRouteEnter:(to,from,next)=>{//组件内钩子配置
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  },
  methods:{
    goBack(){//后退
      this.$router.go(-1);
    },
    goForward(){//前进
      this.$router.go(1);
    },
    goHome(){//跳转到指定页,比如首页
      this.$router.push('/')
    }
  }
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
/* 过渡动画transition */
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
