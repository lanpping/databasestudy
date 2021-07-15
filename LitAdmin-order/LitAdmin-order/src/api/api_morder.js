/**
 * 订单相关api
 */

import * as API from '.'

export default {

  //查询获取order列表(通过page分页)
  findordList: params => {
    return API.GET('/api/v1/morders', params)
  },

   //查询获取一条order信息
   findById: id => {
    return API.GET(`/api/v1/morders/${id}`)
  },

  add: params => {
    return API.POST(`/api/v1/morders`, params)
  },
  update: (id, params) => {
    return API.PUT(`/api/v1/morders/${id}`, params)
  },

  //单个删除order
  remove: id => {
    return API.DELETE(`/api/v1/morders/${id}`)
  },

  //批量删除，传ids数组
  removeBatch: (ids) => {
    return API.DELETE(`/api/v1/morders/batch/${ids}`)
  }
}