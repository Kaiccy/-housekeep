Page({
  data:{
    serverArray:[],

    //前台服务
    array1: ['入住及收楼'],
    array2: ['应接，留言，寻人服务','钥匙托管','行李服务'],

    index: 0
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // console.log('*()*%&*^%^&*'+options.title)

    //前台服务
    if(options.title == '入住及收楼'){
        this.setData({
            serverArray : this.data.array1
        })
      }
    if(options.title == '应答服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '便民服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }

    //到家服务
    if(options.title == '家电服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '家政服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '洗涤服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '邮局服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }

    //缴费服务
    if(options.title == '缴费服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '充值服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '代订服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '通讯服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }

    //定制服务
    if(options.title == '懒人服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '包月服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '驾校服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }
    if(options.title == '其他服务'){
      this.setData({
          serverArray : this.data.array2
      })
    }

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
bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  } 





})