<template>
  <div class="about-us">
    <span class="title">Key Roles</span>
    <div class="card" v-for="{id,name,title,description} in keyRoles" :key="id">
      <div class="card-top card-top1">
        <img src="../components/img/role1.png" alt="role1" class="avatar"> 
        <span class="cardname" >{{name}}</span>
        <span class="cardtitle" >{{title}}</span>
        <span class="cardcontent">{{description}}</span>
      </div>
    </div>
    <el-button  @click="dialogFormVisible=true">联系我</el-button>
    <div class="getAxios">
      <div v-for="currency in info" :key="currency" class="currency">
      {{ currency.description }}:
      <span class="currency-value">{{ currency.rate_float }}</span>
      </div>
      <div>
        <el-button @click="getInfo()">getInfo</el-button>
        <div v-for="cash in clickInfo" :key="cash">
          {{ cash.description}} 
          <span v-if="cash.rate_float>0">:</span>
          <span >{{ cash.rate_float }}</span>
        </div>
      </div>
    </div>
   
  </div>

  <el-dialog v-model="dialogFormVisible" title="联系我">
    <el-form :model="form">
      <el-form-item label="公司名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="on" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {getCurrentInstance } from 'vue'
export default {
  name: 'AboutPage',
  props: {
    msg: String
  },
  data(){
    return{
      dialogFormVisible : false,
      formLabelWidth : "140px",
      form : {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      keyRoles:[
        {
          id:1,
          name:"Shelly",
          title:"bussiness",
          description:"Shelly is responsible for bussiness part who has over 10 years experience for business contact, requirements gathering. ",
        },
        {
          id:2,
          name:"Light",
          title:"front-end",
          description:"Light is responsible for front-end part who has over 10 years experience for front-end development. ",
        },
        {
          id:3,
          name:"Jack",
          title:"back-end",
          description:"Jack is responsible for back-end part who has over 10 years experience for back-end development. ",
        }
      ],
      info:"null",
      clickInfo:"null"
    }
  },
  mounted(){
    const { proxy } = getCurrentInstance()
    proxy.$http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(
        (err)=>{
          console.log(err)
        }
      )
  },
  methods:{
    getInfo(){
      this.$http
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.clickInfo = response.data.bpi))
        .catch(
          (err)=>{
            console.log(err)
          }
        )
    }
  },

}
</script>

<style>
.title{
  /* Key Roles */
  position: absolute;
  left: 37px;
  top: 280px;
  width: 216px;
  height: 70px;
  opacity: 1;
    
  /* 中文 / 标题/标题一 */
  /* 样式描述：中文 */
  font-family: Source Han Sans CN;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0px;
    
  color: #3D3D3D;
}
.card{
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

/* 纯白 */
  background: #FFFFFF;

/* 阴影/低阴影 */
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.16);
  margin: 10px;
  width: 600px;
  /* 相对页面横向居中 */
  margin-left: auto;
  margin-right: auto;
  
}

.card-top{
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
  align-self: stretch;

  z-index: 0;
}


.cardtitle{
  font-family: Source Han Sans CN;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0px;

/* 纯黑 */
  color: #000000;

  z-index: 0;
}


.cardcontent{
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;

  color: #1A1A1A;

z-index: 1;
}


.avatar{
  /* 图片 */

/* 自动布局子元素 */
position: static;
left: 0px;
top: 0px;
width: 160px;
height: 176px;
border-radius: 8px;
opacity: 1;
	
z-index: 0;
}


</style>
