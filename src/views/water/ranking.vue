<template>
  <div id="ranking">
    <!-- <div class="rank-tab-top-empty"></div>-->
    <div class="rank-tab-contain">
      <div class="rank-tab-type">
        <div class="rank-tab-type-comm rank-tab-type-git" v-bind:class="{'rank-active': gitType === 1}"
             @click="chekType(1)">
          收礼榜
        </div>
        <img v-if="gitType === 1" src="../../assets/images/rank-left-01.png" class="rank-tab-img-comm">
        <img v-if="gitType === 2" src="../../assets/images/rank-rigth-01.png" class="rank-tab-img-comm">
        <div class="rank-tab-type-comm rank-tab-type-show" v-bind:class="{'rank-active': gitType === 2}"
             @click="chekType(2)">
          贡献榜
        </div>
      </div>
      <div class="rank-day-main">
        <div class="rank-day-comm" v-bind:class="{'rank-day-active': dayType === -1}" @click="checkDay(-1)">
          日榜
        </div>
        <div class="rank-day-comm" v-bind:class="{'rank-day-active': dayType === -2}" @click="checkDay(-2)">
          周榜
        </div>
        <div class="rank-day-comm" v-bind:class="{'rank-day-active': dayType === -3}" @click="checkDay(-3)">
          月榜
        </div>
        <!--<div class="rank-day-comm" v-bind:class="{'rank-day-active': dayType === -4}" @click="checkDay(-4)">
          总榜
        </div>-->
      </div>
    </div>
    <div id="ranking-list">
      <ul class="mui-table-view">
        <div v-if="list.gridData.length > 0" v-for="(items, index) in list.gridData" class="list-main">
          <li class="mui-table-view-cell mui-media user-info" v-if="index === 0 || index ===1 || index === 2">
            <img v-if="index === 0" class="mui-media-object mui-pull-left tou-xiang first-img level-comm" src="../../assets/images/icon-no.1.png" @click="openMain(items.id)">
            <img v-if="index === 1" class="mui-media-object mui-pull-left tou-xiang first-img level-comm" src="../../assets/images/icon-no.2.png" @click="openMain(items.id)">
            <img v-if="index === 2" class="mui-media-object mui-pull-left tou-xiang first-img level-comm" src="../../assets/images/icon-no.3.png" @click="openMain(items.id)">
            <div class="top-img-main">
              <img v-bind:src="items.avatar_url"  class="top-tx-img-cmm">
              <img v-if="items.identify === 1" src="../../assets/images/new-v.png" class="use-v-img-comm" v-bind:class="'v-' + `${index+1}`">
            </div>
            <div class="mui-media-body use-nic" @click="openMain(items.id)">
              <div class="use-nic-main use-nic-main-comm"></div>
              <div class="use-nic-main use-nic-main-middle">
                <div class="use-nic-desc">
                  <div class="level-ba" v-if="items.level > 0 && items.level <= 10">
                    <img class="level-img" src="../../assets/images/level/icon_level_star.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-11-20" v-if="items.level >= 11 && items.level <= 20">
                    <img class="level-img" src="../../assets/images/level/icon_level_star.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-21-30" v-if="items.level >= 21 && items.level <= 30">
                    <img class="level-img" src="../../assets/images/level/icon_level_luna.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-31-40" v-if="items.level >= 31 && items.level <= 40">
                    <img class="level-img" src="../../assets/images/level/icon_level_luna.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-41-50" v-if="items.level >= 41 && items.level <= 50">
                    <img class="level-img" src="../../assets/images/level/icon_level_sun.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-51-60" v-if="items.level >= 51 && items.level <= 60">
                    <img class="level-img" src="../../assets/images/level/icon_level_sun.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-61-70" v-if="items.level >= 61 && items.level <= 70">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_low.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-71-80" v-if="items.level >= 71 && items.level <= 80">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_low.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-81-90" v-if="items.level >= 81 && items.level <= 90">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_middle.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-91-100" v-if="items.level >= 91 && items.level <= 100">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_middle.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-101-110" v-if="items.level >= 101 && items.level <= 110">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_high.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-111" v-if="items.level >= 111 ">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_high.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="use-name">
                    {{items.nickname}}
                  </div>
                </div>
                <p class='mui-ellipsis' v-if="gitType === 1">收到<span class="show-langp">{{items.ticket_atribution_count}}</span>浪票</p>
                <p class='mui-ellipsis' v-if="gitType === 2">贡献<span class="show-langp">{{items.ticket_atribution_count}}</span>浪花</p>
              </div>
              <div class="use-nic-main use-nic-main-comm"></div>

            </div>
            <div class="swich-zh" >
              <div class="guanzhu-contain" v-if="items.isCurrent == 0">
                <div class="guanzhu-main 1" @click="AddFollow(items.id, $event, gitType, dayType)" v-if="!items.is_follow">关注</div>
                <div class="guanzhu-main done-follow 4" v-if="items.is_follow" @click="CancelFollow(items.id, $event, gitType, dayType)">已关注</div>
              </div>
            </div>
          </li>

          <li class="mui-table-view-cell mui-media user-info" v-else>
            <div class="level-px">{{index + 1}}</div>
            <img class="mui-media-object mui-pull-left tou-xiang first-img other-leve" v-bind:class="{'other-leve-10': index >= 9}" v-bind:src="items.avatar_url" @click="openMain(items.id)">
            <img v-if="items.identify === 1" src="../../assets/images/new-v.png" class="list-v-img">
            <div class="mui-media-body use-nic" @click="openMain(items.id)">
              <div class="use-nic-main use-nic-main-comm"></div>
              <div class="use-nic-main use-nic-main-middle">
                <div class="use-nic-desc">
                  <div class="level-ba" v-if="items.level > 0 && items.level <= 10">
                    <img class="level-img" src="../../assets/images/level/icon_level_star.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-11-20" v-if="items.level >= 11 && items.level <= 20">
                    <img class="level-img" src="../../assets/images/level/icon_level_star.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-21-30" v-if="items.level >= 21 && items.level <= 30">
                    <img class="level-img" src="../../assets/images/level/icon_level_luna.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-31-40" v-if="items.level >= 31 && items.level <= 40">
                    <img class="level-img" src="../../assets/images/level/icon_level_luna.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-41-50" v-if="items.level >= 41 && items.level <= 50">
                    <img class="level-img" src="../../assets/images/level/icon_level_sun.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-51-60" v-if="items.level >= 51 && items.level <= 60">
                    <img class="level-img" src="../../assets/images/level/icon_level_sun.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-61-70" v-if="items.level >= 61 && items.level <= 70">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_low.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-71-80" v-if="items.level >= 71 && items.level <= 80">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_low.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-81-90" v-if="items.level >= 81 && items.level <= 90">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_middle.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-91-100" v-if="items.level >= 91 && items.level <= 100">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_middle.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-101-110" v-if="items.level >= 101 && items.level <= 110">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_high.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="level-ba leve-111" v-if="items.level >= 111 ">
                    <img class="level-img" src="../../assets/images/level/icon_level_crown_high.png">
                    <span class="level-dec">{{items.level}}</span>
                  </div>
                  <div class="use-name">
                    {{items.nickname}}
                  </div>
                </div>
                <p class='mui-ellipsis' v-if="gitType === 1">收到<span class="show-langp">{{items.ticket_atribution_count}}</span>浪票</p>
                <p class='mui-ellipsis' v-if="gitType === 2">贡献<span class="show-langp">{{items.ticket_atribution_count}}</span>浪花</p>
              </div>
              <div class="use-nic-main use-nic-main-comm"></div>
            </div>
            <div class="swich-zh">
              <div v-if="items.isCurrent == 0">
                <div class="guanzhu-main" @click="AddFollow(items.id, $event, gitType, dayType)" v-if="!items.is_follow">关注</div>
                <div class="guanzhu-main done-follow" v-if="items.is_follow" @click="CancelFollow(items.id, $event, gitType, dayType)">已关注</div>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
    <!--<table-common :list="list"></table-common>-->
    <div class="tip-main">
      <img v-if="gitType === 1" src="../../assets/images/about_1.png" class="tip-img">
      <img v-if="gitType === 2" @click="showTip(isShow)" src="../../assets/images/about_2.png" class="tip-img">
    </div>

    <!-- 提示 begin -->
    <div v-bind:class="{ 'warning-bg': true,active: isShow}" @click="closeWarning()"></div>
    <div class="waring-cont" @click="closeWarning()" v-if="isShow">
      <div v-if="isShow" v-bind:class="{ 'warning-main': true,active: isShow}">
        <div class="waring-title">关于贡献榜</div>
        <div class="warning-cont">
          <div class="warning-desc">
            贡献榜排名前三的用户，进入任何直播间都会有一个与众不同的特效。数据每天实时结算。
            <!--<div class="warning-time">
              （统计时间：每周一0点至周日24点）
            </div>-->
          </div>
        </div>
        <!-- 提示 end -->
      </div>
    </div>
    <!-- 提示 end -->

    <!-- 空数据 begind -->
    <div class="empty-main" v-if="list.isEmpty">
      <div class="empty-cont">
        <img src="../../assets/images/img_gift_default.png" class="empty-img">
      </div>
      <div class="empty-desc">还没人上榜哦,快去直播吧</div>
    </div>
    <!-- 空数据 end    -->
  </div>
