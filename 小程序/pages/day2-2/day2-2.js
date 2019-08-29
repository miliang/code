// pages/day2-2/day2-2.js
Page({
  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    isShow :true
  },
  addArray(){
    var length = this.data.objectArray.length
    var newArray = [{ id: length, unique:"unique_"+length}].concat(this.data.objectArray)
    this.setData({
      objectArray: newArray
    })
  },
  showView(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  goDay2() {
    wx.navigateTo({
      url: '/pages/day2/day2?id=' + this.data.isShow,
    })
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '17808322929',
    })
  }
})