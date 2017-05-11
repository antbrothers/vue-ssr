<template>
  <div class=''>
    <input type="text" v-model='deviceId' placeholder="请输入deviceId">
    <input type="text" v-model='ctoken' placeholder="请输入ctoken">
    <input type="text" v-model='utoken' placeholder="请输入utoken">
    <button @click='login'>模拟登录</button>
    <button @click="order()">排行榜2</button>
    <button @click="video()">视频播放插件</button>
  </div>
</template>
<script>
  import cookie from '../utils/cookie'
  const version = '1.3.0'
  const plat = 'iphone'
  const network = 'Wifi'
  export default {
    data () {
      return {
        deviceId: 'Z4c35mZmMzMyNzc1Njc0NDkzNjE0NmU2NDdmZGRjZmEyNGV8fDYwNjE4MzYyMDY5NjY2OA=ab49=',
        ctoken: 'Ilf-74_j7yGwbuZIRdQTrzFi11eWH0KODRcSKH71RFjdRXR32aZefRj6ltiJkiLEQHYUXF3lRpo4H2-tSZYL0ZP_yEl7FaoapcjMmW1Aq1orSjTskBCfma7QiZgjBlQmV2pWn36pWZBmoxV_DfMPFPCclwYFYv3-cMz-YgzcvPI',
        utoken: 's3wlV4neEHtR-7bXjPv8RSXEzQJw5HIOi7i9QFQT3Wyizhu4WMiqW62d_Ei8DTy7CF0XoE_WmvU4i9dIzbR6IHHmw0JF0xVKgfmm5kXAY4DCJmY5bxZ3lrzxao6xbdqgEO_GKjcx-jK462ioJBjvHMACxualq60H4nYipmvaBai-snE3yopeRaUTZjXiz5dprzqw_O6jh_IIylkOSaOxTqczl7eW8s3tEKQyoYSse88gCX3zyihDqs1mRFPo72cYiKoKNGMo772wNQsvANFZCIZC7qwqnxBRifQEl_7s8ISg_5rMXBIz85boNS0BlYDgapADuGqZwKjcPiX6G3V0OTtfNCxsGSkGssS85qIUM9Y'
      }
    },
    methods: {
      login () {
        var _this = this
        cookie('device_id', _this.deviceId, {'path': '/'})
        cookie('ctoken', _this.ctoken, {'path': '/'})
        cookie('utoken', _this.utoken, {'path': '/'})
        cookie('version', version, {'path': '/'})
        cookie('plat', plat, {'path': '/'})
        cookie('network', network, {'path': '/'})
      },
      order () {
        this.$router.push({path: '/water/ranking'})
      },
      video () {
        this.$router.push({path: '/video?id=3382&type=2'})
      }
    }
  }

</script>

<style scoped>
  button{
    width: 500px;
    margin: 10px auto;
    display: block;
    line-height: 90px;
  }
</style>
