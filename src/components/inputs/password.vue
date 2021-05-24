<template>
  <div class="label">
    <label for="password">
      <div class="label__text">
        {{name}}
      </div>
      <div class="label__input">
        <input id="password" :type="showpass ? 'text' : 'password'" placeholder="****" v-model="password" name="password" @input="$emit('Data', password)">
        <span href="#" class="label__input__password-control" @click="showpass = !showpass"></span>
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
  props: ['error', 'name'],
  components: {
      Error
  },
  data () {
    return {
      password: "",
      showpass: 'true'
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
</style>
