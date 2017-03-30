import { IS_IOS } from './useragent'
/*
 获取登录相关信息
 */
export const GET_LOGIN_INFO = (str) => {
  let strCB = '{"callbackname":"' + str + '"}'
  try {
    if (IS_IOS) {
      window.location = 'emH5GetLoginStatus:' + strCB
    } else {
      if (window.eastmoney) {
        window.eastmoney.emH5GetLoginStatus(strCB)
      }
    }
  } catch (e) {
  }
}

/*
 获取设备相关信息
 */
export const GET_DEVICE_INFO = (str) => {
  let strCB = '{"callbackname":"' + str + '"}'
  try {
    if (IS_IOS) {
      window.location = 'getDeviceInfo:' + strCB
    } else {
      if (window.eastmoney) {
        window.eastmoney.getDeviceInfo(strCB)
      }
    }
  } catch (e) {
  }
}

/*
 显示分享
 */
export const SHOW_SHARE = (strdhlfx) => {
  try {
    if (IS_IOS) {
      window.location = 'emH5ShareNeed:' + strdhlfx
    } else {
      window.eastmoney.emH5ShareNeed(strdhlfx)
    }
  } catch (e) {
  }
}

/*
 设置APP标题
 */
export const SET_TITLE = (txt) => {
  var strCB = '{"title1":"' + txt + '"}'
  try {
    if (IS_IOS) {
      window.location = 'emH5Title:' + strCB
    } else {
      window.eastmoney.emH5Title(strCB)
    }
  } catch (e) {
  }
}
/*
 打开我的主页
 */
export const OPEN_LIVE_ME = () => {
  var s = 'emlive://haitunlive.com/home?page=home_me'
  var a = 'emlive://haitunlive.com/first?params={"destClass":"home","page":"home_me"}'
  eventOpenLive(s, a)
}
/**
 * 打开个人主页
 * @param userId
 * @constructor
 */
export const OPEN_OTHER_MAIN = (userId) => {
  var s62 = 'emlive://haitunlive.com/hosthome?userId=' + userId
  var a62 = 'emlive://haitunlive.com/first?params={"destClass":"hosthome","segueParams":{"userId":"' + userId + '"}}'
  eventOpenLive(s62, a62)
}
/*
 打开直播
 */
export const OPEN_LIVE = () => { // 发布直播页面
  var s6 = 'emlive://jinyuzhibo.com/liverelease'
  var a6 = 'emlive://haitunlive.com/first?params={"destClass":"live","segueParams":{"channelLocation":"xx.x,yy.y","extraLiveType":0}}'
  eventOpenLive(s6, a6)
}

/*
 打开私信
 */
export const OPEN_PROMSG = (uid) => { // 打开私信
  var s6 = `emlive://haitunlive.com/message?page=session&chatIdentify=${uid}`
  var a6 = 'emlive://haitunlive.com/first?params={"destClass":"directmsgpost","segueParams":{"messagetype":200,"uid":"' + uid + '","isFollow":false}}'
  eventOpenLive(s6, a6)
}

/**
 * 跳直播
 * @param channelId 频道ID
 * @param type 类型 1（直播）、2（录播）
 * @constructor
 */
export const OPEN_LIVE_BYID = (channelId, type = '1') => { // 跳直播
  var s5, a5
  if (type === '1') { // 直播
    s5 = 'emlive://jinyuzhibo.com/live?channel_id=' + channelId + '&extra_live_type=' + type
    a5 = 'emlive://haitunlive.com/first?params={"destClass":"live","segueParams":{"channelId":"' + channelId + '","extraLiveType": ' + type + '}}'
  } else if (type === '2') { // 录播
    s5 = 'emlive://jinyuzhibo.com/home?channel_id=' + channelId + '&extra_live_type=' + type
    a5 = 'emlive://haitunlive.com/first?params={"destClass":"vodplayer","segueParams":{"channelId":"' + channelId + '"}}'
  }
  eventOpenLive(s5, a5)
}

/* eslint-disable */

function eventOpenLive(s, a) {
  if (IS_IOS) {
    var iosstr = '{"callbackname":"callbackOpen","appname":"haitunlive://","scheme":"' + s + '"}'
    window.location = "emH5toOpenApp:" + iosstr
  } else {

    var bytes = a.split('params=')
    bytes[1] = encodeURIComponent(base64encode(bytes[1]))
    var userAgent = navigator.userAgent.toLowerCase()
    var appname = 'com.eastmoney.haitunlive'
    console.log(userAgent)
    var androidstr = ''
    if (userAgent.indexOf("eastmoney_eastmoney") != -1 || userAgent.indexOf("eastmoney_android") != -1) {
      appname = "com.eastmoney.android.berlin"
      androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
      eastmoney.emH5toOpenLocalPage(androidstr)
    } else if (userAgent.indexOf("eastmoney_guba") != -1) {
      appname = "com.eastmoney.android.gubaproj"
      androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
      eastmoney.emH5toOpenLocalPage(androidstr)
    }
    else if (userAgent.indexOf("eastmoney_cjtt") != -1) {
      appname = "com.eastmoney.android.tokyo"
      androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
      eastmoney.emH5toOpenLocalPage(androidstr)
    }
    else if (userAgent.indexOf("eastmoney_emlive") != -1 || userAgent.indexOf("eastmoney_live") != -1) {
      appname = "com.eastmoney.haitunlive"
      androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
      eastmoney.emH5toOpenLocalPage(androidstr)
    } else {
      androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
      eastmoney.emH5toOpenApp(androidstr)
    }
  }
}


var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}


window.callbackOpen = function (returnValue) {
  var str = JSON.parse(returnValue)
  if (str.code != "0") {
    if (IS_IOS) {
    } else {
      // window.location.href='http://zhibo.eastmoney.com/'
    }
  }
}

