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
      <!-- name传参{{$route.name}} -->
      <p>{{$route.name}}</p>
    </div>

    <router-view></router-view>
    <router-view name="top"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
