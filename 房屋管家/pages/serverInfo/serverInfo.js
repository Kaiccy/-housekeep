Page({
  data:{
      total:{
          count:0,
          money:0
      }
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: '服务详情',
      success: function(res) {
        // success
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
  },



// 自定义函数
buyAction: function(){
  wx.navigateTo({
    url: '../shopCar/shopCar',
    success: function(res){
      // success
    },
    fail: function(res) {
      // fail
    },
    complete: function(res) {
      // complete
    }
  })
},

//   增减数量
addNum: function (event) {
    var total = this.data.total;
    total.count += 1;
    total.money += 80;
    this.setData({
        total: total
    })
},

//减少数量
reduceNum: function (event) {
    var total = this.data.total;
    if (total.count <= 0) {
        return;
    }
    total.count -= 1;
    total.money -= 80;
    this.setData({
        total: total
    })
},
//   跳转到付款页面
buyAction: function (event) {
    var e = event.currentTarget.dataset
    console.log(e.amount)
    wx.redirectTo({
        url: '../pay/pay?amount=' + e.amount,
    })
}





})

