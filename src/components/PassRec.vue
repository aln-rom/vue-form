<template>
  <div class="pass">
    <div v-if="step === 1">
      <div class="pass__input">
        <input type="text" placeholder="yourmail@mail.com" name="email" v-model="email">
        <div class="pass__input__label">
          <label>E-mail</label>
        </div>
      </div>
      <div class="pass__error" v-if="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.33871C4.31967 1.33871 1.33301 4.32537 1.33301 8.00537C1.33301 11.6854 4.31967 14.672 7.99967 14.672C11.6797 14.672 14.6663 11.6854 14.6663 8.00537C14.6663 4.32537 11.6797 1.33871 7.99967 1.33871ZM7.99967 8.67204C7.63301 8.67204 7.33301 8.37204 7.33301 8.00537V5.33871C7.33301 4.97204 7.63301 4.67204 7.99967 4.67204C8.36634 4.67204 8.66634 4.97204 8.66634 5.33871V8.00537C8.66634 8.37204 8.36634 8.67204 7.99967 8.67204ZM7.33301 10.0054V11.3387H8.66634V10.0054H7.33301Z" fill="black"/>
          </mask>
          <g mask="url(#mask0)">
            <rect width="16" height="16" fill="#E1604D"/>
          </g>
        </svg>
        <div class="pass__error__content">
          {{error}}
        </div>
      </div>
      <div class="pass__btn">
        <button @click="toStepTwo()">Continue</button>
      </div>
    </div>

    <div v-if="step === 2">
      <div class="pass__text">
        A letter with a code will be sent to the {{email}}. Enter it in the box below
      </div>
      <div class="pass__input">
        <input type="text" placeholder="0000" v-model="code" @input="checkCode()">
        <div class="pass__input__label">
          <label>Code</label>
        </div>
      </div>
      <div class="pass__error" v-if="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.33871C4.31967 1.33871 1.33301 4.32537 1.33301 8.00537C1.33301 11.6854 4.31967 14.672 7.99967 14.672C11.6797 14.672 14.6663 11.6854 14.6663 8.00537C14.6663 4.32537 11.6797 1.33871 7.99967 1.33871ZM7.99967 8.67204C7.63301 8.67204 7.33301 8.37204 7.33301 8.00537V5.33871C7.33301 4.97204 7.63301 4.67204 7.99967 4.67204C8.36634 4.67204 8.66634 4.97204 8.66634 5.33871V8.00537C8.66634 8.37204 8.36634 8.67204 7.99967 8.67204ZM7.33301 10.0054V11.3387H8.66634V10.0054H7.33301Z" fill="black"/>
          </mask>
          <g mask="url(#mask0)">
            <rect width="16" height="16" fill="#E1604D"/>
          </g>
        </svg>
        <div class="pass__error__content">
          {{error}}
        </div>
      </div>
      <div class="pass__btn2">
        <button>Send again {{message}}</button>
      </div>
    </div>

    <div v-if="step === 3">
      <div class="pass__input">
        <input type="password" placeholder="****" v-model="pass" v-show="!showPass">
        <input type="text" placeholder="****" v-model="pass" v-show="showPass">
        <div class="pass__input__label">
          <label>Password</label>
        </div>
        <span href="#" class="pass__input__password-control" @click="showPass = !showPass"></span>
      </div>
      <div class="pass__input">
        <input type="password" placeholder="****" v-model="pass_rep" v-show="!showPass" @input="checkPass()">
        <input type="text" placeholder="****" v-model="pass_rep" v-show="showPass" @input="checkPass()">
        <div class="pass__input__label">
          <label>Repeat password</label>
        </div>
        <span href="#" class="pass__input__password-control" @click="showPass = !showPass"></span>
      </div>
      <div class="pass__error" v-if="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.33871C4.31967 1.33871 1.33301 4.32537 1.33301 8.00537C1.33301 11.6854 4.31967 14.672 7.99967 14.672C11.6797 14.672 14.6663 11.6854 14.6663 8.00537C14.6663 4.32537 11.6797 1.33871 7.99967 1.33871ZM7.99967 8.67204C7.63301 8.67204 7.33301 8.37204 7.33301 8.00537V5.33871C7.33301 4.97204 7.63301 4.67204 7.99967 4.67204C8.36634 4.67204 8.66634 4.97204 8.66634 5.33871V8.00537C8.66634 8.37204 8.36634 8.67204 7.99967 8.67204ZM7.33301 10.0054V11.3387H8.66634V10.0054H7.33301Z" fill="black"/>
          </mask>
          <g mask="url(#mask0)">
            <rect width="16" height="16" fill="#E1604D"/>
          </g>
        </svg>
        <div class="pass__error__content">
          {{error}}
        </div>
      </div>
      <div class="pass__btn">
        <button>Save new password</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
     step: 1,
     email: null,
     code: null,
     timer: 60,
     message: "",
     error: null,
     showPass: false,
     pass: "",
     pass_rep: ""
    }
  },
    methods: {
      toStepTwo () {
        var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.email === null) {
          this.error = "Please enter your email"
        } else if ( check.test(this.email) === false ){
          this.error = "Invalid email format"
        } else {
          this.error = null
          this.step = 2
          this.startTimer()
        }
      },
      startTimer() {
         setInterval(this.countDown, 1000);
      },
      countDown() {
        var n = this.timer
          if (n > 0) {
            n = n - 1
            this.timer = n
            this.message = "in 00:" + n
        } else {
            this.message = ""
          }
      },
      checkCode () {
        if (this.code === '1234') {
            this.step = 3
            this.error = null
        } else {
            this.error = "Invalid code"
        }
      },
      checkPass () {
        if (this.pass != this.pass_rep) {
            this.error = "Password mismatch"
        } else {
            this.error = null
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .pass {
    padding: 24px 32px;
    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #545D69;
    }
    &__input {
      margin: 24px 0;
      border: 1px solid #858C94;
      background-color: #E5E5E5;
      height: 48px;
      > input {
        width: 100%;
        top: 0;
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        font-size: 16px;
        height: 48px;
        line-height: 150%;
        padding: 0 16px;
        background: #E5E5E5;
        box-sizing: border-box;
        border:none;
      }
      > input :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
      }
      &__label {
        padding: 0 10px;
        top: -58px;
        left: 10px;
        position: relative;
        background-color: #E5E5E5;
        max-width: 40%;
        width: auto;
        display: inline-block;
        > label {
          background-color: #E5E5E5;
          color: #858C94;
        }
        > label :active, :hover, :focus {
          outline: 0;
          outline-offset: 0;
        }
      }
      &__password-control {
        cursor: pointer;
        position: relative;
        top: -55px;
        left: 90%;
        display: block;
        width: 24px;
        height: 24px;
        background: url("../assets/eye.svg");
      }
    }
    &__error{
      max-width: 100%;
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
    &__btn {
      margin: 4px 0 0 0;
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
    &__btn2 {
      margin: 4px 0 0 0;
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
