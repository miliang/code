// pages/day2/day2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:"demo148"
  },
  changeName(e){
    console.log(e.currentTarget.dataset.name)
    console.log(this.data.myname)
    this.setData({
      myname: e.currentTarget.dataset.name
    })
  },
  handleTap1(){
    console.log('1被按下')
  },
  handleTap2(e){
    console.log('2被按下')
    console.log('最是中间的view===' + e.target.dataset.name)
  },
  handleTap3(e){
    console.log('3被按下')
    console.log('最小的view==='+e.currentTarget.dataset.name)
  },
  onLoad(options){
    console.log(options.id)
  }
})