</template>
<style lang="less" src="../../assets/less/water-ranking.less"></style>
<script>
  import {mapGetters} from 'vuex'
  import {SET_TITLE, OPEN_OTHER_MAIN} from '../../utils/emapp'
  export default {
    computed: mapGetters({
      list: 'rankingList'
    }),
    data () {
      return {
        gitType: 1, // 1(收礼榜) 2(贡献版)
        dayType: -1, // -1(日) -2（周）-3（月） -4(总)
        isShow: false
        // uid: ''
      }
    },
    mounted: function () {
      this.getData()
    },
    /* components: {
     'table-common': rankList
     }, */
    methods: {
      // 切换类型
      chekType (type) {
        this.gitType = type
        this.getData()
      },
      // 切换 日、周、月、总
      checkDay (type) {
        this.dayType = type
        this.getData()
      },
      // 获取数据
      getData () {
        // this.uid = cookie('uid')
        // console.log('uid:' + cookie('uid'))
        this.$store.dispatch('GetContributeionList', {data: {ranktype: this.gitType, datetype: this.dayType}, _this: this})
      },
      // 关注
      AddFollow (id, event, gitType, dayType) {
        this.$store.dispatch('AddFollow', {uid: {user_id: id}, data: {ranktype: this.gitType, datetype: this.dayType}, _this: this, ele: event.currentTarget})
      },
      // 取消关注
      CancelFollow (id, event, gitType, dayType) {
        this.$store.dispatch('CancelFollow', {uid: {user_id: id}, data: {ranktype: this.gitType, datetype: this.dayType}, _this: this, ele: event.currentTarget})
      },
      closeWarning () {
        this.isShow = false
      },
      showTip (isShow) {
        this.isShow = true
      },
      // 打开我的主页
       openMain (userId) {
        OPEN_OTHER_MAIN(userId)
      }
    },
    beforeRouteEnter (to, from, next) {
      SET_TITLE('浪客榜')
      next()
    }
  }
</script>