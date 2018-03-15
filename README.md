# vue-ssr
使用vue-server-rander 实现一个vue的服务端渲染

#### 安装http-proxy-middleware 插件实现一个api代理

## config.js
```
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
```
### server.js
```
/**
 * proxy middleware options
 * 代理跨域配置
 * @type {{target: string, changeOrigin: boolean, pathRewrite: {^/api: string}}}
 */
/*var options = {
  target: 'http://list-qas.lvb.eastmoney.com',
  changeOrigin: true,
  pathRewrite: {
    '^/LVBpages': '/LVBpages'
  }
};
var exampleProxy = proxy(options);
app.use('/LVBpages', exampleProxy);*/

debugger
var proxyTable = config.proxyTable
Object.keys(config.proxyTable).forEach(function (context) {
  debugger
  var options = proxyTable[context]
  var Proxy = proxy(options)
  app.use(context, Proxy)
})
```
