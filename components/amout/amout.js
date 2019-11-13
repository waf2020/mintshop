// components/amout/amout.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     count:{
       type:Number,
       value:1
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //自增
    increment(){
      
      let counts=this.data.count;
       counts=(counts >200 ? 200: ++counts);
      //console.log('counts', counts);
      this.setData({
        count: counts
      })
      //console.log('counts', this.data.counts);
      this.triggerEvent('mycountcheck', this.data.count)
    },

  //自jian
    decrement(){
      
      let counts = this.data.count;
      counts = counts <2 ? 1 : --counts;
      
      this.setData({
        count: counts
      });
      //console.log('counts', this.data.counts);
      this.triggerEvent('mycountcheck', this.data.count)

      
    },

    //监听input值
    getInput(e){
       
         console.log('e',e.detail.value);
      this.setData({
        count: e.detail.value
      });
      this.triggerEvent('mycountcheck', this.data.count);
    }
  }
})
