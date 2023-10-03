<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/illustration' }">Illustration</el-breadcrumb-item>
      <el-breadcrumb-item 
      v-for="(item, index) in $route.matched" 
      :key="index"  
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb{
  .el-breadcrumb{
    margin-top: 24px;
    margin-bottom: 24px;
  }
}
</style>

