<template>
  <div class="main-button">
    <button @click="seconds = 60">
      Send again {{times}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'timerbutton',
  props: ['timer'],
  data () {
    return {
      times: "",
      seconds: 60
    }
  },
  methods: {
    startTimer() {
        setInterval(this.countDown, 1000);
    },
    countDown() {
      if (this.seconds > 0) {
        this.seconds += - 1
        this.times = "in 00:" + this.seconds
      } else {
        this.times = ""
      }
    }
  },
    mounted () {
      if (this.timer === true)
      {
          this.startTimer()
      }

    }
}
</script>


<style lang="scss" scoped>
  .main-button{
    margin: 32px 0;
    > button {
      font-style: normal;
      font-weight: 600;
      text-align: center;
      height: 44px;
      width: 100%;
      border: 2px solid #6369FF;
      box-sizing: border-box;
      color: #6369FF;
      font-size: 18px;
      line-height: 28px;
    }
    > button :active, :hover, :focus {
      outline: 0;
      outline-offset: 0;
    }
  }
</style>
