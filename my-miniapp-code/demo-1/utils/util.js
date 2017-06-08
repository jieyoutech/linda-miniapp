var isDebug = true

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getSurveyContent() {
  var questions = ''
  if(isDebug) {
    questions = {
      "questions": [
        {
          "qindex": "q1",
          "qcontent": "question content 1",
          "qtype": "single",
          "options": [
            "question 1 option 1 xxx",
            "question 1 option 2 yyy",
            "question 1 option 3"
          ]
        },
        {
          "qindex": "q2",
          "qcontent": "question content 2",
          "qtype": "multiple",
          "options": [
            "question 2 option 1",
            "question 2 option 2",
            "question 2 option 3"
          ]
        },
        {
          "qindex": "q3",
          "qcontent": "question content 3",
          "qtype": "open"
        },
        {
          "qindex": "q4",
          "qcontent": "question content 4",
          "qtype": "single",
          "options": [
            "question 4 option 1",
            "question 4 option 2",
            "question 4 option 3"
          ]
        }
      ]
    }

  } else {
    wx.request({
      url: util.getSurveyContent(),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log('res data: ' + res.data);
        questions = res.data;
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
  return questions
}
module.exports = {
  formatTime: formatTime,
  getSurveyContent: getSurveyContent
}
