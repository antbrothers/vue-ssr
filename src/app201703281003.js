/* eslint-disable */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router/index'
import {IS_EASTMONEY, IS_IOS} from './utils/useragent'
import {GET_LOGIN_INFO, GET_DEVICE_INFO} from './utils/emapp'
import cookie from './utils/cookie'
import store from './vuex/store'
import {debugUrlArr} from './config'
import VueLazyload from 'vue-lazyload' // https://github.com/hilongjw/vue-lazyload

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// })
Vue.use(VueRouter)
Vue.use(VueLazyload)

let debug = process.env.NODE_ENV === 'development'
let currentUrl = window.location.origin
debugUrlArr.forEach((v) => {
  if (currentUrl === v || debug) {
    // console.log('调试域名:' + v)
   // require('../static/js/vconsole.min').default
  }
})
const router = new VueRouter({routes: routerConfig})
const commit = store.commit || store.dispatch
let history = window.sessionStorage
// history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  document.activeElement.blur()
  mui.closePopups()
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  setTimeout(next, 50)
})

let emAppLoadSuccess = false

/*
 app获取登录信息回调函数
 */

window.GET_LOGIN_INFO_CB = (json) => {
  emAppLoadSuccess = true
  GET_DEVICE_INFO('GET_DEVICE_INFO_CB')
  if (typeof (json) === 'string') {
    let data = JSON.parse(json)
    console.log(data)
    console.log(data)
    let ctoken = data.data.ct
    let utoken = data.data.ut
    let uid = data.data.uid
    cookie('ctoken', ctoken, {'path': '/'})
    cookie('utoken', utoken, {'path': '/'})
    cookie('uid', uid, {'path': '/'})
  }
}

window.GET_DEVICE_INFO_CB = (json) => {
  if (typeof (json) === 'string') {
    let data = JSON.parse(json)
    let deviceId = data.data.UniqueID
    let version = data.data.Version
    let plat = IS_IOS ? 'iphone' : 'android'
    let network = data.data.network
    cookie('device_id', deviceId, {'path': '/'})
    cookie('version', version, {'path': '/'})
    cookie('plat', plat, {'path': '/'})
    cookie('network', network, {'path': '/'})
  }
  viewStart()
}

if (IS_EASTMONEY) {
  setTimeout(function(){
    getLoginInfo()
  },300)
} else {
  viewStart()
}

function getLoginInfo () {
  if (!emAppLoadSuccess) {
    try{
      GET_LOGIN_INFO('GET_LOGIN_INFO_CB') // 获取APP登录信息
    } catch (e) {
      console.log(e)
    }
    setTimeout(getLoginInfo, 100)
  }
}

/* eslint-disable */
function viewStart() {
  new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
  })
}

