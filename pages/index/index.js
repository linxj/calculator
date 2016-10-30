//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    num: [],
    numTmp: ""
  },
  pressBtn: function(event) {
    this.data.numTmp += "" + event.target.dataset.num;
  },
  pressPlus: function(event){
    this.data.num.push(Number(this.data.numTmp));
  },
  pressEql: function(event){
    var sum = this.data.num.pop() + Number(this.data.numTmp);
    console.log(sum);
  },
  pressClean: function(event){
    this.data.num = [];
    this.data.numTmp = "";
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
