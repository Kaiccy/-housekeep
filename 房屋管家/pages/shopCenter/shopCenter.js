Page({
  data:{
    items:[],
    item1:[
            {title:"时速达",img:"../../image/meirixian.png"},
            {title:"每日鲜",img:"../../image/meirixian.png"},
            {title:"特卖商品",img:"../../image/meirixian.png"},
            {title:"福利",img:"../../image/meirixian.png"}
        ],
        item2:[
            {title:"入住及收楼",img:"../../image/meirixian.png"},
            {title:"应答服务",img:"../../image/meirixian.png"},
            {title:"便民服务",img:"../../image/meirixian.png"}
          ],
        item3:[
            {title: "家电服务", img: "../../image/meirixian.png" },
            {title: "家政服务", img: "../../image/meirixian.png" },
            {title: "洗涤服务", img: "../../image/meirixian.png" },
            {title: "邮局服务", img: "../../image/meirixian.png" }
          ],
        item4:[
            {title: "缴费服务", img: "../../image/meirixian.png" },
            {title: "充值服务", img: "../../image/meirixian.png" },
            {title: "代订服务", img: "../../image/meirixian.png" },
            {title: "通讯服务", img: "../../image/meirixian.png" }
          ],
          item5:[
            {title: "懒人服务", img: "../../image/meirixian.png" },
            {title: "包月服务", img: "../../image/meirixian.png" },
            {title: "驾校服务", img: "../../image/meirixian.png" },
            {title: "其他服务", img: "../../image/meirixian.png" }
          ],
          item6:[
            {title: "房屋托管", img: "../../image/meirixian.png" },
            {title: "买卖租赁", img: "../../image/meirixian.png" },
            {title: "装修服务", img: "../../image/meirixian.png" },
            {title: "搬家服务", img: "../../image/meirixian.png" }
          ],
          item7:[
            {title: "急救服务", img: "../../image/meirixian.png" },
            {title: "挂号服务", img: "../../image/meirixian.png" },
            {title: "健康管家", img: "../../image/meirixian.png" }
          ],
          item8:[
            {title: "保险服务", img: "../../image/meirixian.png" },
            {title: "理财服务", img: "../../image/meirixian.png" },
            {title: "贷款服务", img: "../../image/meirixian.png" }
          ]
  },


  onLoad:function(options){
        // 生命周期函数--监听页面加载
        console.log('==='+options.navTitle)

        // 请求数据
    //     var _this = this
    // wx.request({
    //   url: 'https://www.eju-house.com/EJU-ports/Test/HomeList.php',
    //   data: {},
    //   method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function(res){
    //     // success
    //     console.log('请求成功==='+res.data.data[0].title)
    //     _this.setData ({
    //       items : res.data.data
    //     })
    //   },
    //   fail: function(res) {
    //     // fail
    //     console.log('请求失败==='+res)
    //   },
    //   complete: function(res) {
    //     // complete
    //     console.log('请求完成==='+res)
    //   }
    // })


        // 设置导航标题
        wx.setNavigationBarTitle({
        //   title: options.navTitle,
          success: function(res) {
            // success
          }
        })
        
        // 不同的页面对应不同的内容模块
        if (options.navTitle == '商品服务'){
          this.setData ({
            items : this.data.item1
          })
          console.log('应该是='+this.data.items)
        }
        if (options.navTitle == '前台服务'){
          this.setData ({
            items : this.data.item2
          })
        }
        if (options.navTitle == '到家服务'){
          this.setData ({
            items : this.data.item3
          })
        }
        if (options.navTitle == '缴费服务'){
          this.setData ({
            items : this.data.item4
          })
        }
        if (options.navTitle == '定制服务'){
          this.setData ({
            items : this.data.item5
          })
        }
        if (options.navTitle == '房屋服务'){
          this.setData ({
            items : this.data.item6
          })
        }
        if (options.navTitle == '健康服务'){
          this.setData ({
            items : this.data.item7
          })
        }
        if (options.navTitle == '金融服务'){
          this.setData ({
            items : this.data.item8
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
  
  


  // 自定义方法
  toInfoPage: function(event){
    // var str = $("#titleL").text();
    // document.getElementById("titleL").text();
    // console.log(str);

    var $e = event.currentTarget.dataset
    console.log($e.title)
    if ($e.title == '时速达'||$e.title == '每日鲜'||$e.title == '特卖商品'||$e.title == '福利'){
        wx.navigateTo({
          url: '../soonAchieve/soonAchieve',
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
    }else if($e.title == '苏格兰风'||$e.title == '假日花园'||$e.title == 'Muji风格'||$e.title == '斯堪的纳维亚'||$e.title == '梧桐阑珊'){
      wx.navigateTo({
        url: '../homeInfo/homeInfo?title='+$e.title+'&id='+$e.id
      })
    }
    else{
      wx.navigateTo({
        url: '../setwardService/setwardService?title='+$e.title
      })
    }
  }








})