<template>
  <div class="label">
    <label>
      <div class="label__text">
        Email
      </div>
      <div class="label__input">
        <input type="text" placeholder="yourmail@mail.com" v-model="email" name="email" @input="$emit('Data', email)">
      </div>
    </label>
    <Error v-if="error">
      {{error}}
    </Error>
  </div>
</template>

<script>
  import Error from '../errorPlate.vue'
  export default {
    name: 'email',
    props: ['error'],
    components: {
      Error
    },
    data () {
      return {
        email: ""
      }
    },
    methods: {
    }
  }
</script>


<style lang="scss" scoped>
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
      > input :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
      }
    }
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
</style>
