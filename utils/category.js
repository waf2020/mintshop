import {request} from './network.js'

export function getCategory(){
  return request({
    url: '/api/profiles/productions'
  })
    
  
}