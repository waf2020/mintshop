// components/buy/buy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidebuy:{
      type:Boolean,
      value:true
    },
    iteminfo:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counts:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlehidebuy(){
      this.setData({
        hidebuy:true
      })
    },
    //监听数量的改变
    handlecountcheck(e){
       
       let temp=e.detail;
       this.setData({
         counts: temp
       })
    },
   
   //加入购物车
    jioncart(){
      //设置数量影藏
      this.setData({
        hidebuy: true
      })

      this.triggerEvent('mycounts', this.data.counts)
    }
  }
})
