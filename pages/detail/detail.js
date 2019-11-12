// pages/detail/detail.js

import { getItemDetail } from '../../utils/category.js';


            
Page({

  /**
   * 页面的初始数据
   */
  data: {
      partData:[],
      baitiao:[],
      baitiaodesc:"【白条支付】首单享立减优惠",
      count:1,
      hidebaitiao:true
      
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
      //console.log('res===',res);
      res.data.forEach(list=>{
        if(list.partData.id==id){
         resule=list
        }
      })
      console.log('resule', resule);
      self.setData({
        partData:resule.partData,
        baitiao:resule.baitiao
      })
      console.log('baitiao', self.data.baitiao);

     // console.log('partData', self.data.partData);

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

  },

  //监听白条的点击
  handlebaitiao(){
   
    this.setData({
      hidebaitiao:false
    })
    //console.log('hidebaitiao', this.data.hidebaitiao)
  },

  //动态切换支付方式
  handledesc(e){
  //   console.log('e',e)
  //  console.log('你选址了不同的支付方式',e.detail);
  //   console.log('this.data.baitiao[e.detail].desc', this.data.baitiao[e.detail].desc);
    let desc = this.data.baitiao[e.detail].desc;
    this.setData({
      baitiaodesc: desc
    })
  }
})