
const inBrowser = typeof window !== 'undefined'
export let  IS_LIVE = true
export let IS_EASTMONEY =true
export let IS_WEIXIN = true
export let IS_IOS = true
if (inBrowser) {
  /*
   是否是浪客直播APP
   */
  IS_LIVE = navigator.userAgent.toLowerCase().indexOf('eastmoney_live') !== -1 || navigator.userAgent.toLowerCase().indexOf('eastmoney_emlive') !== -1
  /*
   是否是东财APP
   */
  IS_EASTMONEY = navigator.userAgent.toLowerCase().indexOf('eastmoney') !== -1

  /*
   是否是微信
   */
  IS_WEIXIN = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1

  /*
   是否是IOS
   */
  IS_IOS = /(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)
}

