<template>
  <div id="playVideo">
    <div class="play-video-header">
      <div class="play-video-header-tx">
        <img v-bind:src="avatarurl" class="play-video-header-tx-pic">
      </div>
      <div class="play-video-header-right">
        <div class="play-video-header-right-info">
          <div class="play-video-header-right-info-name">{{userNickName}}</div>
          <div v-html ='$options.filters.eleTag(1, 18)'></div>
          <div v-html ='$options.filters.eleLevel(items.level)'></div>
          <div v-html='$options.filters.constellation("双鱼座")'></div>
          <div v-html='$options.filters.anchorType("校园主播")'></div>
        </div>
        <div class="play-video-header-rigth-time">
          {{postTime}}
        </div>
        <!-- 标签 begin -->
        <div>
          <div v-html='$options.filters.lableTag(["刘菲菲","真飞机减肥减肥","你我微微","飞飞飞","口口口口口口","没魔抗魔抗"])' class="lable-main"></div>
        </div>
        <!-- 标签 end   -->
      </div>
    </div>
  </div>
</template>
<style lang="less" src="../../assets/less/level.less"></style>
<style scoped lang="less" src="../../assets/less/play.video.less"></style>
<script>
  import * as https from '../../utils/common'
  let brower = typeof window !== 'undefined'
  var Tool = new Object()
  if (brower) {
     Tool = require('../../utils/toolhelp')
  }
  export default {
    data () {
      return {
        getUrl: '',             // 获取的数据的url地址
        getLikeChannelUrl : '', // 获取点赞接口
        // 个人信息模式 数据
        items: {
          level: ''
        },
        likeCount: '',
        is_like: false,
        likeUsers: '',
        rewardUserNum: '',
        rewardUsers: '',
        userLocation: '',
        avatarurl: '',
        userNickName: '',
        userGender: '',
        postTime: '',
        viewerCount: '',
        content: '',
        images: '',
        replyNum: '',
        commList: '',
        identfy: '',
        channel_type: 0,
        user_id: '',
        // 视频模式 数据
        loading: false,
        clicked: false,
        isplay: false,
        isShow: true,
        isprepare: false,         //判断是否仍在预告状态
        hlsurl: '',
        islive: true,             // 有直播流
        isrecord: false,          // 有录播流
        record_num: 0,            // 当前播放的录播流片段
        record_num_count: 0,      // 共有几段录播流
        trailer_message:'',       // 预告
        type: 0,                  // 默认0 1(图片) 2(录播，小视频)
        id: '',                    // 动态Id
        trailerQuery: 0            // 预告
      }
    },
    mounted: function () {
      this.getUrl = ''                        // 获取数据的接口
      this.getLikeChannelUrl = ''             // 点赞接口
      this.type = this.$route.query.type      // 默认0 1(图片) 2(录播，小视频)
      this.id = this.$route.query.id          // 动态Id

      if (this.type === '1') {      // 图片分享
        $('#pic-main').css('display', 'block')
        $('.vido-contain').css('display', 'none')
      } else  {                   // 回放视频 以及 小视频 占位
        $('#pic-main').css('display', 'none')
        $('.vido-contain').css('display', 'block')
      }
      this.getCommunityInfo(this.id)
    },
    methods: {
      // 获取用户信息
      getCommunityInfo: function (id) {
        var _this = this
        https.post({
          url: _this.getUrl + '/lvbpages/api/ApiUserShare/GetCommunityInfo',
          data: {id: id},
          succ: function (json) {
            console.log('用户详情')
            console.log(json)
            _this.avatarurl = json.data.anchor.avatar_url
            _this.userNickName = json.data.anchor.nickname
            _this.content = json.data.text
            _this.postTime = json.data.post_time
            if (_this.type === '1') {
              _this.userLocation = json.data.location
            }
            _this.userGender = json.data.anchor.gender
            _this.items.level = json.data.anchor.level
            _this.identfy = json.data.anchor.identify
            _this.viewerCount = json.data.viewer_count
            _this.likeCount = json.data.like_count
            _this.is_like = json.data.is_like
            _this.likeUsers = json.data.like_user
            _this.rewardUserNum = json.data.rew_user_num
            _this.rewardUsers = json.data.reward_user
            _this.images = json.data.images[0]
            _this.channel_type = json.data.type
            _this.user_id = json.data.anchor.id

            _this.getCommentList(id, _this.channel_type, _this.user_id) // 获取评论列表
            if (_this.type === '2') {
              _this.getShareChannelInfo(_this.user_id, id) // 获取频道数据
            }
          }
        })
      },
      // 获取评论
      getCommentList: function (id, channel_type, user_id) {
        var _this = this
        https.post({
          url: _this.getUrl + '/lvbpages/api/ApiUserShare/BatchGetCommentList',
          data: {id: id, channel_type: channel_type, user_id: user_id},
          succ: function (json) {
            console.log('评论')
            console.log(json)
            _this.commList = json
          }
        })
      },
      // 获取频道信息
      getShareChannelInfo: function (user_id, channel_id) {
        var _this = this
        https.post({
          url: _this.getUrl + '/lvbpages/api/ApiUserShare/ShareChannelInfo',
          data: {user_id: user_id, channel_id: channel_id},
          succ: function (json) {
            console.log('频道消息')
            console.log(json)
            _this.userLocation = json.data.location
            _this.islive = json.data.type == 0 && (json.data.state == 0 || json.data.state == 1 || json.data.state == 2 || json.data.state == 4) && json.data.id != 0
            _this.isrecord = (json.data.type == 1 || json.data.type == 2 )&& (json.data.record_hls.video_files.length > 0)
            _this.record_num_count = json.data.record_hls.video_files.length
            if (_this.islive) { // 如果有直播流
              _this.hlsurl = json.data.hls_downstream_address + '?v=' + Math.random()
            } else if (_this.isrecord) {    // 如果有录播
              _this.hlsurl = json.data.record_hls.video_files[_this.record_num].video_url + '?v=' + Math.random();
            } else {
            }
            _this.isprepare = json.data.state == 4 && json.data.id != 0

            // _this.enterRoom(channel_id)     // 进入房间
            //询问是否处在预告状态
            if (json.data.state == 4) {
              trailerQuery = setInterval('isTrailer('+user_id+','+json.data.id+')', 3000);
            }
          }
        })
      },
      // 判断是否仍有预告
      isTrailer: function (user_id, id) {
        let _this = this
        https.post({
          url: 'https://lvbsns.eastmoney.com/LVB/api/Channel/GetChannelDetail',
          data: {channel_id: user_id},
          succ: function (json) {
            if (json.result === 1) {
              if (json.data.state === 4) {
                _this.isprepare = true && id !== 0
                _this.trailer_message = json.data.trailer_message
              } else {
                clearInterval(_this.trailerQuery)
              }
            }
          }
        })
      },
      // 下载
      downLoad: function () {
        location.href = "http://appleappsite.eastmoney.com/openApp.html?type=home";
      },
      // 开始
      play: function () {
        document.querySelector("#video").play();
        this.loading = true;
      },
      onPlay: function () {
        this.loading = true;
        this.clicked = true;
        this.isplay = true;
        this.isShow = false;
        $("video").css({width: w_width-25+"px", heigth: w_height+"px"})
        //$("video").height(w_width + "px");
      },
      onPlaying: function () {
        console.log("--onplaying--");
        var _this = this;
        if (useragent.is_weibo) {
          setTimeout(function () {
            _this.isShow = false;
            _this.loading = false;
          }, 1000);
        } else {
          _this.clicked = true;
          _this.isShow = false;
          _this.loading = false;
        }
      },
      onPause: function () {
        var _this = this;
        _this.isplay = false;
      },
      onEnded: function () {
        this.record_num++;
        if (this.record_num <= this.record_num_count.length - 1) {  //判断还有没有未播放的片段录播
          this.play();
        } else {
          if (this.islive) { // 直播
            this.islive = false;
            this.isrecord = false;
          } else { // 录播
            this.islive = false;
            this.isrecord = true;
          }
        }
      },
      onStalled: function () {
        e.preventDefault();
        e.stopPropagation();
      },
      // 点赞
      likeChannel: function () {
      },
      // 取消点赞
      cancelLikeChannel: function () {
      }
    },
    filters: {
      eleLevel: function (val) {
        let h = ''
        if (brower) {
           h = Tool.Tag.initLevel({level: val, type: 1})
        }
        return h
      },
      eleTag: function (gender, age) {
        let t = ''
        if (brower) {
          t = Tool.Tag.initTag({gender: gender, age: age, background: '#536af8', type: 2})
        }
        return t
      },
      constellation: function (xz) {
        let c = ''
        if (brower) {
          c = Tool.Tag.initTag({instruct: xz,background: '#986dff', type: 3})
        }
        return c
      },
      anchorType: function (zhuboType) {
        let a = ''
        if (brower)
          a = Tool.Tag.initTag({instruct: zhuboType,background: '#2dd12d', type: 4})
        return a
      },
      lableTag: function (labelArr) {
        let l = ''
        if (brower)
          l = Tool.Tag.initLabel({labelArr: labelArr})
        return l
      }
    }
  }
</script>