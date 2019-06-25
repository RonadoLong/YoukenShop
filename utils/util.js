import __config from '../etc/config'
import HttpService from '../helper/HttpService'
import CommonService from '../helper/CommonService'

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  HttpService: new HttpService({baseURL: __config.basePath},true,true),
  CommonService: new CommonService,
  // CacheService: new CacheService,
  __config
}
