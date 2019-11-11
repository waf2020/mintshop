
import { getCategoryList, getCategoryListNext} from '../../utils/category.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    page:1,
    size:5,
    noData:false,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

 wx:wx.showLoading({
   title: 'loading...',
   
 }),

 wx.setNavigationBarTitle({
   title: options.text,
 })
  
    getCategoryList().then(res=>{
      //console.log('resss',res);
      this.setData({
        datalist:res.data,
        
      })
      wx.hideLoading();
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
    console.log('下拉');
    // wx.startPullDownRefresh();
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    

    // getCategoryList().then(res => {
    //   //console.log('resss',res);
    //   this.setData({
    //     datalist: res.data
    //   })
      
    // })
  },

  /**
   * 页面上拉触底事件的处理函数,这里有个兼容性问题，当
   * 内容没有占满屏幕的时候就不能触发omReachBottom事件
   */
  onReachBottom: function () {
    const self=this;
     //console.log("触底啦啦啦！！",this);
    let page = self.data.page;
    self.setData({
       page:++page
     })
    //  let data={
    //     page:this.data.page,
    //     size: this.data.size
    //  }
    
     console.log('page',page);
    let templist = self.data.datalist;
    wx.request({
      url: 'https://enigmatic-island-47099.herokuapp.com/api/profiles/productionsList' + '/' + self.data.page + '/' + self.data.size,
      success(res){
        if(res.data.length=='' || '[]'){
          self.setData({
            noData:true
          })
        }
        //console.log('this', self)
        templist.push(...res.data);
        //console.log('templist', templist)
        self.setData({
          datalist:templist
        })
      }
    })
    // getCategoryListNext(data).then(res=>{
    //   if(res.data.length==0){
    //     self.setData({
    //       noData:true
    //     })
    //   }else{
    //     templist.push(...res.data);
    //     this.setData({
    //       datalist: templist
    //     })

    //   }
     
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //商品详情页
  handleItemdetails(e){
      console.log('e',e);
      let names='zaadd';
      wx.navigateTo({
        url: '/pages/detail/detail?id='+ e.currentTarget.dataset.id+'&name=' + names,
        
      })
  }
})