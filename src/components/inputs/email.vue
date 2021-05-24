<template>
  <div class="label">
    <label for="email">
      <div class="label__text">
        Email
      </div>
      <div class="label__input">
        <input id="email"
               type="text"
               placeholder="yourmail@mail.com"
               v-model="email"
               name="email"
               @input="$emit('Data', email)">
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
</style>
