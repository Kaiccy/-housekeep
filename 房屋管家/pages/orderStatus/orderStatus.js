Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderStatus:[
        { 
            text:"已下单：2017-12-3 10:23:12",
            status:"0"
        },
        {
            text: "已接单：2017-12-3 10:23:12",
            status: "0"
        },
        {
            text: "已送出：2017-12-3 10:23:12",
            status: "0"
        },
        {
            text: "已到达：2017-12-3 10:23:12",
            status: "0"
        },
        {
            text: "未评价",
            status: "1"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var para = document.createElement("view");
    // var node = document.createTextNode("haha~");
    // para.appendChild(node);
    // var element = document.getElementsByClassName("statusV");
    // element.appendChild(para);
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


// 自定义函数
  toEvaluate: function(){
      wx.navigateTo({
        //   url: '../evaluate/evaluate'
          url: '../star/star'
      })
  }



})