// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       cartArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("执行了cart的onload方法哟");
   
           
   
    
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
    const self = this;

    wx.getStorage({
      key: 'cartinfo',
      success: function (res) {
        let arr = res.data;
        console.log('arr', arr)
        self.setData({
          cartArray: arr
        })

        let length = self.data.cartArray.length;
        console.log('cartArray', self.data.cartArray.length);
        length > 0 ?
          wx.setTabBarBadge({
            index: 2,
            text: String(length)
          }) : wx.removeTabBarBadge({
            index: 2
          })


      }
    })
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