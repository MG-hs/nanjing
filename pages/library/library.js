var app = getApp();

var dataUtil = require('../../data/publicData.js')
var util = require('../../utils/util.js');
import { formatTime } from '../../utils/util'

Page({
  data: {
    emoji: [0, 0, 0, 0, 0, 0],
    pages: [ '3F'],
  },
  loop: function () {
    var emoji = [];
    for (var m = 0; m < 6; m++) {
      console.log(this.data.library)
      console.log(this.data.library[m])
      var temp = this.emoji(this.data.library[m], 0, 13)
      emoji.push(temp)
    }
    console.log(wx.getStorageSync('list'))
    
  },

})