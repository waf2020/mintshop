import { domain, timeout} from './config.js'
console.log('domain', domain);

export function request(options){

return new Promise((resolve,reject)=>{
  wx.request({
    url: domain + options.url,
    data: options || {},

    method: options.method ||'GET',
   
    success(res){
      resolve(res);
    } ,
    fail(error) {
      reject(res);
    },
    
  })
})
}