




// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       cartArray:[],
      paycount:0,
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
    this.handlepaymoney(); //每次改变件数就要算钱
    
    
  },

  //商品item中的点击切换事件 ，包括结算
  checkimageselect(e){
    const self=this;
    let index = e.currentTarget.dataset.index; //当前索引值
    let id = e.currentTarget.dataset.id;   //id
    let arraylist = self.data.cartArray;  //购物车数据
    let selectitem = self.data.selectitem //选中数组

   
    console.log('index',index);
    self.data.cartArray[index].select = !(self.data.cartArray[index].select);
    self.setData({
      cartArray: self.data.cartArray
    })
    let temp = self.data.cartArray[index].select;
    if (temp){                   //如果为选中的状态，则添加选中的数组中
      arraylist.forEach((value,item)=>{
        //console.log('value',value);
        value.id == id ? selectitem.push(value) :""
      })
      self.setData({
        selectitem: selectitem
      })
    }
    else{                     //非选中，在选中数组中根据id查找索引，将其删除
      
      let tempArray=Array.from(selectitem);
      console.log('tempArray', tempArray instanceof Array);
      tempArray.forEach((value,item)=>{
        console.log('value.id', value.id);
        console.log('tempArray', tempArray);
        if(value.id==id){
          tempArray.splice(item,1);
        }
      });
      console.log('tempArray', tempArray);
      self.setData({
        selectitem: tempArray
      })
      }
    self.handlepaycount();
    self.handlepaymoney(); //总金额
    self.checkAllselect() ;//判断是否为全选

      // arraylist.forEach((value, item) => {
      //   console.log('item',item);
      //   //console.log('value',value);
      //    if(value.id==id){
      //      selectitem.splice()
      //    }
      // })
    
    

    // let temp = this.data.cartArray[index].select;
    // let sum = parseInt(this.data.cartArray[index].price) * (this.data.cartArray[index].total);
    // let oldsum = this.data.countsmoney + sum;
    //被选中了
  //   if (temp){
     
  //     console.log('oldsum',oldsum);
  //    this.setData({
  //     countsmoney: oldsum
  //     })
    
  //  }else if(!temp){
  //     this.setData({
  //       countsmoney: this.data.countsmoney - sum
  //     })  
  //  }
  },
  //全选功能
  allselect(){
    let cartArray = this.data.cartArray;
   let selectitem =this.data.selectitem; //选中数组
    const s =new Set();  //临时数组用于存选中item

    selectitem.forEach((value,item)=>{
      s.add(value);
    })

    this.data.allselectd = !this.data.allselectd;
   
    if (this.data.allselectd==true){
      cartArray.forEach((value,item)=>{
        value.select=true;
        s.add(value);
      })
      //console.log('s',s);
      let temparray=Array.from(s);  // 将set转为数组
      this.setData({
        selectitem: temparray
      })
      //console.log('selectitem', this.data.selectitem);

    }else{
      cartArray.forEach((value, item) => {
        value.select = false;
      })
      this.setData({      //取消全选  选中数组置为空
        selectitem: []
      })
    }
    
    console.log('s', s);
    this.setData({
      cartArray: cartArray,
      allselectd: this.data.allselectd ,
      
    })

    this.handlepaycount(); //获取件数
    this.handlepaymoney() ; //总金额
   
  },

  //获取件数
  handlepaycount(){
    let length = this.data.selectitem.length;
    console.log('length', this.data.selectitem.length);
    this.setData({
      paycount: length
    })
  },

//总计支付金额
  handlepaymoney() {
    let money=0;
    let list=this.data.selectitem;
    list.forEach(value=>{
      money += value.price * value.total;
    })

    this.setData({
      countsmoney:money
    })
  },

//判断是否为全选
  checkAllselect(){
    let ischeck=true;
    this.data.cartArray.forEach(vale=>{
       if(vale.select==false){
         ischeck=false;
       }
    })

    ischeck==false ? this.setData({
      allselectd:false
    }) :""



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //console.log("执行了cart的onload方法哟");
   
           
   
    
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
    console.log("type",typeof(this.data.selectitem));
    const self = this;

    wx.getStorage({
      key: 'cartinfo',
      success: function (res) {
        let arr = res.data;
        
        arr.forEach((value,item)=>{
           value.select=false,
           value.istouch=true
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
      });

      //离开页面是否保存选择状态
      self.setData({
        allselectd:false,
        countsmoney:0.00

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