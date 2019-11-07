// pages/home/home.js
import { getMultData, getProduct} from '../../service/home.js'
//console.log('getMultData', typeof(getMultData));
Page({
  
 

  /**
   * 组件的初始数据
   */
  data: {
   banner:[],
    recommend:[],
    goods:{
      pop:{page:0,list:[]},
      sell: { page: 0, list: [] },
      new: { page: 0, list: [] },
    },
    currentGoods:'pop'
  },


  
  

  onLoad(options) {
    console.log('onLoad监听页面加载');

    this._getMultData();
    this._getProduct('pop');
    this._getProduct('sell');
    this._getProduct('new');
    

  },

 

  



  hmyhandlebindtap(e){
   // console.log('home:e', e.detail);
    switch (e.detail){
       case 0:
        this.setData({
          currentGoods:'pop'
        });
        break;
         
      case (1):
        this.setData({
          currentGoods:'sell'
        });
        break;

      case (2):
        this.setData({
          currentGoods:'new'
        });
        break;

    }
  },

  //加载轮播图和推荐数据

  _getProduct(type){
    //获取页码
    const page = this.data.goods[type].page + 1;
    console.log('type,',type);
    getProduct(type,page).then(res => {
    //  console.log('res===', res.data.data.list);
      //获取旧数据
      const oldlist = this.data.goods[type].list
      //将新请求的数据push进数组中
      oldlist.push(...res.data.data.list)
     //定义为有type类型的变量
      const typevalue=`goods.${type}.list`;
      //获取页码，为了方便给它设置值到data中
      const pagevalue = `goods.${type}.page`
      this.setData({
        [typevalue]:oldlist,
        [pagevalue]:page
      })
    })
  },

  onReachBottom(){
     console.log("111111");
    let type = this.data.currentGoods;
    this._getProduct(type);
  },

//获取轮播图和推荐数据
  _getMultData() {
    
    getMultData().then(res => {
    
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      this.setData({
        banner: banners,
        recommend: recommends
      })
      console.log(banners);

    })
  },

  //加载分类数据
  
    //回到顶部

  go_top(){
      console.log("sss");
      wx:wx.pageScrollTo({
        scrollTop: 0,
        duration: 800,
      })
  }
  
})
