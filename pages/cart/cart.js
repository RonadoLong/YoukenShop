// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:'0',
    activeNames1: ['1'],
    activeNames2:['1'],
    checkedSign: '',//单个选择
    checkedAll: '',//按类选择
    bottomChecked:'',//全选
    carTitle:[
      {
        titleName: '宝马5系 2010款 520Li 领先版',
      }
    ],
    carTitle2: [
      {
        titleName: '宝马5系 2010款 520Li 领先版',
      }
    ],
    shopping:[
      {
        imageURL: '/assets/images/iconfont-list-active.png',
        goodsTitle: '发动机组及柱塞',
        descript: '原厂件',
        money: '150.00',
        shopcar: '加入购物蓝',
      },
      {
        imageURL: '/assets/images/iconfont-list-active.png',
        goodsTitle: '发动机组及柱塞',
        descript: '原厂件',
        money: '150.00',
        shopcar: '加入购物蓝',
      }
    ],
    shopping2: [
      {
        imageURL: '/assets/images/iconfont-list-active.png',
        goodsTitle: '① 发动机组及柱塞',
        descript: '原厂件',
        money: '暂无价格请询价',
        shopcar: '加入购物蓝',
      },
    ],
    selected:'全选',
  },
  onChangeTab1(event) {
    this.setData({
      activeNames1: event.detail
    });
  },
  onChangeTab2(event) {
    this.setData({
      activeNames2: event.detail
    });
  },
  // tab切換
  onChangeTab(event){
   
  },
  changeCheckAll(event) {
    this.setData({
      checkedAll: event.detail
    });
  },
  changeCheckSign(event){
    this.setData({
      checkedSign: event.detail
    });
  },
  bottomCheckAll(event) {
    this.bottomChecked == true ? '取消全选' : '全选'
    this.setData({
      bottomChecked: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})