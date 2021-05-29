<template>
  <div class="login">
    <Form :links="links">
      <template #inputs>
        <email
            :error="errors.email"
            @Data="email = $event"
        ></email>
        <password
            :error="errors.password"
            @Data="password = $event"
            :name="'Password'"
        ></password>
        <main-button
            @checkData="checkData"
            :name="'Log in'"
            :css="'blue'"
        ></main-button>
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
      errors: { email: null, password: null }
    }
  },
  methods: {
    checkData () {
      this.errors.email = null
      this.errors.password = null
        if (this.email === "" || !this.email) {
        this.errors.email = "Please enter your email"
      } else if (this.password === "" || !this.password) {
        this.errors.password = "Please enter your password"
      } else if (this.email) {
        var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (check.test(this.email) === false) {
            this.errors.email = "Invalid email format"
        }
      }
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
