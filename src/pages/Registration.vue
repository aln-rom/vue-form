<template>
  <div class="login">
    <FormBlock :links="links">
      <template #inputs>
        <form v-if="step === 1">
          <email :error="errors.email" @Data="email = $event"></email>
          <password :error="errors.password" @Data="password = $event" :name="'Password'"></password>
          <password :error="errors.passwordrep" @Data="passwordrep = $event" :name="'Repeat password'"></password>
          <main-button @checkData="checkData" :name="'Continue'" :css="'blue'"></main-button>
        </form>
        <div v-if="step === 2">
          <code-n :error="errors.code" @Data="code = $event"></code-n>
          <main-button
              :name="!sendAgain ? 'Send Again' : 'Send Again in '+ seconds + ' s'"
              :css="!sendAgain ? 'blue' : 'outline'"
              @checkData="sendEmail"
          ></main-button>
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
    </FormBlock>
  </div>
</template>

<script>
import FormBlock from '../components/Form.vue'
import Email from '../components/inputs/email.vue'
import Password from '../components/inputs/password.vue'
import CodeN from '../components/inputs/code.vue'
import MainButton from '../components/buttons/mainButton.vue'
import Error from '../components/errorPlate.vue'
export default {
  name: 'Login',
  components: {
    FormBlock,
    Email,
    Password,
    CodeN,
    MainButton,
    Error
  },
  data () {
    return {
      links: [
        { title: "Sign up", path: "/registration", class: "active"},
        { title: "Login", path: "/login", class: "inactive"}
      ],
      step: 1,
      sendAgain: false,
      errors: { email: null, password: null, passwordrep: null, code: null },
      timer: false,
      seconds: 60
    }
  },
  methods: {
    checkData () {
      this.check()
      if (this.errors.email === null && this.errors.password === null && this.errors.passwordrep == null )  {
          this.step = 2
          this.startTimer()
      }
    },
    check () {
      this.clearErrors()
      if ( (this.email === "" || !this.email) && (this.password === "" || !this.password)) {
          this.errors.email = "Please enter your email and password"
      } else if (this.email === "" || !this.email) {
          this.errors.email = "Please enter your email"
      } else if (this.password === "" || !this.password) {
          this.errors.password = "Please enter your password"
      } else if (this.passwordrep === "" || !this.passwordrep) {
          this.errors.passwordrep = "Please repeat your password"
      } else if (this.email) {
        var checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (checkMail.test(this.email) === false) {
            this.errors.email = "Invalid email format"
        }
      }
    },
    clearErrors () {
      this.errors.code = null
      this.errors.password = null
      this.errors.passwordrep =  null
      this.errors.email = null
    },
    sendEmail () {
      if ( this.seconds <= 0 ) {
        this.sendAgain = true
        this.seconds = 60
      }
    },
    startTimer() {
      if (this.seconds > 0 ) {
        this.sendAgain = true
      } else {
        this.sendAgain = false
      }
      setInterval(this.countDown, 1000);
    },
    countDown() {
      if (this.seconds > 0) {
        this.seconds += - 1
      } else {
        this.sendAgain = false
      }
    },
    codeData () {
      this.clearErrors()
      if (this.code === '1234') {
        this.step = 3
        this.errors.code = null
      } else {
        this.errors.code = "Invalid code"
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .login {
  }
</style>
