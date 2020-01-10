// 用户登录请求模块
import request from '@/utils/request'
export const login = data => {
  return request({
    // 请求中常用的几个参数
    // 这里是 method,不是methods
    method: 'POST', // api 接口文档中 用户认证 那块注明的
    url: '/app/v1_0/authorizations',

    // 这里不需要加headers,因为axios会自动加上
    // headers: { // 接口文档中写明的  当参数中有 特殊符号时,要放引号字符串里面
    //  'Content-Type': 'application / json'
    // }, // 请求头参数
    // params: {}, // query 查询参数
    data// body 请求体参数   data=data
  })
}
export const getCode = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`

  })
}
