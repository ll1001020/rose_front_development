import request from '@/utils/request'

// 查询价格列表
export function listPrices(query) {
  return request({
    url: '/system/prices/list',
    method: 'get',
    params: query
  })
}

// 查询价格详细
export function getPrices(id) {
  return request({
    url: '/system/prices/' + id,
    method: 'get'
  })
}

// 新增价格
export function addPrices(data) {
  return request({
    url: '/system/prices',
    method: 'post',
    data: data
  })
}

// 修改价格
export function updatePrices(data) {
  return request({
    url: '/system/prices',
    method: 'put',
    data: data
  })
}

// 删除价格
export function delPrices(id) {
  return request({
    url: '/system/prices/' + id,
    method: 'delete'
  })
}
