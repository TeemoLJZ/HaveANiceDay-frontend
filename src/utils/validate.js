//用户名匹配
export function nameRule(rule,value,callback){
  let reg = /(^[A-Za-z0-9]{3,10}$)/
  if (value === ''){
    callback(new Error('请输入用户名'))
    }else if (!reg.test(value)){
      callback(new Error('请输入3-10位用户名'))
    }else{
      callback()
    }
}

//密码匹配
export function passRule(rule,value,callback){
  // let reg = /^[A-Za-z0-9]{3-10}/
  if (value === ''){
    callback(new Error('请输入密码'))
  // }else if (!reg.test(value)){
  //   callback(new Error('请输入正确密码'))
  }else{
    callback()
  }
}