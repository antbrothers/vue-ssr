<template>
  <div id="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
    <div class='loading' v-if='isLoading'>
      <p class='tip-info'>加载中...</p>
    </div>
    <div class="mui-popup-backdrop mui-active" v-if='isLoading'></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      isLoading () {
        return this.$store.state.loading.isLoading
      }
    }
  }
</script>
<style lang="less" src="../static/css/flexible.less"></style>
<style lang='less' scoped>
  .loading {
    position: fixed;
    z-index: 50000;
    width: 240px;
    min-height: 240px;
    top: 360px;
    left: 50%;
    margin-left: -120px;
    text-align: center;
    border-radius: 15px;
    color: #fff;
    background: url(./assets/images/loading.gif) center 50px no-repeat;
    background-size: 80px;
    background-color: rgba(40, 40, 40, .75);
    .tip-info {
    margin-top: 66%;
    font-size: 28px;
    color: #fff;
  }
  }
</style>