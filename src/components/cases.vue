<template>
  <div class="case">
  <el-row :gutter="20" justify="top">
    <el-col :span="16"><div class="grid-content ep-bg-purple" />
      <p class="caseTitle">贝加尔湖畔</p>
      <p class="caseAuthor">李健</p>
      <div class="caseContent">
        <p>在我的怀里，在你的眼里，那里春风沉醉，那里绿草如茵。</p>
        <p>月光把爱恋，洒满了湖面，两个人的篝火，照亮整个夜晚</p>
      </div>   
    </el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <img src="../components/img/C1.jpg" class="titleImage">
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
    <div class="contentImg">
      <img src="../components/img/C2.jpg" style="width=100px">
    </div>
    <p class="caseTitle">故乡山川</p>
    <div class="caseContent">
      <p>我心中的世界竟是如此遥远</p>
      <p>不知不觉中已离家千万里</p>
    </div>
    <p class="caseContent"></p>
    </el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />444</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />555</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />666</el-col>
  </el-row>
  <div class="customertable">
    <el-button @click="dialogFormVisible = true">新增</el-button>
    <el-table :data="customerlist" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="phone" label="电话" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >修改</el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="新增">
      <el-form :model="addform">
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="addform.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="addform.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
        <el-input v-model="addform.address" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addcustomer" >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { listcustomers } from "@/api/api"
export default {
  name: 'casesPage',
  data(){
    return{
      customerlist:[],
      addform:{
        name:'',
        phone:'',
        address:'',
    },
    dialogFormVisible: false,
  }
},
  mounted()
  {
      listcustomers()
      .then(response => (
        this.customerlist= response.data.retlist
      ))
      .catch(error => {
        console.log(error)
      })
  },
  methods:{
    addcustomer() {
      axios
        .post('/mgr/customers/', {
          action: 'add_customer',
          data:{
            name:this.addform.name,
            phone:this.addform.phone,
            address:this.addform.address,
          }
        })
        .then(response => {
          this.dialogFormVisible = false
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.case{
  top: 0;
}
.el-row {
  margin-bottom: 20px;
  margin-top: 0px;
  top: 0;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.caseTitle{
/* 字体加粗，24px */
text-align: center;
font-size: 24px;
font-weight: bold;
}
.caseAuthor{
  text-align:center;
}
.caseContent{
  text-align:center
}
.titleImage
{
  width: 200px;
}
.contentImg{
  text-align: center;
}
</style>
