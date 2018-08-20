//index.js

Page({
  data: {
    painting: {},
    shareImage: ''
  },
  onLoad() {
    // this.eventDraw()
  },
  eventDraw() {
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })
    this.setData({
      painting: {
        width: 375,
        height: 555,
        clear: true,
        views: [{
            type: 'image',
            url: '/images/background.jpg',
            top: 0,
            left: 0,
            width: 375,
            height: 555
          },
          {
            type: 'roundrect',
            background: "#fff",
            top: 57.5,
            left: 88,
            width: 280,
            height: 25,
            radius: 10,
            shadowBlur: 10,
            shadowColor: "rgba(255,255,255,.5)"
          },
          {
            type: 'image',
            url: 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM7v6mLlMiblTaIBuq8VYHVBj61wC69r1jfz4wvjicSsMnKg/0',
            top: 27.5,
            left: 29,
            width: 55,
            height: 55,
            borderRadius: true
          },
          {
            type: 'text',
            content: '您的好友【Afan】',
            fontSize: 16,
            color: '#fff',
            textAlign: 'left',
            top: 33,
            left: 96,
            bolder: true
          },
          {
            type: 'text',
            content: '发现一件好货，邀请你一起0元免费拿！',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 59.5,
            left: 96
          },
          {
            type: 'image',
            url: '/images/pic.jpg',
            top: 136,
            left: 42.5,
            width: 290,
            height: 186
          },
          {
            type: 'image',
            url: '/images/qrcode.jpg',
            top: 470,
            left: 85,
            width: 68,
            height: 68,
            borderRadius: true
          },
          {
            type: 'text',
            content: '正品MAC魅可口红礼盒生日唇膏小辣椒Chili西柚情人',
            fontSize: 16,
            lineHeight: 21,
            color: '#fff',
            textAlign: 'left',
            top: 336,
            left: 44,
            width: 287,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: true
          },
          {
            type: 'text',
            content: '￥0.00',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 387,
            left: 44.5,
            bolder: true
          },
          {
            type: 'text',
            content: '原价:￥138.00',
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 391,
            left: 110,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '长按识别图中二维码帮我砍个价呗~',
            fontSize: 14,
            color: '#383549',
            textAlign: 'left',
            top: 483,
            left: 165.5,
            lineHeight: 20,
            MaxLineNumber: 2,
            breakWord: true,
            width: 125
          },
          {
            type: 'rect',
            background: '#666',
            top: 10,
            left: 10,
            width: 20,
            height: 20,
            shadowBlur: 10,
            shadowColor: "rgba(255,255,255,1)"
          },
        ]
      }
    })
    console.log(this.data)
  },
  eventSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  eventGetImage(event) {
    console.log(event)
    wx.hideLoading()
    const {
      tempFilePath,
      errMsg
    } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  }
})