/**
 * Created by linjianxi on 2017/4/7.
 */
const state = {
  isLoading: false
}
const mutations = {
  UPDATE_LOADING (state, status) {
    state.isLoading = status
  }
}
export default {
  state,
  mutations
}
