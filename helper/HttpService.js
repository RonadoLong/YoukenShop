import WxRequest from 'wx-request/lib/index'
import __cache from '../etc/cache'
import __config from '../etc/config'

class HttpService extends WxRequest {
  __cache

  constructor(options, isShowToast, checkLogin) {
    super(options);
    this.$$prefix = ''
    console.log(options, isShowToast)
    this.$$path = {
      user: {
        login: '/user/loginByMini',
      },
      company: {
        getCodeByPhone:'/company/sendSMSCodeRegister',
      }
      
    };
    this.interceptors.use({//请求的总入口
      request(request) {
        let userId = wx.getStorageSync(__cache.userId)
        if (checkLogin) {
          const App = getApp();
          if (userId == '' || userId == undefined) {
            if (App.data.canIUse) {
              App.showLogin(true)
            }
          } else {
            App.showLogin(false)
          }
        }
        request.header = request.header || {}
        request.header['content-type'] = 'application/x-www-form-urlencoded'
        // request.header['userId'] = '451367743329931264'
        if (isShowToast) {
          wx.showLoading({
            title: '等我一下喔',
          })
        }

        return request
      },
      requestError(requestError) {
        wx.hideLoading()
        return Promise.reject(requestError)
      },
      response(response) {
        wx.hideLoading()
        return response
      },
      responseError(responseError) {
        wx.hideLoading()
        return Promise.reject(responseError)
      },
    })
  }


  // 获取手机验证码
  getCodeByPhone(phone) {
    return this.postRequest(`${this.$$path.company.getCodeByPhone}`, {
      data: {
        mobile: phone
      }
    })
  }
 


//   getSelfCouponListByGoodsIds(goodsId) {
//     return this.getRequest(`${this.$$path.coupon.getSelfCouponListByGoodsIds}`, {
//       data: {
//         goodsIds: goodsId
//       }
//     })
//   }

//   consumeCoupon(couponId) {
//     return this.getRequest(`${this.$$path.coupon.consumeCoupon}`, {
//       data: {
//         couponId: couponId
//       }
//     })
//   }


//   getActivityCouponConfig(params) {
//     return this.postRequest(`${this.$$path.coupon.getActivityCouponConfig}`, {
//       data: params
//     })
//   }
//   confirmCollectGoods(params) {
//     return this.postRequest(`${this.$$path.order.confirmCollectGoods}`, {
//       data: params
//     })
//   }

//   activityGetCoupon(params) {
//     return this.postRequest(`${this.$$path.coupon.activityGetCoupon}`, {
//       data: params
//     })
//   }

//   //保存formid
//   postFormId(formId) {
//     return this.postRequest(`${this.$$path.user.postFormId}`, {
//       data: {
//         formId: formId
//       }
//     });
//   }

//   postFormIdParam(params) {
//     return this.postRequest(`${this.$$path.user.postFormId}`, {
//       data: params
//     });
//   }

//   updateFormIdCancel(params) {
//     return this.postRequest(`${this.$$path.user.updateFormIdCancel}`, {
//       data: params
//     });
//   }

//   postFormIdParamByCoupon(params) {
//     return this.postRequest(`${this.$$path.coupon.postFormId}`, {
//       data: params
//     });
//   }


  bindgetuserinfo() {
    wx.login({
      success: (response) => {
        console.log('-----微信登录------');
        if (response && response.code) {
          var code = response.code;
            console.log(code)
        } else {
          console.log("======授权失败======");
        }
      },
      fail: function (res) {
        console.log("调用登录接口失败" + res)
      }
    })
  }

}

export default HttpService