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

//获取插画列表
export function listillus(pagesize,pagenum,keywords,source,feature,type){
  return service({
    method:'get',
    url:'illu/pic/?action=list_illu',
    params:{
      pagesize,
      pagenum,
      keywords,
      source,
      feature,
      type
    }
  })
}

// 获取插画详情
export function getIlluDetails(id){
  return service({
    method:'get',
    url:'illu/pic/',
    params:{
      action : 'get_illu_detail',
      id
    }

  })
}

//以下为练习接口


//获取客户信息
export function listcustomers(action,pagesize,pagenum,keywords){
  return service({
    method:'get',
    url:'mgr/customers/',
    params:{
      action,
      pagesize,
      pagenum,
      keywords
    }
  })
}

//新增客户信息
export function addCustomers(name,phone,address){
  return service({
    method:'post',
    url:'mgr/customers/',
    data:{
      action:'add_customer',
      data:{
        name,
        phone,
        address
      }
    }
  })
}

//修改客户信息
export function modifyCustomers(id,name,phone,address){
  return service({
    method:'post',
    url:'mgr/customers/',
    data:{
      action:'modify_customer',
      id,
      newdata:{
        name,
        phone,
        address
      }
    }
  })
}
