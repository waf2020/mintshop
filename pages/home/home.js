// pages/home/home.js
import { getMultData, getProduct} from '../../service/home.js'
console.log('getMultData', typeof(getMultData));
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
    }
  },


  
  

  onLoad(options) {
    console.log('onLoad监听页面加载');

    this._getMultData();
    this._getProduct('pop');
    this._getProduct('sell');
    this._getProduct('new');
    

  },

 

  



  hmyhandlebindtap(e){
    console.log('home:e', e.detail);
  },

  //加载轮播图和推荐数据

  _getProduct(type){
    //获取页码
    const page = this.data.goods[type].page + 1;
    console.log('type,',type);
    getProduct(type,page).then(res => {
      console.log('res===', res);
    })
  },


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
  
    
  
})
