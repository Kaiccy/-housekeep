Page({
  data:{
    bannerUrls:[
        {
            "id": "3",
            "Img": "http://xj-image.oss-cn-hangzhou.aliyuncs.com/可口可乐广告.jpg",
            "Title": "测试123",
            "Content": "测试内容一i发射点发哦说的佛啊说的佛啊是地方"
        }
    ],

    servers:[
        {
          name:'商品服务',
          img:'../../image/items/shangpin.jpg'
        },
        {
          name:'前台服务',
            img: '../../image/items/youju.jpg'
        },
        {
          name:'到家服务',
            img: '../../image/items/daojia.jpg'
        },
        {
          name:'缴费服务',
            img: '../../image/items/jiaofei.jpg'
        },
        {
          name:'定制服务',
            img: '../../image/items/zaixian.jpg'
        },
        {
          name:'房屋服务',
            img: '../../image/items/fangwu.jpg'
        },
        
        {
          name:'健康服务',
            img: '../../image/items/jiankang.jpg'
        },
        {
          name:'金融服务',
            img: '../../image/items/jinrong.jpg'
        },
      ]
  },


  onLoad:function(options){
    // 生命周期函数--监听页面加载
      var _this = this
    wx.request({
        url: 'https://www.eju-house.com/JoyRoom-ports/Index/Banner.php',
        method:"post",
        header:"",
        data:{},
        success: function (res) {
        // success
        console.log('请求成功==='+res.data.data[0].title)
        _this.setData ({
            bannerUrls : res.data.data
        })
      },
      fail: function(res) {
        console.log('请求失败==='+res)
      },
      complete: function(res) {
        console.log('请求完成==='+res)
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










// 自定义方法
  changeAction: function() {
      console.log('我开始改变了哦')
  },

// 服务详情
  toServerInfo: function(){
    wx.navigateTo({
      url: '../serverInfo/serverInfo',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  // 购物中心
  toAnotherPage: function(event){
    var $e = event.currentTarget.dataset
    // console.log($e.name)
    // console.log($e.serverItem)
    
    if($e.name == '房屋服务' || $e.name == '健康服务' || $e.name == '金融服务'){
        console.log('正在开发中')
        wx.showToast({  
        title: '此服务还未启动',  
        icon: '',  
        duration: 1500  
      })
      
    }else{
      wx.navigateTo({
        url: '../shopCenter/shopCenter?navTitle='+$e.name
      })
    }
    
  } 
})