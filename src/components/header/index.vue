<style lang='scss'>
.h__back{
  color:#fff;
  font-size:30px;/*px*/
}
</style>

<template>
  <div>
    <mt-header fixed title="">
      <div slot="left"><slot name="left"></slot></div>
      <div slot="right"><slot name='right'></slot></div>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name:'Header',
    props:{
      hasLogo:true
      
    }
  }
</script>