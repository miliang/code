// pages/day3-1/day3-1.js
var getData = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    itemSrc:[
      {src:"",content:""}
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    console.log(123)
    // 在这一步需要请求服务器数据
    // wx.request({
    //   url: 'http://172.17.4.247:8088/xiaochengxu.do',
    //   data:{name:"张三"},
    //   dataType:'json',
    //   method:"get",
    //   success(data){
    //     console.log(data.data)
    //   },
    //   fail(err){
    //     cosnole.log(err)
    //   }
    // })
    getData.reqData({
      url:"xiaochengxu.do",
      data:{name:"张三"},
      method:"get",
      getdata:function(data){
        console.log(data.data)
        var myarray = []
        data.data.map((item,index)=>{
          // console.log(item)
          // console.log(index)
          myarray.push({id:item.a_id,src:item.a_src,content:item.a_name})
        })
        console.log(myarray)
        _this.setData({
          itemSrc:myarray
        })
      }
    })
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
  
  },
  goDetail(e){
    // e.
    let myid = e.target.dataset.id
    console.log(myid)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+myid,
    })
  }
})