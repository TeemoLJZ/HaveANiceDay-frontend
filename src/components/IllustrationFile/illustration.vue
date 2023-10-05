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
                <el-card 
                :body-style="{ padding: '0px' }"
                v-for="illu in illulist"
                :key = "illu"
                >
                  <!-- 没有对象存储服务器本地无法展示图片 
                    <img
                    :src=illu.illu
                    class="image"
                  /> -->
                  <!-- 暂时固定一个图片 -->
                  <img
                    src="../../assets/3.jpeg"
                    class="image"
                  /> 
                  <div style="padding: 14px;background: #F5F7FA;">
                    <span>{{ illu.name }}</span>
                    <div class="bottom" >
                      <div class="describe">{{illu.desc}}</div>
                      <el-button type="success" class="button">See more</el-button>
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
import {listillus} from '../../api/api'
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
      ],
      illulist: null
    }
  },
  methods:{
    // 获取首页插画信息
    getillu(){
      listillus()
      .then(response=>{
        if(response.data.ret == 0){
          this.illulist = response.data.retlist
          console.log(this.illulist)
        }
        else{
          this.$message({
            message: "something is wrong",
            type:"error"
          })
        }
    }
    )
    .catch(error=>{
      console.log(error)
    })
    }
},
  created(){
    this.getillu()
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