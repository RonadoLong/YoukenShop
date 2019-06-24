// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    imgs: [],//本地图片地址数组
    picPaths: [],//网络路径
    current: 'tab1',
    // 上传照片
    fileList: [{
     
    },
    ],
    voices: [
      { name: 'NO', value: '不需要', checked: 'true' },
      { name: 'OK', value: '需要' },
    ],
    suppliers: [
      { name: 'PLT', value: '平台指定', checked: 'true'},
      { name: 'SELF', value: '自行推荐' },
    ],
    active: 1,
  },
  radioChange: function (e) {
  },
  onChange(e) {
    const { file } = e.detail
    if (file.status === 'uploading') {
      this.setData({
        progress: 0,
      })
      wx.showLoading()
    } else if (file.status === 'done') {
      this.setData({
        imageUrl: file.url,
      })
    }
  },
  onSuccess(e) {
  },
  onFail(e) {
  },
  onComplete(e) {
    console.log('onComplete', e)
    wx.hideLoading()
  },
  onProgress(e) {
    this.setData({
      progress: e.detail.file.progress,
    })
  },
  onPreview(e) {
    const { file, fileList } = e.detail
    wx.previewImage({
      current: file.url,
      urls: fileList.map((n) => n.url),
    })
  },
  onRemove(e) {
    const { file, fileList } = e.detail
    wx.showModal({
      content: '确定删除？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            fileList: fileList.filter((n) => n.uid !== file.uid),
          })
        }
      },
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