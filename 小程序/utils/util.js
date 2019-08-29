const url = require('types.js').Url
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
const demoReq = function (obj){

  obj.data = obj.data || null
  wx.request({
    url: url+obj.url,
    data:obj.data,
    method: obj.method,
    success: function(data){
      obj.getdata(data)
    }

  })
}
module.exports = {
  formatTime: formatTime,
  reqData : demoReq
}
