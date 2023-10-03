<template>
  <el-menu
    :default-active="this.$route.path"
    router
    class="top-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    text-color="#30E19D"
    active-text-color="#1D966C"
  >
    <el-menu-item index="index">
      <img src="../../assets/logor.png" alt="logo" style="height: 38px; width:220px; margin: 10px 16px;" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="illustration">Illustration</el-menu-item>
    <el-menu-item index="">Food</el-menu-item>
    <el-menu-item index="">Plant</el-menu-item>
    <el-menu-item index="">Book</el-menu-item>
    <el-menu-item index="">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    msg: String
  }
}
</script>

<style lang='scss' scoped>
.top-menu{
  .flex-grow{
    flex-grow: 1;
  }
}
</style>