<template>
  <div class="login-box__wrapper">
    <div class="login-box">
      <h2>Sign in</h2>
      <form autocomplete="off" @submit="handleSubmit">
        <form-group
          v-for="(input, index) in data"
          :classname="[
            'form-group__custom',
            {
              'is-edit': isEditInput,
            },
          ]"
          :label="input.name"
          :key="index"
          :errorText="errors[input.id]"
        >
          <base-input
            :id="input.id"
            :type="input.type"
            :required="input.required"
            :value="userInfo[input.id]"
            :onChange="handleChangeInput"
            :reverseLabel="true"
            :isEdit="isEditInput"
            :onBlur="handleBlur"
            :onKeydown="handleKeydown"
          />
        </form-group>
        <div class="wrapped-btn">
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div v-if="isProgressState" class="loader-small"></div>
            SIGN IN
          </button>
          <div>
            <router-link to="/user/register">Create a new account</router-link>
            <span>or</span>
            <router-link to="/">Go to homepage</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../../components/BaseInput";
import FormGroup from "../../../components/FormGroup";
import Validate from "../../../utils/validate";
import { toastMessage } from "../../../utils/notification"
import { VALIDATION_RULES } from "../../../utils/constants";
import { CONFIG_TOAST } from '../../../utils/constants'
import { dataInputLogin } from "../constants";
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseInput,
    FormGroup,
  },
  data() {
    return {
      data: dataInputLogin,
      userInfo: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      isEditInput: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'errorsAuth', 'userLogin', 'isProgress']),
    isAuthenticatedState() {
      return this.isAuthenticated
    },
    isProgressState() {
      return this.isProgress
    },
    getErrorsState() {
      return this.errorsAuth
    },
    getUserLoginState() {
      return this.userLogin
    }
  },
  methods: {
    ...mapActions('auth', ['getUserRequest', 'loginUserRequest', 'progress']),
    async handleSubmit(e) {
      e.preventDefault();
      this.progress()
      if(this.validField()) {
        const {email, password} = this.userInfo
        await this.loginUserRequest({email, password})
        const handleClickToastSuccess = () => {
          this.$router.push('/')
        }
        const handleClickToastFail = () => {
          this.userInfo = {
            email: "",
            password: "",
          }
        }

        // toast props: type, message, options, customMsg, handleClickToast
        if(this.isAuthenticatedState) {
          await toastMessage(
            "success",
            `Welcome ${this.userLogin.name}`,
            {...CONFIG_TOAST, duration: 5000},
            "Go to homepage",
            handleClickToastSuccess
          )
        } else {
          await toastMessage(
            "error",
            this.getErrorsState?.login,
            {...CONFIG_TOAST, duration: 2000},
            "Enter again",
            handleClickToastFail
          )
        }
      }
    },
    handleChangeInput(id, e) {
      this.userInfo = {
        ...this.userInfo,
        [id]: e.target.value,
      };
      if(this.errors[id]) {
        const errorList = {...this.errors, [id]: ""}
        this.errors = {
          ...this.errors,
          ...errorList,
        }
      }
    },
    checkValidEmail(value) {
      const { EMAIL, REQUIRED } = VALIDATION_RULES;
      const validation = {
        name: "Email",
        rule: `${REQUIRED}|${EMAIL}`,
        messages: {
          [REQUIRED]: "",
        }
      };
      return Validate.checkValidate(value, validation);
    },
    checkValidPassword(value) {
      const { REQUIRED, MIN, MAX } = VALIDATION_RULES;
      const validation = {
        name: "Password",
        rule: `${REQUIRED}|${MIN}:8|${MAX}:30`,
        messages: {
          [REQUIRED]: "",
          [MIN]: "",
          [MAX]: ""
        }
      };
      return Validate.checkValidate(value, validation);
    },
    validField() {
      let errorList = {}
      const { email, password } = this.userInfo
      errorList.email = this.checkValidEmail(email)?.errorMes
      errorList.password = this.checkValidPassword(password)?.errorMes
      this.errors = {
        ...errorList
      }
      return !Object.keys(errorList).some(key => errorList[key])
    },
    handleBlur() {},
    handleKeydown() {}
  },
  watch: {
    userInfo(value) {
      if (value.email || value.password) {
        this.isEditInput = true;
      } else {
        this.isEditInput = false;
      }
    }
  },
  destroyed() {
    this.$toasted.clear()
  }
};
</script>

<style lang="scss">
@import "../../../assets/sass/abstracts/_variables.scss";



.login-box__wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient($hover__color--primary, $hover__color--secondary);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  transition: 0.2s all;

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: $white;
    text-align: center;
    font-size: 3rem;
  }

  form {
    .form-group__custom {
      position: relative;
      flex-direction: column-reverse;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: $white;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid $white;
        outline: none;
        background: transparent;
        &:focus ~ label {
          top: -20px;
          left: 0;
          color: $hover__color--secondary;
          font-size: 12px;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: $white;
        pointer-events: none;
        transition: 0.5s;
      }

      &.is-edit {
        input ~ label {
          top: -20px;
          left: 0;
          color: $hover__color--secondary;
          font-size: 12px;
        }
      }
    }

    .wrapped-btn {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 20px;
      button {
        position: relative;
        display: inline-block;
        padding: 10px 40px;
        color: $hover__color--primary;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        letter-spacing: 4px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-bottom: 20px;
        background: transparent;

        .loader-small {
          margin: 0;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 10px;
        }

        &:hover {
          color: $white;
          transform: scale(1.05);
          border-radius: 5px;
        }

        span {
          position: absolute;
          display: block;
        }

        span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim1 1s linear infinite;
        }

        span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim2 1s linear infinite;
          animation-delay: 0.25s;
        }

        span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            270deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim3 1s linear infinite;
          animation-delay: 0.5s;
        }

        span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            360deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim4 1s linear infinite;
          animation-delay: 0.75s;
        }
      }

      div {
        span {
          margin: 0 8px;
        }
      }

      a {
        color: $white;
      }
    }
  }
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
