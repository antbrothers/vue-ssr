<template>
  <div class=''>
    <input type="text" v-model='deviceId' placeholder="请输入deviceId">
    <input type="text" v-model='ctoken' placeholder="请输入ctoken">
    <input type="text" v-model='utoken' placeholder="请输入utoken">
    <button @click='login'>模拟登录</button>
    <button @click='ticket()'>周排行版</button>
    <button @click="personal()">个人排行</button>
    <button @click="order()">排行榜2</button>
    <button @click="reward()">赏金榜</button>
    <button @click="fund()">基金页8点</button>
    <button @click="school()">校花驾到</button>
    <button @click="snh48()">snh48</button>
    <button @click="songLi()">送礼版</button>
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
        ctoken: 'Cuu_gB1b0ahkYZtJXrYo0SXlYkMKzPsgzlGz7LYdv61VdX18VeQAOsrI3ri3zgxxDicLBrAxSdd9uEdGNrAaSuim7-O_wxx5MRbL4JpMFAIL7xpyyNui3UiNQSnN0v6yARZNs0AhqneDczg_8PBZXHJ7yyQvG362Jt1CHpWK87Q',
        utoken: 's3wlV4neEHtR-7bXjPv8RSXEzQJw5HIOi7i9QFQT3Wyizhu4WMiqW62d_Ei8DTy7CF0XoE_WmvU4i9dIzbR6IHHmw0JF0xVKgfmm5kXAY4DCJmY5bxZ3lhVq3HG-oXXjen7ZU42epKz_dni_0N2zQDP440I6DufO5obYfxkbRfikhl3Cnj-8gQxs0DyrJb4KWMja-3F-10FQCtTeEzt8xAZXHYVratYfdOHfN1A4liRLt4sVS8oQNplk3EN7sr0CFbYx8ouLjZcreg2DjpXzmTFbTsGo0wuKOvhBv6XnjjfFiQYcEHupww2TJRh-HEsy0q1nTf1BzOZdUiludAfiSWUUnlZ4jZHXpYomu5lEh4A'
        // ctoken: 'WFczTlKQoi2w5hLEgagdfu0m8jeVG0yGUunZ8R2egEoA08aNLqJbNVwxpp8d-9Nq9SNpcKYFquqyAoRZuweES_rKRAOND86SzLlPpBucg2Hmje3FWVGljOQhOxTwrU3Qi9QyguHe8tkYFJRRywN5YiaBoeIIX_qsbx-awDI6r4Y',
       // utoken: 's3wlV4neEHu-Iv5MU9v6_dJEo6xmAXlyIZZYOpF_Y7uC792bM6ryPp0xBKnhJGZuOX1tybG9amGKFmbaOXeTrB6aWnipfDvLAXIOcs7xzVnAHv445EfGU82P1zl6xnvjnF9UVbCJgRcUUrG8i6iL1-_2pMT28dGokAiZREHHqXZ4UpZyguSEBxJJYnI1sGq7STWN8hMFb7AgWAaeOVZcVYmAIP16YeyrMdJJpR4SZHsfi6i14An-jTgtN5mffSZugSbeSN_uQUPX-oI-HjjnsgyeiCQt1Wmsu3v58qJjX8b2vSFSeE7CIg'
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
      ticket () {
        this.$router.push({path: '/water/ticket'})
      },
      personal () {
        this.$router.push({path: '/water/personal/1076014682057634'})
      },
      fund () {
        this.$router.push({path: '/short/fund'})
      },
      school () {
        this.$router.push({path: '/opr/school'})
      },
      snh48 () {
        this.$router.push({path: '/opr/snh48'})
      },
      order () {
        this.$router.push({path: '/water/ranking'})
      },
      reward () {
        this.$router.push({path: '/water/reward'})
      },
      songLi () {
        this.$router.push({path: '/water/giving/1076014682057634'})
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
