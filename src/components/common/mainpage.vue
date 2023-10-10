<template>
  <div class="mainpage">
    <el-container>
      <el-header>
        <HeaderforPage/>
      </el-header>
      <el-main style="padding:0">
        <router-view>
        </router-view>
      </el-main>
      <el-footer>
        <FooterforPage/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderforPage from '../common/Header.vue'
import FooterforPage from '../common/Footer.vue'
export default {
  name: 'mainpage',
  components:{
    HeaderforPage,
    FooterforPage
  }
}
</script>
<style lang="scss" scoped>
</style>