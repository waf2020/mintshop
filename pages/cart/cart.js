// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       cartArray:[],
      paymoney:0,
    countsmoney:0.00,
    allselectd:false,
    selectitem:[]
  },
//监听input值得改变
  chenckcartupdata(e){
       //console.log('e',e.detail);
       
  },
//监听自增自减值得改变
  checkcartdefaule(e){
    let index = e.currentTarget.dataset.index;
    let count = e.detail;
    this.data.cartArray[index].total = count;
    this.setData({
    cartArray: this.data.cartArray
    })
    
  },

  //商品item中的点击切换事件 ，包括结算
  checkimageselect(e){
    let index = e.currentTarget.dataset.index;
    console.log('index',index);
    this.data.cartArray[index].select = !(this.data.cartArray[index].select);
    this.setData({
      cartArray:this.data.cartArray
    })

    let temp = this.data.cartArray[index].select;
    let sum = parseInt(this.data.cartArray[index].price) * (this.data.cartArray[index].total);
    let oldsum = this.data.countsmoney + sum;
    //被选中了
    if (temp){
     
      console.log('oldsum',oldsum);
     this.setData({
      countsmoney: oldsum
      })
    
   }else if(!temp){
      this.setData({
        countsmoney: this.data.countsmoney - sum
      })
      
   }
  },
  //全选功能
  allselect(){
    this.data.allselectd = !this.data.allselectd;
    let cartArray = this.data.cartArray;
    if (this.data.allselectd==true){
      cartArray.forEach((value,item)=>{
        value.select=true
      })
    }else{
      cartArray.forEach((value, item) => {
        value.select = false
      })
    }
    this.setData({
      cartArray: cartArray,
      allselectd: this.data.allselectd 
    })
   
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
        
        arr.forEach((value,item)=>{
           value.select=false
        })
        console.log('arr', arr)
        self.setData({
          cartArray: arr
        })

        let length = self.data.cartArray.length;
        
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
      const self=this;
      let temp=self.data.cartArray;
      wx.setStorage({
        key: 'cartinfo',
        data: temp,
      })
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