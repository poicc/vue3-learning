<template>
  <div class="bg row">
    <v-form v-model="valid" lazy-validation ref="form" class="col">
      <v-text-field filled rounded dense v-model="phone" required label="Phone" :rules="phoneRules"></v-text-field>
      <v-text-field
        filled
        rounded
        dense
        v-model="password"
        required
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <!-- 验证码 -->
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field filled rounded dense v-model="verifyCode" label="verifyCode" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <img class="verify" @click.prevent="getVerifyCode" :src="url" ref="codeImg" />
        </v-col>
      </v-row>

      <v-checkbox v-model="checkbox" label="同意协议？" required :rules="[(v) => !!v || '同意才能继续！']"></v-checkbox>
      <!-- <v-btn color="primary" min-width="100" min-height="40" rounded class="mr-4" @click="validate">验证</v-btn> -->
      <v-btn
        color="cyan darken-4"
        min-width="100"
        min-height="40"
        style="color: white"
        rounded
        class="mr-4"
        @click="submit"
        :disabled="!valid"
        >登录</v-btn
      >
      <v-btn min-width="100" min-height="40" color="blue-grey lighten-4" rounded @click="reset">重置</v-btn>
    </v-form>

    <v-overlay absolute z-index="5" class="mask"></v-overlay>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      valid: true,
      phone: '18851699003',
      password: '123123',
      checkbox: false,
      phoneRules: [(v) => !!v || '手机号不能为空', (v) => (v && v.length === 11) || '手机号必须为11位'],
      passwordRules: [
        (v) => !!v || '密码不能为空',
        (v) => (v && v.length >= 6 && v.length <= 16) || '密码长度必须在6-16之间',
      ],
      url: '',
      verifyCode: '',
    }
  },
  created() {
    if (this.phoneRules) {
      this.getVerifyCode()
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    getVerifyCode() {
      this.axios.get('/captcha?phone=' + this.phone, { responseType: 'blob' }).then((res) => {
        console.log(res)
        this.url = window.URL.createObjectURL(res.data)
      })
    },
    submit() {
      this.$refs.form.validate()
      this.axios({
        method: 'post',
        url: '/user/login',
        data: {
          phone: this.phone,
          password: this.password,
        },
      }).then((res) => {
        if (res.data.code == 1) {
          this.$layer.alert('登录成功')
          this.$store.commit('login', res.data.data)
          this.$store.commit('setAvatar', res.data.data.avatar)
          localStorage.setItem('login', res.data.data)
          this.$router.push('/index')
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  background: url('https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg');
  background-size: 100% 100%;
}
.mask {
  background-image: linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%);
  opacity: 0.6;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .col {
    flex: 0 0 30%;
    height: 390px;
    z-index: 10;
    border-radius: 10px;
    position: absolute;
    backdrop-filter: blur(14px) brightness(80%);
    width: 500px;
    padding: 30px;
    .verify {
      margin-bottom: 20px;
    }
  }
}
</style>