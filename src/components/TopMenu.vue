<template>
  <el-menu
    :default-active="this.$route.path"
    router
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="index">
      <img src="../components/img/logo.png" alt="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="cases">Cases</el-menu-item>
    <el-menu-item index="about">About</el-menu-item>
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

<style>
.flex-grow {
  flex-grow: 1;
}
img{
  width: 60px;
}
.el-menu{
  margin-bottom: 0px;
}
</style>