
import { baseUrl, timeout} from './config.js'
export default function request(options){
  return new Promise((resolve,reject)=>{
     wx.request({
       url:baseUrl + options.url,
       method:options.method || 'get',
       data:options.data || {},
       timeout,
       success(res){
         resolve(res)
       },
       fail(err){
         reject(err);
       }
     })
  })
}