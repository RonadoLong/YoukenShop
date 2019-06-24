// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company:'广州艺术',
    name:'张先生',
		items: [
      {
        icon: '../../assets/images/iconfont-help.png',
        text: '我的询价单',
        path: ''
      },
      {
        icon: '../../assets/images/iconfont-order.png',
        text: '我的订单',
        path: '/pages/myOrder/myOrder'
      },
      {
        icon: '../../assets/images/iconfont-addr.png',
        text: '收获地址',
        path: '',
      },
      {
        icon: '../../assets/images/iconfont-kefu.png',
        text: '我的售后',
        path: '',
      },
    ],

  },
  gotoDetail: function (e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: ''
    })
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

  gotoDetail: function(e){
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: path
    })
  },
  
  returnBack: function (e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: '/pages/login'
    })
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