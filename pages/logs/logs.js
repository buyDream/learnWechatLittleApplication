//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
    })
    // wx.getLocation({
    //   success: function(res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude 
    //     console.log(latitude, longitude)
    //   },
    // })
    // wx.scanCode({
    //   success: (res) => {
    //    console.log(res)
    //   }
    // })
  },
  onTabItemTap(item) {
    // console.log(item.index)
    console.log('selected item')
  },
  onTabItemTap: function () {
    console.log('selected item')
  },

  onPullDownRefresh: function () {
    console.log('pull down')
  },
  onShow: function () {
    console.log('------console log')
  },
  onShareAppMessage: function () {
    return {
      title: 'title',
      path: '/page/user?id=123'
    }
  },

  tapMainView: function () {
    console.log('tap view')
  }
})
