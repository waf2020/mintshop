
import { getCategoryList, getCategoryListNext} from '../../utils/category.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    page:0,
    size:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options.text);
    getCategoryList().then(res=>{
      //console.log('resss',res);
      this.setData({
        datalist:res.data
      })
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
     console.log("触底啦啦啦！！",this);
     let page=this.data.page;
     this.setData({
       page:++page
     })
     let data={
        page:this.data.page,
        size: this.data.size
     }
     console.log('page',page);
    getCategoryListNext(data).then(res=>{
      console.log('res===',res);
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})