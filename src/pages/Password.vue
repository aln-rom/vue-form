<template>
  <div class="password">
    <Form v-if="step === 1" :links="links">
      <template #link1>
        <span>Password recovery</span>
      </template>
      <template #link2>
        <span>Login</span>
      </template>
      <template #inputs>
        <Email :error="emailerror" @Data="emailData">
        </Email>
        <MainButton @checkData="checkData">
          Continue
        </MainButton>
      </template>
    </Form>
    <Form v-if="step === 2" :links="links">
      <template #link1>
        <span>Password recovery</span>
      </template>
      <template #link2>
        <span>Login</span>
      </template>
      <template #text>
        <span>A letter with a code will be sent to the mail@mail.com. Enter it in the box below</span>
      </template>
      <template #inputs>
        <code-n :error="codeerror" @Data="codeData">
        </code-n>
        <timer-button :timer="timer">
        </timer-button>
      </template>
    </Form >
    <Form v-if="step === 3" :links="links">
      <template #link1>
        <span>Password recovery</span>
      </template>
      <template #link2>
        <span>Login</span>
      </template>
      <template #inputs>
        <password-input :error="passworderror" @Data="passData">
          Password
        </password-input>
        <password-input :error="passwordreperror" @Data="passrepData">
          Password repeat
        </password-input>
        <MainButton @checkData="checkPass">
          Save new password
        </MainButton>
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
      links: {
          link1:  "/password", link2: "/login"
      },
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
      timer: false
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
             this.step = 2
              this.timer = true
          }
      }
    },
    checkPass () {
        this.passworderror = null
        this.passwordreperror=  null
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
  .password {

  }
</style>
