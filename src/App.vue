<template>
  <div class="container">
    <div class="container__logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="69" viewBox="0 0 60 69" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9961 0.0067258L29.9923 0L0 17.2478V51.7432H0.00514469L0 51.7522L29.9923 69L29.9961 68.9933L30 69L59.9923 51.7522L59.9871 51.7432H60V17.2478H59.9923L30 0L29.9961 0.0067258ZM51.3421 22.2313L51.3244 22.2211L29.9968 34.4861L29.9958 34.4845L29.9952 34.4857L8.66785 22.2211L8.65788 22.2269V46.7731L29.9958 59.0442L51.3418 46.7687V22.2313H51.3421ZM29.9961 24.5284L17.326 17.2421L29.9961 9.95579L42.6662 17.2421L29.9961 24.5284Z" fill="#6369FF"/>
      </svg>
    </div>
    <div class="auth">
      <div class="auth__header__buttons">
        <button v-if="active === 'pass_rec'" :class="{active__button: active === 'pass_rec'}" @click="active = 'pass_rec'">Password recovery</button>
        <button v-if="active === 'signup'" :class="{active__button: active === 'signup'}" @click="active = 'signup'">Sign up</button>
        <button :class="{active__button: active === 'login'}" @click="active = 'login'" >Log in</button>
        <button v-if="active === 'login'" :class="{active__button: active === 'signup'}" @click="active = 'signup'">Sign up</button>
      </div>
      <Login v-if="active === 'login'" @recovery="active = 'pass_rec'"/>
      <Signup v-if="active === 'signup'"/>
      <PassRec v-if="active === 'pass_rec'"/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import PassRec from './components/PassRec.vue'

export default {
  name: 'App',
  components: {
      Login,
      Signup,
      PassRec
  },
  data () {
    return {
      active: 'login'
    }
  },
}
</script>

<style lang="scss">
  body {
    font-family: 'Raleway', sans-serif;
    background: #E5E5E5;
  }
  button {
    font-family: 'Raleway', sans-serif;
  }
  .container {
    margin: auto;
    align-items: center;
    flex-wrap: wrap;
    width: 33%;
    &__logo {
      margin: 0px auto 24px;
      align-items: center;
      flex-wrap: wrap;
      width: 60px;
    }
  }
  .auth {
    border: 5px solid #6369FF;
    box-sizing: border-box;
    padding: 32px;
    &__header {
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #6369FF;
      &__buttons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        > button {
          font-weight: 600;
          font-size: 24px;
          line-height: 130%;
          border: none;
          outline: none;
          cursor: pointer;
          background: none;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #858C94;
        }
      }
    }
  }

  .active__button {
    color: #6369FF !important;
  }
</style>
