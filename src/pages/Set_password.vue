<template>
  <div class="password">
    <Form :links="links">
      <template #inputs>
        <div v-if="step === 1">
          <Email :error="emailerror" @Data="emailData"></Email>
          <MainButton @checkData="checkData" :name="'Continue'" :css="'blue'"></MainButton>
        </div>
        <div v-if="step === 2">
          <code-n :error="codeerror" @Data="codeData"></code-n>
          <MainButton
                      :name="sendAgain ? 'Send Again' : 'Send Again in '+ seconds + ' s'"
                      :css="sendAgain ? 'blue' : 'outline'"
          ></MainButton>
        </div>
        <div v-if="step === 3">
          <password-input :error="passworderror" :name="'Password'" @Data="passData"></password-input>
          <password-input :error="passwordreperror" @Data="passrepData" :name="'Repeat password'"></password-input>
          <MainButton @checkData="checkPass" :name="'Save new password'" :css="'blue'"></MainButton>
        </div>
      </template>
      <template #text>
        <div v-if="step === 2">
          <span>A letter with a code will be sent to the mail@mail.com. Enter it in the box below</span>
        </div>
      </template>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import CodeN from '../components/inputs/code.vue'
import PasswordInput from '../components/inputs/password.vue'
import Email from '../components/inputs/email.vue'
import MainButton from '../components/buttons/mainButton.vue'
import TimerButton from '../components/buttons/timerButton.vue'
export default {
  name: 'Password',
  components: {
    Form,
    Email,
    CodeN,
    PasswordInput,
    MainButton,
    TimerButton
  },
  data () {
    return {
      links: [
        { title: "Password recovery", path: "/password", class: "active"},
        { title: "Login", path: "/login", class: "inactive"}
      ],
      step: 1,
      code: "",
      email: "",
      password: "",
      message: "",
      passwordrep: "",
      emailerror: null,
      codeerror: null,
      passworderror: null,
      passwordreperror: null,
      sendAgain: false,
      seconds: 60
    }
  },
  methods: {
    checkData() {
      if (this.email === "") {
        this.emailerror = "Please enter your email"
      }  else if (this.email) {
          var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (check.test(this.email) === false) {
              this.emailerror = "Invalid email format"
          } else {
            this.sendAgain = true
            this.step = 2
            this.startTimer()
          }
      }
    },
    startTimer() {
      this.seconds = 60
      setInterval(this.countDown, 1000);
    },
    countDown() {
      if (this.seconds > 0) {
        this.seconds += - 1
      } else {
        this.sendAgain = false
      }
    },
    checkPass () {
      this.passworderror = null
      this.passwordreperror =  null
        if (this.password === "") {
            this.passworderror = "Please enter your password"
        } else if (this.passwordrep === "") {
            this.passwordreperror = "Please repeat your password"
        } else if (this.password != this.passwordrep) {
        this.passwordreperror = "Password mismatch"
      } else {
        this.passwordreperror = null
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
      this.codeerror = null
      if (this.code.length > 3) {
        if (this.code === '1234') {
          this.step = 3
          this.codeerror = null
        } else {
          this.codeerror = "Invalid code"
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .password {

  }
</style>
