<template>
  <div>
    <mainpage/>
  </div>
  
</template>

<script>
import mainpage from './components/common/mainpage.vue'

export default {
  name: 'App',
  components: {
    mainpage
  },
}
</script>

<style>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
div{
  font-family: Source Han Sans CN;
}
</style>

