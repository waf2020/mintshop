import request from './network.js'
export function getMultData(){
 return request({
   url: '/home/multidata'
})

}

export function getProduct(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}