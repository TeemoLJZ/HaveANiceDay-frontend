<template>
  <div class="header">
    <TopMenu/>
  </div>
</template>

<script>
import TopMenu from './Menu.vue'
export default {
  name: 'HeaderforPage',
  components:{
    TopMenu
  }
}
</script>
<style >
  .header{
    width:100%;
    position: absolute;
    left: 0;
    top:0
  }
</style>