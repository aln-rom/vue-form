<template>
  <div class="login">
    <Form :links="links">
      <template #inputs>
        <div v-if="step === 1">
          <Email :error="emailerror" @Data="emailData" error=""></Email>
          <password :error="passworderror" @Data="passData" :name="'Password'"></password>
          <password :error="passwordreperror" @Data="passrepData" :name="'Repeat password'"></password>
          <main-button @checkData="checkData" :name="'Continue'" :css="'blue'"></main-button>
        </div>
        <div v-if="step === 2">
          <code-n :error="codeerror" @Data="codeData"></code-n>
          <timer-button :timer="timer"></timer-button>
        </div>
        <div v-if="step === 3">
          <main-button :name="'Sign up'" :css="'blue'"></main-button>
        </div>
      </template>
      <template #text>
          <div v-if="step === 2">
            <span>A letter with a code will be sent to the mail@mail.com. Enter it in the box below</span>
          </div>
        <div v-if="step === 3">
          <span>All right! Welcome to the Qbik</span>
          </div>
      </template>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import Email from '../components/inputs/email.vue'
import Password from '../components/inputs/password.vue'
import CodeN from '../components/inputs/code.vue'
import MainButton from '../components/buttons/mainButton.vue'
import TimerButton from '../components/buttons/timerButton.vue'
import Error from '../components/errorPlate.vue'
export default {
  name: 'Login',
  components: {
    Form,
    Email,
    Password,
    CodeN,
    MainButton,
    TimerButton,
    Error
  },
  data () {
    return {
      links: [
        { title: "Sign up", path: "/registration", class: "active"},
        { title: "Login", path: "/login", class: "inactive"}
      ],
      step: 1,
      email: "",
      password: "",
      passwordrep: "",
      code: "",
      emailerror: null,
      passworderror: null,
      passwordreperror: null,
      codeerror: null,
      message: null,
      timer: false
    }
  },
  methods: {
    checkData () {
      this.check()
      if (this.emailerror === null && this.passworderror === null && this.passwordreperror == null )  {
          this.step = 2
          this.timer = true
      }
    },
    check () {
      this.emailerror = null
      this.passworderror = null
      this.passwordreperror = null
      if (this.email === "" && this.password === "") {
          this.emailerror = "Please enter your email and password"
      } else if (this.email === "") {
          this.emailerror = "Please enter your email"
      } else if (this.password === "") {
          this.passworderror = "Please enter your password"
      } else if (this.passwordrep === "") {
          this.passwordreperror = "Please repeat your password"
      } else if (this.email) {
        var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (check.test(this.email) === false) {
            this.emailerror = "Invalid email format"
        }
      }
    },
    startTimer() {
      setInterval(this.countDown, 1000);
    },
    countDown() {
      var n = 60
      if (n > 0) {
        n = n - 1
        this.message = "in 00:" + n
      } else {
        this.message = ""
      }
    },
    emailData (data) {
      this.email = data
    },
    passData (data) {
      this.password = data
    },
    passrepData (data) {
      this.passwordrep = data
    },
    codeData (data) {
      this.code = data
      if (this.code === '1234') {
        this.step = 3
        this.codeerror = null
      } else {
        this.codeerror = "Invalid code"
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .login {
  }
</style>
