Page({
  data:{
    goods:[],
    total:{
        count:0,
        money:0
    }

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    //   No货号
    //   Img 图片
    //   Name 产品名称
    //   Unit 单位
    //   Vip_price 会员价
    //   Price 非会员价
    //   Costs 配送费
    //   Num 库存

      var _this = this
      wx.request({
          url: 'https://www.eju-house.com/JoyRoom-ports/Fast/Fast.php',
          method: "post",
          header: "",
          data: {},
          success: function (res) {
              // success
              console.log('请求成功===' + res.data.data[0].Name)
              var datas = res.data.data;
              for (var i = 0; i < res.data.data.length; i ++){
                    datas[i].count = 0;
              }
              _this.setData({
                  goods: datas
              })
          },
          fail: function (res) {
              console.log('请求失败===' + res)
          },
          complete: function (res) {
              console.log('请求完成===' + res)
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



//   自定义函数

// 跳转到服务详情
  toServerInfo: function () {
      wx.navigateTo({
          url: '../serverInfo/serverInfo',
      })
  },

//   跳转到付款页面
    buyAction: function(event) {
        var e = event.currentTarget.dataset
        wx.navigateTo({
            url: '../pay/pay?amount='+e.amount,
        })
    },

  //   增减数量
  addNum: function (event) {
      var data = event.currentTarget.dataset;
      var goods = this.data.goods;
      var total = this.data.total;
      var newGood = goods.find(function(arrayItem){
          return arrayItem.No == data.num
        }
      )
      newGood.count += 1;
      total.count += 1;
      total.money += parseFloat(newGood.Price);
      this.setData({
          goods: goods,
          total: total
      })
  },

  //减少数量
  reduceNum: function (event) {
      var data = event.currentTarget.dataset;
      var goods = this.data.goods;
      var total = this.data.total;
      var newGood = goods.find(function (arrayItem) {
          return arrayItem.No == data.num
        }
      )
      if (newGood.count<=0){
          return;
      }
      newGood.count -= 1;
      total.count -= 1;
      total.money -= Number(newGood.Price);
      this.setData({
          goods: goods,
          total: total
      })
  }
})