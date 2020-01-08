<template>
  <div id="app">
    <p class="color">hellow world</p>
    <router-view></router-view>
    <p class="iconfont icon-bluetooth_link color"></p>
    <p class="iconfont color icon-erbihouke"></p>
    <p class="iconfont color icon-shengzhike"></p>
    <p class="iconfont color icon-bluetoothon"></p>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import url("~@/styles/variables.less");

.color {
  color: @color-primary;
  font-size: @fontsize;
}
</style>
