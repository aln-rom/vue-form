<template>
  <div class="login">
    <Form :links="links">
      <template #inputs>
        <Email :error="emailerror"  @Data="email = $event"></Email>
        <password :error="passworderror" @Data="passData" :name="'Password'"></password>
        <main-button @checkData="checkData" :name="'Log in'" :css="'blue'"></main-button>
      </template>
      <template #router>
        <router-link class="login__link" to="/password">
          Forgot password?
        </router-link>
      </template>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import Email from '../components/inputs/email.vue'
import Password from '../components/inputs/password.vue'
import MainButton from '../components/buttons/mainButton.vue'
export default {
  name: 'Login',
  components: {
    Form,
    Email,
    Password,
    MainButton
  },
  data () {
    return {
      links: [
        { title: "Login", path: "/login", class: "active"},
        { title: "Registration", path: "/registration", class: "inactive"}
      ],
      password: "",
      emailerror : null,
      passworderror : null
    }
  },
  methods: {
    checkData () {
      console.log(this.email)
      this.emailerror = null
      this.passworderror = null
      this.passwordreperror = null
        if (this.email === "") {
        this.emailerror = "Please enter your email"
      } else if (this.password === "") {
        this.passworderror = "Please enter your password"
      } else if (this.email) {
        var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (check.test(this.email) === false) {
            this.emailerror = "Invalid email format"
        }
      }
    },
    passData (data) {
      this.password = data
    }
  }
}
</script>


<style lang="scss" scoped>
  .login {
      &__link {
        text-align: center;
        margin: 16px 0 0 0;
        background: #E5E5E5;
        height: 44px;
        width: 100%;
        border: none;
        color: #6369FF;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;
      }
  }
</style>
