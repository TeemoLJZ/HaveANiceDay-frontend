import service from "../service";

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

export function listcustomers(){
  return service({
    method:'get',
    url:'mgr/customers/?action=list_customer'
  })
}

export function listillus(){
  return service({
    method:'get',
    url:'illu/pic/?action=list_illu'
  })
}