//index.js
//获取应用实例

var data = [
  {
    'type':'耳钉',
    'title':'【三件套】甜美小雏菊戒指项链耳钉',
    'money':'¥7.8',
    'money_e':'¥17.8',
    'profile':'http://s11.mogucdn.com/p2/161016/74232560_7eii448def7akbjg5b1276ef8gdl2_640x960.jpg_440x660.v1cAC.70.jpg'
  },
  {
    'type':'头饰',
    'title':'头饰珍珠皇冠结婚饰品发饰',
    'money':'¥7.8',
    'money_e':'¥20.8',
    'profile':'http://s2.mogucdn.com/p2/160818/51548908_0737ce7ika233f4gab2081kl8344e_640x960.jpg_440x660.v1cAC.70.jpg'
  },
  {
    'type':'头饰',
    'title':'【6件套】日系小雏菊发圈发夹',
    'money':'¥7.8',
    'money_e':'¥71.8',
    'profile':'http://s2.mogucdn.com/p1/150825/19kysi_iezdgmrrgu2weyjtgmzdambqmmyde_640x960.jpg_440x660.v1cAC.70.jpg'
  },
  {
    'type':'发饰',
    'title':'【韩国可爱水果发卡果色边夹顶夹 儿童发饰品',
    'money':'¥7.8',
    'money_e':'¥15.8',
    'profile':'http://s2.mogucdn.com/p2/160818/74232560_5a0lh7jbh40kle0e4h5fcckk4d91i_640x960.jpg_440x660.v1cAC.70.jpg'
  },
];

var app = getApp()
Page({
  data: {
    "info": data
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
