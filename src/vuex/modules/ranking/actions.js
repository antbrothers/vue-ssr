/**
 * Created by linjianxi on 2017/3/28.
 */
import * as http from '../../../utils/common'
import * as types from './mutation-type'
/**
 * 获取浪客版数据
 * @param commit
 * @param params
 * @constructor
 */
export const GetContributeionList = ({commit}, params) => {
  http.post({
    url: '/LVBpages/api/ApiUserReward/GetContributeionList',
    data: params.data,
    succ: function (res) {
      if (res.result === 1) {
        console.log(res)
        commit(types.GET_GIT, res.data)
      } else {
        mui.toast(res.message)
      }
    }
  })
}