/**
 * Created by linjianxi on 2017/3/28.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Test = () => System.import('../views/test.vue')
const ranking = () => System.import('../views/water/ranking.vue')
const  videoComponent = () => System.import('../views/video/playVideo.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/water/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/video',
      name: 'video',
      component: videoComponent
    }
  ]
})