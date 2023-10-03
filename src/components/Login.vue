<template>
  <div class="Login">
    <el-card class="login-card">
      <div style="text-align:center;margin: 10px">
        <span style="font-size:20px;">欢迎使用</span>
      </div>
      <div class="login-aera" style="text-align:center">
        <el-form
        ref="formLabelAlign"
        :model="formLabelAlign"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        >
        <el-form-item label="用户名" prop="username">
          <br/>
          <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <br/>
          <el-input v-model="formLabelAlign.password" />
        </el-form-item>
      <el-form-item class="Loginbutton" style="text-align:center">
        <el-button  type="primary" @click="login" >登录</el-button>
      </el-form-item>  
      </el-form>
      </div>
  </el-card>
  </div>
</template>

<script>
import {nameRule, passRule } from '../utils/validate.js'
import {setToken} from '../utils/setToken'
import {login} from '../api/api.js'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data()
  {
    //****未封装的用户名密码规则校验 */
    // const validateName = (rules,value,callback)=>{
    //   let reg = /(^[A-Za-z0-9]{3,10}$)/
    //   if (value === ''){
    //     callback(new Error('请输入用户名'))
    //   }else if (!reg.test(value)){
    //     callback(new Error('请输入3-10位用户名'))
    //   }else{
    //     callback()
    //   }
    // }
    // const validatePass = (rules,value,callback)=>{
    //   let reg = /^[A-Za-z0-9]{3-10}/
    //   if (value === ''){
    //     callback(new Error('请输入密码'))
    //   }else if (!reg.test(value)){
    //     callback(new Error('请输入正确密码'))
    //   }else{
    //     callback()
    //   }
    // }
    // ***********************************************
    return{
      formLabelAlign: {
        username:'',
        password:'',
      },
      rules:{
        username:[{validator: nameRule, trigger: 'blur'}],
        password:[{validator: passRule, trigger: 'blur'}]
      }
    }
  },
  methods:{
    login(formLabelAlign){
      this.$refs.formLabelAlign.validate((valid)=>{
        if(valid){
        // 未经封装的login接口
        //   console.log(this.form)
        //   axios.
        //   post('mgr/signin/',this.formLabelAlign,{headers:{ 'Content-type': 'application/x-www-form-urlencoded'}})
        //   .then(response => {
        //     if(response.data.ret == 0){
        //       this.$router.push({path:'/index'}),
        //       this.$message({
        //         message:response.data.msg,
        //         type:'success'
        //       })
        //     }
        //     else{
        //       this.$message({
        //       message: response.data.msg,
        //       type: 'error'
        //       })
        //     }
        //   })
        // .catch(error => {
        //   console.log(error)
        // })
        // *************结束************

        // 经过封装的login接口
        console.log(this.formLabelAlign)
        login(this.formLabelAlign)
        .then(response => {
            if(response.data.ret == 0){
              setToken('username',response.data.username)
              setToken('token',response.data.token)
              this.$router.push({path:'/index'}),
              this.$message({
                message:response.data.msg,
                type:'success'
              })
            }
            else{
              this.$message({
              message: response.data.msg,
              type: 'error'
              })
            }
          })
        .catch(error => {
          console.log(error)
        })
        }else{
          console.log(this.formLabelAlign)
        }
      })
    }
  }
}
</script>

<style>
.login-card{
  width: 400px;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
