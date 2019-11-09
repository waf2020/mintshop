// pages/detail/detail.js

import { getItemDetail } from '../../utils/category.js';


            
Page({

  /**
   * 页面的初始数据
   */
  data: {
      partData:[],
      baitiao:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self=this;
  wx.showLoading({
    title: '加载中啦~',
  })
    //console.log('options', options);
    let id = options.id;
    getItemDetail().then(res=>{
      let resule="";
      console.log('res===',res);
      res.data.forEach(list=>{
        if(list.partData.id==id){
         resule=list
        }
      })
      console.log('resule', resule);
      self.setData({
        partData:resule.partData
      })

      console.log('partData', self.data.partData);

      wx.hideLoading()
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})