/*
 const debug = process.env.NODE_ENV !== 'production'
 const API_ROOT = debug ? 'http://lvbqas.eastmoney.com:8003/operation/' : 'http://lvbqas.eastmoney.com:8003/operation/'
 export {
 API_ROOT
 }
 */
/**
 * 配置vconsole 调试域名
 * @type {string[]}
 */
const debugUrlArr = ['http://lvbqas.eastmoney.com', 'http://lvbqas.eastmoney.com:8015', 'http://lvbqas.eastmoney.com:8101', 'http://lvbqas.eastmoney.com:8112']
export {
  debugUrlArr
}
