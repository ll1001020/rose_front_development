import request from '@/utils/request'

// 查询品种列表
export function listVarieties(query) {
  return request({
    url: '/system/varieties/list',
    method: 'get',
    params: query
  })
}

// 查询品种详细
export function getVarieties(id) {
  return request({
    url: '/system/varieties/' + id,
    method: 'get'
  })
}

// 新增品种
export function addVarieties(data) {
  return request({
    url: '/system/varieties',
    method: 'post',
    data: data
  })
}

// 修改品种
export function updateVarieties(data) {
  return request({
    url: '/system/varieties',
    method: 'put',
    data: data
  })
}

// 删除品种
export function delVarieties(id) {
  return request({
    url: '/system/varieties/' + id,
    method: 'delete'
  })
}
