<template>
  <div class="password">
    <Form :links="links">
      <template #inputs>
        <div v-if="step === 1">
          <Email :error="errors.email" @Data="email = $event"></Email>
          <MainButton @checkData="checkData" :name="'Continue'" :css="'blue'"></MainButton>
        </div>
        <div v-if="step === 2">
          <code-n :error="errors.code" @Data="code = $event, codeData()"></code-n>
          <MainButton
                      :name="!sendAgain ? 'Send Again' : 'Send Again in '+ seconds + ' s'"
                      :css="!sendAgain ? 'blue' : 'outline'"
                      @checkData="sendEmail"
          ></MainButton>
        </div>
        <div v-if="step === 3">
          <password-input :error="errors.password" :name="'Password'" @Data="password = $event"></password-input>
          <password-input :error="errors.passwordrep" @Data="passwordrep = $event" :name="'Repeat password'"></password-input>
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
export default {
  name: 'Password',
  components: {
    Form,
    Email,
    CodeN,
    PasswordInput,
    MainButton
  },
  data () {
    return {
      links: [
        { title: "Password recovery", path: "/password", class: "active"},
        { title: "Login", path: "/login", class: "inactive"}
      ],
      step: 1,
      message: "",
      passwordrep: "",
      errors: { email: null, password: null, passwordrep: null, code: null },
      sendAgain: false,
      seconds: 10
    }
  },
  methods: {
    checkData() {
      this.errors.email = null
      if (this.email === "" || !this.email) {
        this.errors.email = "Please enter your email"
      }  else if (this.email) {
          var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (check.test(this.email) === false) {
              this.errors.email = "Invalid email format"
          } else {
            this.step = 2
            this.startTimer()
          }
      }
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
    checkPass () {
      this.errors.password = null
      this.errors.passwordrep =  null
        if (this.password === "") {
            this.errors.password = "Please enter your password"
        } else if (this.passwordrep === "") {
            this.errors.passwordrep = "Please repeat your password"
        } else if (this.password != this.passwordrep) {
        this.errors.passwordrep = "Password mismatch"
      } else {
        this.errors.passwordrep = null
      }
    },
    codeData () {
      this.errors.code = null
      if (this.code.length > 3) {
        if (this.code === '1234') {
          this.step = 3
          this.errors.code = null
        } else {
          this.errors.code = "Invalid code"
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
