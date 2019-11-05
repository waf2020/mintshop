// components/m-contorl/m-contorl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list:{
        type:Array
      }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlebindtap(e){
    console.log("e",e.currentTarget.dataset.index);
      const templ = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: templ
    });

      this.triggerEvent('myhandlebindtap', templ)
    }
  }
})
