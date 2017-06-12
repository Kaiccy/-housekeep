// pages/user/user.js
var app = getApp()
Page({
  data:{
    userInfo: {},
    // 每个服务的标题
    titleArr:[
                {title:"我的粮票",img:"../../image/icons/lp.png"},
                {title: "我的订单", img:"../../image/icons/dd.png"},
                {title: "我的快递", img:"../../image/icons/kd.png"},
                {title: "管家服务", img:"../../image/icons/gj.png"}
              ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

// 点击事件
  toPageAction: function(event){

    var $e = event.currentTarget.dataset
    console.log('lala==='+$e.title)

    if ($e.title == '我的粮票'){
       wx.navigateTo({
        url: '../myFoodCoupon/myFoodCoupon?title='+$e.title
      })
    }
    
    if ($e.title == '我的订单'){
       wx.navigateTo({
        url: '../myOrder/myOrder?title='+$e.title
      })
    }

    if ($e.title == '我的快递'){
       wx.navigateTo({
        url: '../myExpress/myExpress?title='+$e.title
      })
    }

    if ($e.title == '管家服务'){
       wx.navigateTo({
        url: '../setwardService/setwardService?title='+$e.title
      })
    }
    
  }
  


})