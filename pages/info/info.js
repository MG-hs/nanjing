// pages/information/information.js
var app = getApp();
Page({
  data: {
    username: null,
    infoType:'',
    successTimes: 0,
    failTimes: 0,
    recentBook: "",
    pages: [ '图书馆使用状态更改', '管理员账号管理'],
    pagesUrl:[ 'status','IDManagement'],
  },
  exit:function(){
    wx.removeStorageSync('user');
    wx.redirectTo({
        url: 'login/login',
      })    
  },
  saoma:function(){
    wx.showModal({
            content: '扫码签到',
            showCancel: false,
          })
  },



  temporary:function(){
    wx.showModal({
            content: '违规',
            showCancel: false,
          })
  },
  leave:function(){
    wx.showModal({
            content: '暂未开放',
            showCancel: false,
          })
  },
  onLoad: function (options) {
    // var recentBook='';
    console.log(options)
    
    var username=options.username;
    try {
      var user = wx.getStorageSync('user')
      if (user&&user.username==username) {
        // Do something with return value
      }
      else {
        var list = '';
      }
    } catch (e) {
    }
  
    if(user){
      this.setData({
        username:user.username,
        infoType:user.infoType,
        recentBook:user.recentBook,
      })        
    }
    else{
      wx.redirectTo({
        url: 'login/login',
      })
    } 
  },
  status: function () {
    wx.navigateTo({
      url: '../status/status',
    })
  },
})