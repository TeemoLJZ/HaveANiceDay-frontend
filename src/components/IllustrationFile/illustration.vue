<template>
  <div class="Illustration">
    <el-container>
      <el-header>
        <HeaderforPage/> 
      </el-header>
      <el-main>
        <div style="text-align: center;font-size: 28px;font-family: Source Han Sans CN;margin-bottom: 32px;">
          Four Seasons of Cats
        </div>
        <div class="banner">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in imag" :key="item">
              <img :src=item.url alt="" style="width:520px; height: 320px;">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="hot-model">
          <div class="hot-title" style="text-align: center;font-size:28px;margin-bottom:32px;">
            Follow your favorites
          </div>  
          <div class="hot-pic">
            <el-row 
            justify="space-evenly"
            :gutter="50"
            >
              <el-col
                v-for="(o) in 4"
                :key="o"
                :span="6"
              >
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                  <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom" >
                      <div class="describe">describe</div>
                      <el-button text class="button">Operating</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
      </div>
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
  name: 'illustrationPage',
  props: {
    msg: String
  },
  components:{
    HeaderforPage,
    FooterforPage
  },
  data(){
    return{
      imag:[
          {
            url: require('../../assets/1.jpeg')
          },
          {
            url: require('../../assets/2.jpeg')
          },
          {
            url: require('../../assets/3.jpeg')
          }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.Illustration{
  .hot-model{
    .hot-pic{
      .image {
      width: 100%;
      display: block;
      }
      .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .describe {
        font-size: 12px;
        color: #999;
        }
        .button {
        padding: 0;
        min-height: auto;
      }


      }
    } 
  }
}
  
</style>