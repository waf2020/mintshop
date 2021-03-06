// pages/category/category.js

import { getCategory} from '../../utils/category.js'
console.log('getCategory', typeof (getCategory));
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems:[],
    navRightItems:[],
    currentIndex:0
  },

//监听分类点击
  handlebindtap(e){
     
     this.setData({
       currentIndex: e.currentTarget.dataset.index
     })

     
     
  },

//点击小分类，获取商品信息

  handle_category_item(e){
        console.log(e.currentTarget.dataset.text);
    let text = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '/pages/list/list?text=' + text
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let self=this;
    getCategory().then(res=>{
      console.log('res',res.data);
      self.setData({
        navLeftItems: res.data.navLeftItems,
        navRightItems: res.data.navRightItems

      });
    
      console.log('navRightItems', this.data.navRightItems[this.data.currentIndex]);
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