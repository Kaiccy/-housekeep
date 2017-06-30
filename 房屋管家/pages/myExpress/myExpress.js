Page({
  data:{
      expresses:[
      {No:'1246804311636446780',Date:'2017-5-1',State:'已收件'}
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
      
      var _this = this
      wx.request({
          url: 'https://www.eju-house.com/JoyRoom-ports/Fastmail/Fastmail.php',
          method: "post",
          header: {'content-type': 'application/x-www-form-urlencoded'},
          data: {Openid:'241234123'},
          success: function (res) {
              // success
              console.log('请求成功===' + res.data.data)
              _this.setData({
                  expresses: res.data.data
              })
          },
          fail: function (res) {
              console.log('请求失败===' + res)
          },
          complete: function (res) {
              console.log('请求完成===' + res.data.msg)
          }
      })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})