<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <ValidationObserver ref="form">
        <ValidationProvider name="手机号" rules="required|mobile" immediate>
          <van-field
            right-icon="question-o"
            placeholder="请输入手机号"
            class="iconfont icon-shouji"
            v-model="user.mobile"
          >
          <!-- <i class="icon icon-shouji" slot="left-icon"> </i> -->
          </van-field>
        </ValidationProvider>

         <ValidationProvider name="验证码" rules="required|code" immediate>
          <van-field class="iconfont icon-mima" placeholder="请输入验证码" v-model="user.code">
            <van-button
              slot="button"
              v-if="!isCountDownShow"
              size="small"
              round
              type="primary"
              class="send"
              @click="sendCode"
            >发送验证码</van-button>
            <van-count-down
              slot="button"
              :time="1000*6"
              v-else
              format=" ss s"
              @finish="isCountDownShow=false"
            />
            <!--  @finish = "isCountDownShow=false"  这里是 = false ;不是 : false     -->
          </van-field>
        </ValidationProvider>
    </ValidationObserver>
    <div class="loginButton">
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { login, getCode } from '@/api/user'
import { validate } from 'vee-validate'

export default {
  name: 'loginPage',
  components: {},
  props: {},
  data () {
    // data中定义一个变量来代表返回的数据(user),里面两个参数用来代表当前页面需要的的某部分
    return {
      user: {
        mobile: '', // 手机号********这两个数据要双向绑定到表单中
        code: '' // 验证码
      },
      isCountDownShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async login () {
      // 1.获取 表单数据
      const user = this.user
      // 2.验证表单数据
      const success = await this.$refs.form.validate()
      if (!success) {
        console.log('表单验证失败')
        const errors = this.$refs.form.errors
        for (let i in errors) {
          const item = errors[i]
          if (item[0]) {
            this.$toast(item[0])
            return
          }
        }
      }
      // 添加lodingtuan
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '登录中...',
        forbidClick: true // 是否禁止背景点击
      })
      // 3.请求登录
      try {
        // 成功时
        const { data } = await login(user)
        console.log('登录成功')
        // 存储用户token
        this.$store.commit('setuser', data.data)
        // 提示成功
        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (err) {
        // 失败时
        console.log(err, '登录失败')
        this.$toast.fail('失败了')
      }
      // 4.根据后台 返回结果执行后续操作
    },

    async sendCode () {
      try {
        const { mobile } = this.user
        // 1.验证手机号
        const validateResult = await validate(mobile, 'required|mobile', {
          name: '手机号'
        })
        if (!validateResult.valid) {
          console.log(validateResult)
          this.$toast(validateResult.errors[0])
          // this.$toast('手机号')
          return
        }
        // 2.请求发送短信
        const res = await getCode(mobile)
        console.log(res)
        // 3.收到响应 显示倒计时
        this.isCountDownShow = true
      } catch (err) {
        // console.log(err)
        this.$toast('请勿频繁操作,(づ￣ 3￣)づ')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.send {
  background: rgb(219, 219, 219);
  border: rgb(179, 179, 179);
  color: rgb(37, 37, 37);
}
.van-cell {
  align-items: center;
}
.icon-mima {
  height: 55px;
}
.loginButton {
  padding: 27px 16px;
  .van-button {
    width: 100%;
    background: #6db4fb;
  }
}
</style>
