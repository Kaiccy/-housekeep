Page({
  data:{
    homeInfo:{}
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: options.title
    })
    console.log('房屋详情请id='+options.id)

    var _this = this
    wx.request({
      url: 'https://www.eju-house.com/EJU-ports/Test/HomeDetail.php',
      data: {id:options.id},
      header: {
      'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        
        console.log('房屋详情请求成功=='+res.data.data.mark)
        
        _this.setData ({
          homeInfo : res.data.data
        })
      },
      fail: function(res) {
        // fail
        console.log('房屋详情请求失败')
      },
      complete: function(res) {
        // complete
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


// 自己方法
toWebView: function(){
  console.log('====='+window);
  window.location.href="http://www.ivrpano.com/ws/openPano/9CA2315B43F55F18?sid=0";
}


})