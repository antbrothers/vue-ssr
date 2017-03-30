/**
 * Created by linjianxi on 2017/3/28.
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from  './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

/**
 * 创建vue实例
 * 在这里注入 router store 到所以的子组件
 * 这样就可以在其他任何地方使用 this.$router and this.$store
 * @type {Vue$2}
 */
const app = new Vue({
  router,
  store,
  render: h => h(App)
})
/**
 * 导出 router 和 store
 * 这这里不需要挂载到app 上。这里和浏览器渲染不一样
 */
export {app, router, store}