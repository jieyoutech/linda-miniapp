// interact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 60,
    y: 60,
    r: 40,
    likeCount: 20,
    unlikeCount: 20,
    likeColor: 'green',
    unlikeColor: 'grey',
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var percentage = this.data.likeCount / (this.data.likeCount + this.data.unlikeCount);
    var perStr = Math.round(percentage * 100) + '%'
    // 页面渲染完成 
    var cxt_arc = wx.createCanvasContext('canvasArc');//创建并返回绘图上下文context对象。 
    cxt_arc.setLineWidth(2);
    cxt_arc.setStrokeStyle('#d2d2d2');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(this.data.x, this.data.y, this.data.r, 0, 2 * Math.PI, false);//设置一个原点(106,106)，半径为50的圆的路径到当前路径 
    cxt_arc.stroke();//对当前路径进行描边 

    cxt_arc.setLineWidth(2);
    cxt_arc.setStrokeStyle('#76a915');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(this.data.x, this.data.y, this.data.r, -Math.PI * 1 / 2, Math.PI * percentage, false);
    cxt_arc.stroke();//对当前路径进行描边 

    cxt_arc.setFontSize(20)
    cxt_arc.setTextAlign('center')
    cxt_arc.fillText(perStr, this.data.x, this.data.y+5)
    cxt_arc.stroke();

    cxt_arc.draw();
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