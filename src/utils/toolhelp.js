/**
 * Created by linjianxi on 2017/3/28.
 */
;(function ($, window, document, undefined) {
  'use strict';
  var Tag = function (opt) {
    this.defaults = {
      level: 1,
      type: 1, // 1(用户等级)、2（性别和年龄）、3(星座)、4(主播类型)
      background: '#55e1ff'
    }
    this.options = $.extend({}, this.defaults, opt)
  }

  Tag.prototype = {
    levelEle: function () {
      var l = Math.ceil(this.options.level / 10) > 12 ? '12' : Math.ceil(this.options.level / 10)
      var p = Math.floor((this.options.level - 1) / 20) > 5 ? '5' : Math.floor((this.options.level - 1) / 20)
      var html = `<div class="level-ba level_num_${l}">
                      <img class="level-img" src=${require('../assets/images/level/newlevel/icon_level_' + p + '.png')} />
                      <span class="level-dec">${this.options.level}</span>
                  </div>`
      return html
    },
    tagEle: function () {
      var sexPic = this.options.gender == 1 ? 'tag_male.png' : 'tag_female.png'
      var commEle = ''
      if (this.options.type == 2) {
        commEle = `<img class="sex-icon" src=${require('../assets/images/' + sexPic)} />
                     <span class="age-icon age-comm">${this.options.age}</span>
                     <span class="age-dec age-comm">岁</span>`
      } else if (this.options.type == 3 || this.options.type == 4) {
        commEle = `<span class="age-comm">${this.options.instruct}</span>`
      }
      var html = `<div class="tag-main" style="background-color: ${this.options.background}">                         
                  ${commEle}   
                </div>`

      return html
    },
    labelEle: function () {
      var html = ''
      this.options.labelArr.forEach(function (item) {
         html += `<div class="label-element">
                      <span class="lable-desc">${item}</span>
                 </div>`
      })
      return html
    }
  }
  /**
   * 初始化等级插件
   * @param opt {等级，字体}
   * @returns {*}
   */
  Tag.initLevel = function (opt) {
    var tag = new Tag(opt)
    return tag.levelEle()
  }
  Tag.initTag = function (opt) {
    var tag = new Tag(opt)
    return tag.tagEle()
  }
  Tag.initLabel = function (opt) {
    var tag = new Tag(opt)
    return tag.labelEle()
  }
  if (typeof define === 'function' && define.amd === 'object' && define.amd) {
    define(function () {
      return Tag
    })
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports.Tag = Tag
  } else {
    window.Tag = Tag
  }
})(Zepto, window, document)