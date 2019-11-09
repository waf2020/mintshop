import {request} from './network.js'

export function getCategory(){
  return request({
    url: '/api/profiles/productions'
  })
    
  
}

//获取分类点进去后的页面
export function getCategoryList() {
  return request({
    url: '/api/profiles/productionsList'
  })
}

//分类详情页上拉加载更多
export function getCategoryListNext(o) {
  return request({
    url: '/api/profiles/productionsList',
    data:{
      page:o.page,
      size:o.size
    }
  })


}

export function getItemDetail() {
  return request({
    url: '/api/profiles/productionDetail'
  })
}