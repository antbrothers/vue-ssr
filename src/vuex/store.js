/**
 * Created by linjianxi on 2017/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
/*
import pages from './modules/pages/store'
import ticket from './modules/ticket/store'
import fund from './modules/fund/store'
import personal from './modules/water_personal/store'
import rankgingList from './modules/water_ranking/store'
import rewardList from './modules/reward/store' */
import ranking from './modules/ranking/store'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  modules: {
    ranking
  },
  strict: debug
})
