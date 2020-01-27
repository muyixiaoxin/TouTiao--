<template>
<div class='tab-bar'>
<!-- 自路由出口 -->
<router-view></router-view>
<van-tabbar route>
  <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="chat" to="/qa">问答</van-tabbar-item>
  <van-tabbar-item icon="video" to="/video">视频</van-tabbar-item>
  <van-tabbar-item icon="manager" to="/my">
  {{$store.state.user?'我的':'未登录'}}
  </van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style scoped></style>
