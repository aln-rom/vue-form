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
</style>
