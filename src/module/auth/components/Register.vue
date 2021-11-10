<template>
  <div class="login-box__wrapper">
    <div class="login-box">
      <h2>Create account</h2>
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
          :error-text="errors[input.id]"
        >
          <base-input
            :id="input.id"
            :label="input.name"
            :type="input.type"
            :required="input.required"
            :value="userInfo[input.id]"
            :onchange="handleChangeInput"
            :reverseLabel="true"
            :isEdit="isEditInput"
          />
        </form-group>
        <div class="wrapped-btn">
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div v-if="isProgressState" class="loader-small"></div> SIGN UP
          </button>
          <div>
            <router-link to="/user/login">Go to login</router-link>
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
import { VALIDATION_RULES } from '../../../utils/constants' 
import Validate from '../../../utils/validate'
import { dataInputRegister } from "../constants";
import { toastMessage } from '../../../utils/notification';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseInput,
    FormGroup,
  },
  data() {
    return {
      data: dataInputRegister,
      userInfo: {
        email: "",
        password: "",
        confirm_password: "",
      },
      errors: {
        email: "",
        password: "",
        confirm_password: "",
      },
      isEditInput: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['isProgress', 'errorsRegister', "isRegisterSuccess"]),
    isProgressState() {
      return this.isProgress
    },
    getErrorsRegister() {
      return this.errorsRegister
    },
    isRegisterSuccessState() {
      return this.isRegisterSuccess
    }
  },
  methods: {
    ...mapActions('auth', ['addNewUserRequest', 'progress']),
    async handleSubmit(e) {
      e.preventDefault();
      if(this.validField()) {
        this.progress()
        const {email, password} = this.userInfo
        await this.addNewUserRequest({email, password})
        const handleClickToast = () => {
          this.$router.push("/user/login")
        }
        if(this.isRegisterSuccessState) {
          await toastMessage("Create new account success !!", {}, handleClickToast)
        } else {
          await toastMessage(this.errorsRegister?.register, {}, () => {})
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
          ...errorList
        }
      }
    },
    validField() {
      const errorList = {}
      const {email, password, confirm_password} = this.userInfo
      errorList.email = this.checkValidEmail(email)?.errorMes
      errorList.password = this.checkValidPassword(password)?.errorMes
      errorList.confirm_password = this.checkValidConfirmPassword(confirm_password)?.errorMes
      this.errors = {
        ...errorList
      }
      return !Object.keys(errorList).some(key => errorList[key])
    },
    checkValidEmail(value) {
      const { REQUIRED, EMAIL } = VALIDATION_RULES 
      const validation = {
        name: "Email",
        rule: `${REQUIRED}|${EMAIL}`,
        messages: {
          [REQUIRED]: ""
        }
      }
      return Validate.checkValidate(value, validation)
    },
    checkValidPassword(value) {
      const { PASSWORD ,REQUIRED, MIN, MAX } = VALIDATION_RULES 
      const validation = {
        name: "Password",
        rule: `${PASSWORD}:${value}|${REQUIRED}|${MIN}:8|${MAX}:20`,
        messages: {
          [REQUIRED]: "",
          [MIN]: "",
          [MAX]: ""
        }
      }
      return Validate.checkValidate(value, validation)
    },
    checkValidConfirmPassword(value) {
      const { REQUIRED, CONFIRM } = VALIDATION_RULES 
      const validation = {
        name: "Confirm password",
        rule: `${REQUIRED}|${CONFIRM}:${this.userInfo.password}`,
        messages: {
          [REQUIRED]: "",
          [CONFIRM]: ""
        }
      }
      return Validate.checkValidate(value, validation)
    }
  },
  watch: {
    userInfo(value) {
      if (
        value.email !== "" ||
        value.password !== "" ||
        value.confirm_password !== ""
      ) {
        this.isEditInput = true;
      } else {
        this.isEditInput = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .loader-small {
    margin: 0;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
  }
</style>
