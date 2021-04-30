<template>
  <div class="main-button">
    <button @click="$emit('checkData')">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'email',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
 .main-button{
   margin: 32px 0;
   > button {
     background: #6369FF;
     text-align: center;
     height: 44px;
     width: 100%;
     border: none;
     color: #FDFDFD;
     font-weight: 600;
     font-size: 18px;
     line-height: 28px;
   }
   > button :active, :hover, :focus {
     outline: 0;
     outline-offset: 0;
   }
 }
</style>
