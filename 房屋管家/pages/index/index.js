//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  //user
  userTap: function() {
    wx.navigateTo({
      url: '../user/user'
      // url: '../my/my'
    })
  },
  //service
  shopTap: function(res){
    wx.navigateTo({
      // url: '../shop/shop'
      url: '../home/home'
    })
  },
  onLoad: function () {



    //调用微信登录接口  
//  wx.login({  
//   success: function (loginCode) {  
//     var appid = ''; //填写微信小程序appid  
//     var secret = ''; //填写微信小程序secret  
  
//     //调用request请求api转换登录凭证  
//     wx.request({  
//       url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&grant_type=authorization_code&js_code='+loginCode.code,  
//       header: {  
//           'content-type': 'application/json'  
//       },  
//       success: function(res) {  
//         console.log(res.data.openid) //获取openid  
//       }  
//     })  
//   }  
// }) 

    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log('userInfo='+userInfo.city+userInfo.province)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  // 查看房屋列表
  checkhouseList: function (){
    wx.navigateTo({
      // url: '../shopCenter/shopCenter'
      url: '../home/home'
    })
  }




})

