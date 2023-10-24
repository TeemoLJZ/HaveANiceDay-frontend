<template>
  <div class="detail">        
    <BreadCrumb/>
    <div class="main-content">
      <div class="image">
        <img src='../img/details.png' style="width:100%; height:100%;">
      </div>
      <div class="details">
        <div class="content" v-for="details in illDetails" :key="details" >
          <div class="title">{{ details.name }}</div>
          <div class="author">{{ details.author }}</div>
          <div class="description">{{ details.desc }}</div>
          <el-tag  effect="plain" type="warning" round>{{ details.tag}}</el-tag>
        </div>
        <div class="tags">
          <el-tag  effect="plain" type="warning" round>photography</el-tag>
          <el-tag  effect="plain" type="warning" round style="margin-left:8px">store</el-tag>
        </div>
      <el-divider />
      <div class="sug-input">
        <span class="question">What do you want to say when you see this illustration?</span>
        <el-input
          v-model="textarea"
          :rows="4"
          type="textarea"
          placeholder="Please input"
          class="input-area"
        />
        <div class="submit-area">
          <el-button type="success" style="background: #30E19D;">save</el-button>
          <el-button  link style="margin-left:16px;" type="success">Find out what more people think about this illustration.</el-button>
        </div>
      </div>
      </div>
    </div>       
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import {getIlluDetails} from '../../api/api'
export default {
  name: 'detailPage',
  data(){
    return{
      id:this.$route.params.id,
      illDetails:[],
    }
  },
  methods:{
    getilludetails(){
      getIlluDetails(this.$route.params.id)
      .then(response=>{
        if(response.data.ret == 0){
          this.illDetails = response.data.retlist
          console.log(this.illDetails)
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
  },
  created(){
    this.getilludetails()
  },
  components:{
    BreadCrumb,
  }
}
</script>

<style lang="scss" scoped>
// .el-link .el-icon--right.el-icon {
//   vertical-align: text-bottom;
// }

.detail{
    .main-content{
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      .img{
        width: 486px;
        height: 604px;
      }
      .details{
        margin-left: 24px;
        .content{
        margin-top: 64px;
        .title{
          font-family: Source Han Sans CN;
          font-size: 28px;
          font-weight: 500;
          line-height: 36px;
          letter-spacing: 0em;
            
          /* 字体/标题-重要 */
          color: #303133;
        }
        .author{
          font-family: Source Han Sans CN;
          font-size: 16px;
          font-weight: normal;
          line-height: 24px;
          letter-spacing: 0em;
          
          margin-top: 16px;
            
          /* 字体/一级文本-常规 */
          color: #606266;
        }
        .description{
          /* 重要/正文-通用-16px-r */
          font-family: Source Han Sans CN;
          font-size: 16px;
          font-weight: normal;
          line-height: 24px;
          letter-spacing: 0em;
            
          /* 字体/一级文本-常规 */
          color: #606266; 
          margin-top: 16px;
        }
      }
        .tags{
          margin-top:32px
        }
        .sug-input{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .question{
          font-family: Source Han Sans CN;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0em;
            
          /* 字体/标题-重要 */
          color: #303133;	
          }
          .input-area{
            margin-top:16px;
            width:657px
          }
          .submit-area{
            margin-top: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
      }   
    }
}
</style>