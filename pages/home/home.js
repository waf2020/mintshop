// pages/home/home.js
import { getMultData, getProduct} from '../../service/home.js'
console.log('getMultData', typeof(getMultData));
Page({
  
 

  /**
   * 组件的初始数据
   */
  data: {

  },
  

  /**
   * 组件的方法列表
   */
  

  onLoad(options) {
    console.log('onLoad监听页面加载');
    getMultData()
   

  },

  onReady() {
    console.log('onReady监听页面初次渲染完成');
  },

  onShow() {
    console.log('onShow监听页面显示');
  },

  onHide() {
    console.log('onHide监听页面隐藏');
  },

  onUnload() {
    console.log('onUnload监听页面卸载');
  }
})
