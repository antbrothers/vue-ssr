/**
 * Created by linjianxi on 2017/4/17.
 */
module.exports = {
  proxyTable: {
    '/LVBpages': {
      target: 'http://list-qas.lvb.eastmoney.com',
      changeOrigin: true,
      pathRewrite: {
        '^/LVBpages': '/LVBpages'
      }
    },
    '/lvbpages': {
      target: 'http://h5-qas.lvb.eastmoney.com',
      changeOrigin: true,
      pathRewrite: {
        '^/lvbpages': '/lvbpages'
      }
    }
  }
}