/**
 * Created by linjianxi on 2017/3/28.
 */
import * as actions from './actions'
import * as getters from './getter'
import * as types from './mutation-type'

const state = {
  gridData: {},
  is_follow: false,
  isEmpty: false
}

const mutations = {
  [types.GET_GIT] (state, result) {
    if (result.length > 0) {
      state.isEmpty = false
    } else {
      state.isEmpty = true
    }
    state.gridData = result
  },
  [types.ADD_FLOW] (state, result) {
    state.is_follow = result
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
