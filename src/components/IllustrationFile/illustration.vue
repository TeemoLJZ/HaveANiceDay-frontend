<template>
  <div class="Illustration">
        <div class="title">
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
            <div class="imag-card"  v-for="illu in illulist" :key=illu >
              <el-image class='image' :src=illu.src fit="cover" />
              <div class="card-bottom">
                <div class="name">{{illu.name}}</div>
                <div class="author">{{illu.author}}</div>
                <div class="button">
                  <el-button type="success" size="small" @click="goToDetailPage(illu.id)">see more</el-button>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align:center;margin-top:24px">
            <el-link type="success" href="/more" >Find other favorites</el-link>
          </div>
      </div>
  </div>
</template>

<script>
import {listillus} from '../../api/api'
export default {
  name: 'illustrationPage',
  props: {
    msg: String
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
      src:require("../../assets/1.jpeg"),
      illulist: [],
      pagesize:5,
      pagenum:1
    }
  },
  methods:{
    // 获取首页插画信息
    getillu(){
      listillus(this.pagesize,this.pagenum,'','','','')
      .then(response=>{
        if(response.data.ret == 0){
          this.illulist = response.data.retlist
          console.log(this.illulist)
          this.illulist.forEach(item=>{
            item.author === 'ruanxiaoshan' ? item.author_text = '阮晓山': item.author_text
          })
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
    },
    goToDetailPage(id){
      this.$router.push({
        name:'details',
        params:{
          id:id
        }
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
  .title{
    text-align: center;
    font-size: 28px;
    margin-bottom: 32px;
  }
  .banner{
    text-align: center;
  }
  .hot-model{
    

    .hot-pic{
      display: flex;
      flex-direction: row;
      gap: 40px;
      justify-content: center;
      .imag-card{
        width: 200px;
        height: 324px;
      }
      .image {
      width: 200px;
      height:220px;
      display: block;
      text-align: center;
      border-radius: 5px 5px 0px 0px;
      }
      .card-bottom {
        background: #F5F7FA;
        border-radius: 0px 0px 5px 5px;
        position: static;
        width: 200px;
        height: 104px;
        .name{
          font-size: 16px;
          line-height: 24px;
          color: #606266;
          padding: 8px;
        }
        .author {
          font-size: 12px;
          color: #909399;
          padding-left: 8px;
          line-height: 16px;
        }
        .button {
          margin-left: 116px;
          margin-top: 14px;
       }


      }
    } 
  }
}
  
</style>