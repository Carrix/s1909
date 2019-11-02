// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    text:'abc',
    */
    articles:[
      {
        avatar:'/images/fj.jpeg',
        date:'2019-10-10',
        title:'这是文章标题',
        img:'images/fj.jpeg',
        desc:'这是描述',
        star:30,
        view:20
      },
      {
        avatar: '/images/fj1.jpeg',
        date: '2019-10-10',
        title: '这是文章标题1',
        img: 'images/fj1.jpeg',
        desc: '这是描述',
        star: 30,
        view: 20
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})