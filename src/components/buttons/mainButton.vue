<template>
  <button :class="{blue: css == 'blue', outline: css == 'outline' }" class="main__button" @click="$emit('checkData')">
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'button',
  props: ['name', 'css'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
 .main__button {
   margin: 32px 0;
   text-align: center;
   height: 44px;
   width: 100%;
   border: none;
   font-weight: 600;
   font-size: 18px;
   line-height: 28px;

   > button :active, :hover, :focus {
     outline: 0;
     outline-offset: 0;
   }
 }
   .blue {
     color: #FDFDFD;
     background: #6369FF;
 }
   .outline {
     border: 2px solid #6369FF;
     color: #6369FF;
   }
</style>
