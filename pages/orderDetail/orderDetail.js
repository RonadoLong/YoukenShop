// pages/orderDeatil/orderDeatil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        orderNumber:'DD8888888',
        dateTime:'2018-07-07 16:19:32',
        buyer:'李文亮',
        superior:'广州天河博艺公司',
        express:'已发货',
        titleNmae: '华晨宝马 X1',
        wechatPay:'微信支付',
        status:'已支付',
        goodsCost:'200.00',
        boxFare:'10.00',
        serviceFare:'0.00',
        copeWith:'210.00'
      }
    ],
    itemGoods: [
      {
        descript: '前梁护臂 L',
        code: '13011-58010',
        brand: 'DENSO',
        quilty: '品牌件',
        number: '1',
        money: '130.00'
      },
      {
        descript: '车尾箱加强件RH',
        code: '13011-58010',
        brand: '米其林',
        quilty: '品牌件',
        number: '2',
        money: '380.00'
      }
    ]
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