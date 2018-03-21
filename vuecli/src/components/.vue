<template>
  <!-- router-view标签的行内样式会渲染到模版标签下的子元素div,并且进行覆盖 -->
  <div style="color:red">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test3',
  data () {
    return {
      msg: 'test3页面'
    }
  }
}
</script>


<style scoped>

</style>
