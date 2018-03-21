<template>
  <!-- router-view标签的行内样式会渲染到模版标签下的子元素div,并且进行覆盖 -->
  <div style="color:red">
    <h2>{{msg}}</h2>
    <p>num:{{$route.params.num}}</p>
    <p>user:{{$route.params.user}}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params页面'
    }
  }
}
</script>


<style scoped>

</style>
