// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        brand: '欧系 奥迪 华晨宝马 X1',
        dateTime:'2018-07-07 16:19:32',
        brandBumber: '111011-31060',
        buyer: '广州霹雳贝贝公司',
        purchaser:'李文亮',
        number: '10',
        orderState: '未支付',
        allMoney: '128.00',
        time:'00:29:22'
      },
      {     
        brand: '欧系 奥迪 进口奥迪 A8',
        dateTime:'2018-07-07 16:19:32',
        brandBumber: '111011-31060',
        buyer: '白云德威汽配有限公司',
        purchaser:'王春华',
        number: '3',
        orderState: '已支付',
        wechatPay: '微信支付',
        unshipped: '未发货',
        allMoney: '533.00',
        
      },

    ]
  },
  gotoDetail: function (e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: '/pages/orderDetail/orderDetail'
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