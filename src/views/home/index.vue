<template>
<div class='home-container'>
  <!-- 导航栏 -->
     <van-nav-bar title="首页" />
  <!-- /导航栏 -->
<van-tabs v-model="active">
  <van-tab :title="channel.name" v-for="channel in userChannels " :key="channel.id">

  </van-tab>

</van-tabs>
</div>
</template>

<script>
import { getUserChannels } from '@/api/channel'

export default {
  name: 'HomePage',
  components: {},
  props: {},
  data () {
    return {
      active: 2,
      userChannels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserChannels()
  },
  methods: {
    async loadUserChannels () {
      try {
        const { data } = await getUserChannels()
        console.log(data)
        this.userChannels = data.data.channels
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped></style>
