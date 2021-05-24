<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  }
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
  a {
    text-decoration: none;
  }
  .label {
    margin: 12px 0 0 ;
    position: relative;
    background-color: #E5E5E5;
    display: inline-block;
    width: 100%;
    > label :active, :hover, :focus {
      outline: 0;
      outline-offset: 0;
    }
    &__text {
      left: 10px;
      padding: 0 10px;
      top: 10px;
      z-index: 2;
      width: auto;
      position: relative;
      max-width: 40%;
      background-color: #E5E5E5;
      color: #858C94;
      display: inline-block;
    }
    &__input {
      position: relative;
      border: 1px solid #858C94;
      background-color: #E5E5E5;
      height: 48px;
      > input {
        width: 100%;
        top: 0;
        padding: 0 16px;
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        font-size: 16px;
        height: 48px;
        line-height: 150%;
        background: #E5E5E5;
        box-sizing: border-box;
        border: none;
      }
      ::placeholder {
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        display: flex;
        align-items: center;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #DADEE3;
      }
      &__password-control {
        cursor: pointer;
        position: relative;
        bottom: 80%;
        left: 87%;
        display: block;
        width: 24px;
        height: 24px;
        background: url("/assets/eye.svg");
      }
    }
  }
</style>
