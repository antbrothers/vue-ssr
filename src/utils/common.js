import cookie from './cookie'
import 'whatwg-fetch'
/* eslint-disable */
const baseUrl = ''
// http://61.129.128.41
// http://lvbqas.eastmoney.com:8014
/**
 * get请求
 * @param  {string} url   api地址
 * @param  {bool} base 是否带基础参数
 * @param  {string} query query参数
 * @param  {function} succ   成功后的回掉函数
 * @param  {function} error  异常后的回掉函数
 */
export const get = ({url, base, data, succ, error}) => {
  if (!navigator.onLine) {
    mui.alert('网络貌似不给力,请检查您的网络')
    return false
  }
  if (base) {
    data['device_id'] = cookie('device_id')
    data['version'] = cookie('version')
    data['plat'] = cookie('plat')
    data['network'] = cookie('network')
    data['ctoken'] = cookie('ctoken')
    data['utoken'] = cookie('utoken')
  }
  var _url = ''
  if (data) {
    let query = ''
    for (var key in data) {
      query += `${key}=${data[key]}&`
    }
    _url = `${baseUrl}${url}?${query}`
  } else {
    _url = `${baseUrl}${url}`
  }
  fetch(`${_url}`, {method: 'GET', 'Content-Type': 'application/json'}).then(function (response) {
    if (response.headers.get("content-type").indexOf('application/json') >= 0) {
      return response.json().then(function (json) {
        succ(json)
      })
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  })
  /*fetch(_url, {
   method: 'GET'
   })
   .then((response) => response.json())
   .then((json) => succ(json))
   .catch((ex) => {
   if (error) {
   error()
   } else {
   mui.alert('服务器错误,请稍后再试')
   }
   })*/
}

/**
 * post请求
 * @param  {string} url   api地址
 * @param  {bool} base 是否带基础参数(默认是带基础参数)
 * @param  {json} data json数据
 * @param  {function} succ   成功后的回掉函数
 * @param  {function} error  异常后的回掉函数
 */
export const post = ({url, base, data, succ, error}, commit) => {
  if (!navigator.onLine) {
    mui.alert('网络貌似不给力,请检查您的网络')
    return false
  }
  if (!data) {
    data = {}
  }
  if (!base) {
    data['device_id'] = cookie('device_id')
    data['version'] = cookie('version')
    data['plat'] = cookie('plat')
    data['network'] = cookie('network')
    data['ctoken'] = cookie('ctoken')
    data['utoken'] = cookie('utoken')
  }
  var _url = `${baseUrl}${url}`
  let query = ''
  console.log('请求地址:' + _url)
  console.log(data)
  for (var key in data) {
    query += `${key}=${data[key]}&`
  }
  if (commit) {
    commit('UPDATE_LOADING', true)
  }
  fetch(_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: query
  })
  .then((res) => {
    if (commit) {
      commit('UPDATE_LOADING', false)
    }
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      if (error) {
        error()
      } else {
        alert('服务器错误,请稍后再试')
      }
      return Promise.reject(new Error(res.status))
    }
  })
  .then((json) => {
    succ(json)
  })
  .catch((ex) => {
    if (commit) {
      commit('UPDATE_LOADING', false)
    }
    console.log(ex)
  })
  /*fetch(`/LVBpages/${_url}`, {
   method: 'post',
   headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/x-www-form-urlencoded'
   },
   body: query
   })
   .then((response) => {
   if (response.ok) {
   return response.json();
   }
   }).then((json) => {
   alert(JSON.stringify(json));
   }).catch((error) => {
   console.error(error);
   })*/
}
