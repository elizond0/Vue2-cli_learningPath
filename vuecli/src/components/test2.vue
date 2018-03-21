<template>
  <div>
    <h2>{{msg}}</h2>
    <p>username:{{$route.params.username}}</p>
    <p>id:{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: 'test2页面'
    }
  }
}
</script>


<style scoped>

</style>
