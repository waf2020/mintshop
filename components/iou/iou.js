// components/iou/iou.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    baitiao: {
      type: Array,
     
    },
    hidebaitiao:{
      type:Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    test:false,
    selectIndex:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //选择单选框选项
    selectCheck(e){
           console.log('e',e.currentTarget.dataset.index);
      let index = e.currentTarget.dataset.index;
      let tempArray = this.data.baitiao;
      for (let i = 0; i < tempArray.length;i++){
        tempArray[i].select=false;
      }
      tempArray[index].select = ! tempArray[index].select
      this.setData({
        baitiao: tempArray,
        selectIndex:index
      })
    },
    //点击x号隐藏白条
    hide_baitiao(){
      this.setData({
        hidebaitiao:true,
        
      })
    },

    //点击立即打白条隐藏白条
    handle_btn_baitiao(){

      //隐藏白条框框
      this.setData({
        hidebaitiao: true
      })

      //将下标传过去
      let index = this.data.selectIndex;
      this.triggerEvent('checkbaitiaodesc', index)
    }
  }
})
