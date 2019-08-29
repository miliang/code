// pages/day3-2/day3-2.js
const utilUrl = require('../../utils/types.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationObj:"",
    isOpen:true,
    mymarkers:[]
    // 数组里需要id  经度  纬度  icon路径
  },
  czDom(e){
    // 创建动画并把动画挂载在组件的animation属性上
    // 创建动画
    console.log(e.target.dataset.isopen)
    if (e.target.dataset.isopen){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "linner",
        delay: 0
      })
      animation.translate(100).opacity(0.5).step()
      this.setData({
        animationObj: animation.export(),
        isOpen:false
      })
    }else{
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "linner",
        delay: 0
      })
      animation.translate(0).step()
      this.setData({
        animationObj: animation.export(),
        isOpen: true
      })
    }
    
  },
  onLoad(){
    var _this = this
    wx.getLocation({
      success:(resp)=>{
        let obj = {
          id:1,
          latitude: resp.latitude,
          longitude:resp.longitude,
          iconpath:'/image/icon_mine_blue.png'
        }
        _this.setData({
          mymarkers:[obj]
        })

      }
    })
  },
  uploadImage(){
    wx.chooseImage({
      success: resp =>{
        // console.log(resp)
        // 拿到临时路径  准备上传服务器
        wx.uploadFile({
          url: utilUrl.url+"xiaochengxuimg.do",
          filePath:resp.tempFilePaths[0],
          name: 'myUpLoad',
          success:function(data){
            console.log(data)
          },
          fail:function(err){
            console.log(err)
          },
          complete:function(){
            console.log(123)
          }
        })
      }
    })
  }
})