<template>
  <div class="label">
    <label for="code">
      <div class="label__text">
        Code
      </div>
      <div class="label__input">
        <input id="code" type="text" placeholder="0000" v-model="code" @input="$emit('Data', code)">
      </div>
    </label>
    <Error v-if="error">
      {{error}}
    </Error>
  </div>
</template>

<script>
import Error from "../errorPlate";
export default {
  name: 'codeN',
  props: ['error'],
  components: {
      Error
  },
  data () {
    return {
      code: ""
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
</style>
