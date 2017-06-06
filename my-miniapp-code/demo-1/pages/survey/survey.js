// survey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: [{
      qindex: "q1",
      qcontent: "question content 1",
      qtype: "single",
      options: [{
        oindex: "1",
        ocontent: "question 1 option 1 xxx"
      }, {
        oindex: "2",
        ocontent: "question 1 option 2 yyy"
      }, {
        oindex: "3",
        ocontent: "question 1 option 3"
      }]
    }, {
      qindex: "q2",
      qcontent: "question content 2",
      qtype: "multiple",
      options: [{
        oindex: "1",
        ocontent: "question 2 option 1"
      }, {
        oindex: "2",
        ocontent: "question 2 option 2"
      }, {
        oindex: "3",
        ocontent: "question 2 option 3"
      }]
    }, {
      qindex: "q3",
      qcontent: "question content 3",
      qtype: "open",
      options: []
    }, {
      qindex: "q4",
      qcontent: "question content 4",
      qtype: "single",
      options: [{
        oindex: "1",
        ocontent: "question 4 option 1"
      }, {
        oindex: "2",
        ocontent: "question 4 option 2"
      }, {
        oindex: "3",
        ocontent: "question 4 option 3"
      }]
    }]
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

  },

  /**
   * 自定义函数
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})