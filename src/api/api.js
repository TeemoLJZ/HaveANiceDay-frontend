import service from "../service";

// 登录接口
export function login(data){
  return service({
    method:'post',
    url:'mgr/signin/',
    data:data,
    headers:{
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
}

//获取客户列表
export function listcustomers(){
  return service({
    method:'get',
    url:'mgr/customers/?action=list_customer'
  })
}

//获取插画列表
export function listillus(){
  return service({
    method:'get',
    url:'illu/pic/?action=list_illu'
  })
}