<template>
  <div class="login">
    <a href="target"></a>
    <img src="../assets/login-back.png" alt="" class="back"> 
    <div class="login-block">
      <img src="../assets/login-title.png" alt="" class="title">  
      <el-card class="login-card" id="logincard">
        <div class="login-aera" style="text-align:center">
          <el-form
          ref="formLabelAlign"
          :model="formLabelAlign"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          label-position="top"
          size="large"
          >
          <el-form-item label="User Name" prop="username">
            <el-input v-model="formLabelAlign.username" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="formLabelAlign.password" />
          </el-form-item>
        <el-form-item class="Loginbutton">
          <el-button  type="success" @click="login"  style="width:100%">Login</el-button>
        </el-form-item>  
        </el-form>
        </div>
      </el-card>
    </div>  
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
              this.$router.push({path:'/illustration'}),
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
    },
    // 页面加载滚动
    // getLogin(){
    //   window.scrollTo({
    //     top: 100,
    //     left:230,
    //     behavior:'smooth'
    //   })
    // }
  },
}
</script>

<style lang="scss" scoped>
.login{
  .back{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    opacity: 1;
  }
  .login-block{
    position: absolute;
    z-index: 1;
    left: 36%;
    top: 30%;

    .title{
    width: 400px;
    height: 60px;
    opacity: 1;    
  }
  .login-card{
/* 矩形 6 */
    width: 364px;
    height: 304px;
    border-radius: 8px;
    opacity: 1;
      
    background: #FFFFFF;
      
    box-shadow: 0px 5px 10px 5px rgba(61, 61, 61, 0.11);
    

}
  }

  
}

</style>
