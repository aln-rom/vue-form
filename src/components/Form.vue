<template>
  <div class="container">
    <div class="container__logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="69" viewBox="0 0 60 69" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9961 0.0067258L29.9923 0L0 17.2478V51.7432H0.00514469L0 51.7522L29.9923 69L29.9961 68.9933L30 69L59.9923 51.7522L59.9871 51.7432H60V17.2478H59.9923L30 0L29.9961 0.0067258ZM51.3421 22.2313L51.3244 22.2211L29.9968 34.4861L29.9958 34.4845L29.9952 34.4857L8.66785 22.2211L8.65788 22.2269V46.7731L29.9958 59.0442L51.3418 46.7687V22.2313H51.3421ZM29.9961 24.5284L17.326 17.2421L29.9961 9.95579L42.6662 17.2421L29.9961 24.5284Z" fill="#6369FF"/>
      </svg>
    </div>
    <div class="form">
      <div class="form__header__buttons">
        <router-link :to="links.link1" class="active__button" >
          <slot name="link1"></slot>
        </router-link>
        <router-link :to="links.link2">
          <slot name="link2"></slot>
        </router-link>
      </div>
      <div class="form__text">
        <slot name="text"></slot>
      </div>
      <div class="form__inputs">
        <slot name="inputs"></slot>
      </div>
      <div class="form__link">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['links'],
  components: {
  },
  data () {
    return {
      active: 'login'
    }
  },
}
</script>


<style lang="scss" scoped>
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
  .form {
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
        > a {
          font-weight: 600;
          margin: 0 5px 0;
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
    &__text {
      margin: 32px 24px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #545D69;
    }
    &__inputs {
      margin: 0 32px;
    }
    &__link {
      text-align: center;
    }
  }

  .active__button {
    color: #6369FF !important;
  }
</style>
