/**
 * 用户表相关api
 */

 import * as API from '.'

 export default {
 
   //查询获取yonghu列表(通过page分页)
   findyonList: params => {
     return API.GET('/api/v1/yonghus', params)
   },
 
    //查询获取一条order信息
    findById: id => {
     return API.GET(`/api/v1/yonghus/${id}`)
   },
 
   add: params => {
     return API.POST(`/api/v1/yonghus`, params)
   },
   update: (id, params) => {
     return API.PUT(`/api/v1/yonghus/${id}`, params)
   },
 
   //单个删除order
   remove: id => {
     return API.DELETE(`/api/v1/yonghus/${id}`)
   },
 
   //批量删除，传ids数组
   removeBatch: (ids) => {
     return API.DELETE(`/api/v1/yonghus/batch/${ids}`)
   }
 }