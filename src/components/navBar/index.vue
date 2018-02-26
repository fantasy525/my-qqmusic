<style lang='scss'>

</style>

<template>
  <div>
     <mt-navbar v-model="curSelect"  class="navbar">
      <mt-tab-item id="singer"><router-link to="singer">歌手</router-link></mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default{
  name:'NavBar',
  data(){
    return {
      curSelect:'singer'
    }
  }
}
</script>