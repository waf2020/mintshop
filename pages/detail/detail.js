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
      count:1,           //已选多少件
      hidebaitiao:true,  //是否影藏白条
      hidebuy:true ,    //是否隐藏
      cartcount:0
      
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
    wx.getStorage({
      key: 'cartinfo',
      success: function(res) {
        self.setBage(res.data);
      },
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
  },
  
  //弹出已选框
  handlecounts(e){
     this.setData({
       hidebuy:false
     })
    // console.log('this.data.hidecount', this.data.hidebuy)
  },

  //监听已选数量的该表
  handleCounts(e){
      //console.log('eee',e.detail);
      this.setData({
        count: e.detail
      })
  },

//加入购物车
  handlecart(){
    const self=this;
    //console.log("加入购物车");
    wx.getStorage({
      key: 'cartinfo',
      success: function(res) {
        let cartArray = res.data; //购物车数据
        let partlist = self.data.partData //当前数据
        let tempId = partlist.id;  //当前ID
        
        let ifEXIT=false;
        for (let i = 0; i < cartArray.length;i++){
          if (cartArray[i].id == tempId){
            //console.log('相等');
            //console.log('cartArray[i].id', cartArray[i].id);
            //console.log('tempId', tempId);
            let count = self.data.count;
            cartArray[i].total += count;
          //  console.log('cartArray[i].total', cartArray[i].total);
            ifEXIT=true;
            
          }

          wx.setStorage({
            key: 'cartinfo',
            data: cartArray,
          })
         
        }
        

        if (!ifEXIT){
          //console.log("没有相同");
          partlist.total = self.data.count;
         // console.log('partlist.total', partlist.total);
          cartArray.push(partlist);
          wx.setStorage({
            key: 'cartinfo',
            data: cartArray,
          })

        }

        self.setBage(cartArray);

        // cartArray.forEach((value,item)=>{
        //   if (value.id == tempId){
        //      console.log('相等');
        //     let count = self.data.count; //获取当前数量
        //     value.total += count ;         //修改购物车该商品数量
        //     console.log('value.total', value.total);
        //     }
        //     else{
        //      console.log('购物车没有该商品');
        //     partlist.total = self.data.count
        //     cartArray.push(partlist);

          
        //     }
        //   wx.setStorage({
        //     key: 'cartinfo',
        //     data: cartArray,
        //   })
        //  })

      },
      fail(){
        //console.log("我没有数据~");
        //console.log('self', self);
        let cartarray = [];
        self.data.partData.total = self.data.count;  //获取当前数量 加入到partData.total中
        //console.log('self.data.partData.total', self.data.partData.total);

        cartarray.push(self.data.partData); 
        
         wx.setStorage({
           key: 'cartinfo',
           data: cartarray,
         })
        self.setBage(cartarray);
      }
    })
  },
  setBage(arr){
     this.setData({
       cartcount: arr.length
     })
  },
  clickcart(){
   
     wx.switchTab({
       url: '/pages/cart/cart',


     })

  }
  

 
})