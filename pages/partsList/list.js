// pages/partsList/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'tab1',
    options1: [
      {
        value: 'menu1',
        label: '一汽奥迪',
        isLeaf: false,
      },
      {
        value: 'menu2',
        label: '一汽奥迪A6',
        isLeaf: false,
      },
      {
        value: 'menu3',
        label: '一汽奥迪A4L',
        isLeaf: false,
      },
    ],
    value1: [],
    options2: [
      {
        value: 'menu1',
        label: '奥迪',
        isLeaf: false,
      },
      {
        value: 'menu2',
        label: '宝马',
        isLeaf: false,
      },
      {
        value: 'menu3',
        label: '奔驰',
        isLeaf: false,
      },
    ],
    value2: [],
    options3: [
      {
        value: 'menu1',
        label: '1.5T',
        isLeaf: false,
      },
      {
        value: 'menu2',
        label: '2.5T',
        isLeaf: false,
      },
      {
        value: 'menu3',
        label: '2.5T',
        isLeaf: false,
      },
    ],
    value3: [],
    goodsItem:[
      {
        imageURL:'/assets/images/iconfont-list-active.png',
        goodsTitle:'美孚 全合成机油 SN级',
        descript:'0W-40',
        money:'150.00',
        shopcar:'加入购物蓝',
        brand:'壳牌',
        volume:'月售1169'
      },
      {
        imageURL: '/assets/images/iconfont-list-active.png',
        goodsTitle: '美孚 全合成机油 SN级',
        descript: '0W-40',
        money: '150.00',
        shopcar: '加入购物蓝',
        brand: '壳牌',
        volume: '月售1169'
      },
    ],
    itemswitch:[
      {
        imageURL: '/assets/images/iconfont-list-active.png',
        goodsTitle: '美孚 全合成机油 SN级',
        descript: '0W-40',
        money: '150.00',
        shopcar: '加入购物蓝',
        brand: '壳牌',
        volume: '月售1169'
      },
    ],
    items: [
      {
        type: 'radio',
        label: '综合排序',
        value: 'updated',
        children: [{
          label: '高',
          value: 'desc',
        },
        {
          label: '低',
          value: 'asc',
        },
        ],
        groups: ['001'],
      },
      {
        type: 'radio',
        label: '筛选品牌',
        value: 'updated',
        children: [{
          label: '品牌1',
          value: 'desc',
        },
        {
          label: '品牌2',
          value: 'asc',
        },
        ],
        groups: ['002'],
      },
      {
        type: 'filter',
        label: '筛选车型',
        value: 'filter',
        children: [{
          type: 'checkbox',
          label: '请选择',
          children: [
          {
          type: 'checkbox',
          label: '奔驰',
          value: '11',
          },
          {
            type: 'checkbox',
            label: '奥迪',
            value: '22',
          },
          {
            type: 'checkbox',
            label: '特斯拉',
            value: '33',
          },
          {
            type: 'checkbox',
            label: '宝马',
            value: '44',
          },
          {
            type: 'checkbox',
            label: '大众',
            value: '55',
          }
          ],
          groups: ['001', '002', '003'],
          }
        ]
      },
    ],
    
  },
  onOpen1() {
    this.setData({ visible1: true })
  },
  onClose1() {
    this.setData({ visible1: false })
  },
  onChange1(e) {
    this.setData({ value1: e.detail.value, title1: e.detail.done && e.detail.options.map((n) => n.label).join('/') })
  },
  onOpen2() {
    this.setData({ visible2: true })
  },
  onClose2() {
    this.setData({ visible2: false })
  },
  onChange3(e) {
    this.setData({ value2: e.detail.value, title2: e.detail.done && e.detail.options.map((n) => n.label).join('/') })
  },
  onOpen3() {
    this.setData({ visible3: true })
  },
  onClose3() {
    this.setData({ visible3: false })
  },
  onChange3(e) {
    this.setData({ value3: e.detail.value, title3: e.detail.done && e.detail.options.map((n) => n.label).join('/') })
  },
  onLoadOptions(e) {
    const { value } = e.detail
    const options1 = [...this.data.options1]
    const options2 = [...this.data.options2]
    const options3 = [...this.data.options3]
    wx.showLoading({ mask: true })

    setTimeout(() => {
      if (value[value.length - 1] === 'menu1') {
        options3.forEach((n) => {
          if (n.value === 'menu1') {
            n.children = [
              {
                value: 'a1',
                label: '一汽奥迪A6L C6 2011款'
              },
              {
                value: 'a2',
                label: '一汽奥迪A6L C6 2011款 2.0T AT'
              },
              {
                value: 'a3',
                label: '一汽奥迪A6L C6 2011款 2.0T AT'
              },
              {
                value: 'a4',
                label: '一汽奥迪A6L C6 2011款 2.0T AT'
              },
            ]
          }
        })
      } else if (value[value.length - 1] === 'menu2') {
        options3.forEach((n) => {
          if (n.value === 'menu2') {
            n.children = [
              {
                value: 'b1',
                label: '一汽奥迪A6L C6 2011款 2.0T AT'
              },
              {
                value: 'b2',
                label: '一汽奥迪A6L C6 2011款 2.0T AT'
              },
            ]
          }
        })
      } else if(value[value.length - 1] === 'menu3') {
      options3.forEach((n) => {
        if (n.value === 'menu3') {
          n.children = [
            {
              value: 'c1',
              label: '一汽奥迪A6L C6 2011款 2.0T AT'
            },
          ]
        }
      })
      }
      
      

      wx.hideLoading()

      this.setData({ value3: value, options3, value2: value, options2, value1: value, options1 })
    }, 100)
  },
  

  // onLoad() {
  //   this.getRepos()
  // },
  // onChange(e) {
  //   const { checkedItems, items } = e.detail
  //   const params = {}

  //   console.log(checkedItems, items)
  //   // 下拉选择
  //   checkedItems.forEach((n) => {
  //     if (n.checked) {
  //       if (n.value === 'updated') {
  //         const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //         params.sort = n.value
  //         params.order = selected
  //       } else if (n.value === 'stars') {
  //         params.sort = n.value
  //         params.order = n.sort === 1 ? 'asc' : 'desc'
  //       } else if (n.value === 'forks') {
  //         params.sort = n.value
  //       } else if (n.value === 'filter') {
  //         n.children.filter((n) => n.selected).forEach((n) => {
  //           if (n.value === 'language') {
  //             const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //             params.language = selected
  //           } else if (n.value === 'query') {
  //             const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //             params.query = selected
  //           }
  //         })
  //       }
  //     }
  //   })

  //   this.getRepos(params)
  // },
  // getRepos(params = {}) {
  //   const language = params.language || 'javascript'
  //   const query = params.query || 'react'
  //   const q = `${query}+language:${language}`
  //   const data = Object.assign({
  //     q,
  //   }, params)

  //   wx.showLoading()
  //   wx.request({
  //     // url: `https://api.github.com/search/repositories`,
  //     data,
  //     success: (res) => {
  //       console.log(res)

  //       wx.hideLoading()

  //       this.setData({
  //         repos: res.data.items.map((n) => Object.assign({}, n, {
  //           date: n.created_at.substr(0, 7),
  //         })),
  //       })
  //     },
  //   })
  // },
  // onOpen(e) {
  //   this.setData({
  //     pageStyle: 'height: 100%; overflow: hidden',
  //   })
  // },
  // onClose(e) {
  //   this.setData({
  //     pageStyle: '',
  //   })
  // },
  // onChange(e) {
  //   this.setData({
  //     current: e.detail.key,
  //   })
  // },
  // gotoDetail: function (e) {
  //   let path = e.currentTarget.dataset.path;
  //   wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
  //     url: '/pages/partsDetail/partsDetail'
  //   })
  // },

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