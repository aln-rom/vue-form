<template>
  <div class="error">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.33871C4.31967 1.33871 1.33301 4.32537 1.33301 8.00537C1.33301 11.6854 4.31967 14.672 7.99967 14.672C11.6797 14.672 14.6663 11.6854 14.6663 8.00537C14.6663 4.32537 11.6797 1.33871 7.99967 1.33871ZM7.99967 8.67204C7.63301 8.67204 7.33301 8.37204 7.33301 8.00537V5.33871C7.33301 4.97204 7.63301 4.67204 7.99967 4.67204C8.36634 4.67204 8.66634 4.97204 8.66634 5.33871V8.00537C8.66634 8.37204 8.36634 8.67204 7.99967 8.67204ZM7.33301 10.0054V11.3387H8.66634V10.0054H7.33301Z" fill="black"/>
      </mask>
      <g mask="url(#mask0)">
        <rect width="16" height="16" fill="#E1604D"/>
      </g>
    </svg>
    <div class="error__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['error'],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>


<style lang="scss" scoped>
  .error{
    max-width: 100%;
    margin: 4px 0;
    height: 36px;
    padding: 0 16px 0;
    background: rgba(225, 96, 77, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: normal;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 20px;
    font-size: 13px;
    color: #E1604D;
    flex-wrap: wrap;
    &__content {
      margin: 0 4px;
    }
  }
</style>
