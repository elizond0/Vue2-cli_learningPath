<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'test页面'
    }
  }
}
</script>


<style scoped>

</style>
