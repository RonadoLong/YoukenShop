// pages/profile/login/login.js
const App =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 登录成功跳转首页
  gotoLogin: function(e) {
    // let path = e.currentTarget.dataset.path;
    // wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
    //   url: '/pages/home/index'
    // })
    App.HttpService.getCodeByPhone("18826073368").then(res => {
      console.log(res)
    })
  },

  // 跳转注册页面 
  gotoRegister: function (e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: '/pages/register/register'
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