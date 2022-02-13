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
            SIGN UP
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
import BaseInput from "@/components/BaseInput";
import FormGroup from "@/components/FormGroup";
import { VALIDATION_RULES } from "@/utils/constants";
import Validate from "@/utils/validate";
import { CONFIG_TOAST } from "@/utils/constants";
import { dataInputRegister } from "../store/constants";
import { toastMessage } from "@/utils/notification";
import { mapActions, mapGetters } from "vuex";

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
        phone_number: "",
      },
      errors: {
        email: "",
        password: "",
        confirm_password: "",
        phone_number: "",
      },
      isEditInput: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isProgress", "errorsAuth", "isRegisterSuccess"]),
    isProgressState() {
      return this.isProgress;
    },
    getErrorsRegister() {
      return this.errorsAuth;
    },
    isRegisterSuccessState() {
      return this.isRegisterSuccess;
    },
  },
  methods: {
    ...mapActions("auth", ["addNewUserRequest", "progress"]),
    async handleSubmit(e) {
      e.preventDefault();
      if (this.validField()) {
        this.progress();
        const { email, password, phone_number } = this.userInfo;
        await this.addNewUserRequest({ email, password, phone_number });
        const handleClickToastSuccess = () => {
          this.$router.push("/user/login");
        };
        const handleClickToastFail = () => {
          this.userInfo = {
            email: "",
            password: "",
            confirm_password: "",
            phone_number: "",
          };
        };

        // toast props: type, message, options, customMsg, handleClickToast
        if (this.isRegisterSuccessState) {
          await toastMessage(
            "success",
            "Create new account success!!",
            { ...CONFIG_TOAST },
            "Go to login",
            handleClickToastSuccess
          );
        } else {
          await toastMessage(
            "error",
            this.getErrorsRegister?.register,
            {
              ...CONFIG_TOAST,
              duration: 10000,
            },
            "Enter again!",
            handleClickToastFail
          );
        }
      }
    },
    handleChangeInput(id, e) {
      this.userInfo = {
        ...this.userInfo,
        [id]: e.target.value,
      };
      if (this.errors[id]) {
        const errorList = { ...this.errors, [id]: "" };
        this.errors = {
          ...this.errors,
          ...errorList,
        };
      }
    },
    validField() {
      const errorList = {};
      const { email, password, confirm_password, phone_number } = this.userInfo;
      errorList.email = this.checkValidEmail(email)?.errorMes;
      errorList.phone_number = this.checkValidPhone(phone_number)?.errorMes;
      errorList.password = this.checkValidPassword(password)?.errorMes;
      errorList.confirm_password = this.checkValidConfirmPassword(
        confirm_password
      )?.errorMes;
      this.errors = {
        ...errorList,
      };
      return !Object.keys(errorList).some((key) => errorList[key]);
    },
    checkValidPhone(value) {
      const { REQUIRED, PHONE_NUMBER, MIN, MAX } = VALIDATION_RULES;
      const validation = {
        name: "Phone number",
        rule: `${REQUIRED}|${MIN}:10|${MAX}:17|${PHONE_NUMBER}`,
        messages: {
          [REQUIRED]: "This field is required",
          [MIN]: "Enter your phone number",
          [MAX]: "Enter your phone number",
        },
      };
      return Validate.checkValidate(value, validation);
    },
    checkValidEmail(value) {
      const { REQUIRED, EMAIL } = VALIDATION_RULES;
      const validation = {
        name: "Email",
        rule: `${REQUIRED}|${EMAIL}`,
        messages: {
          [REQUIRED]: "",
        },
      };
      return Validate.checkValidate(value, validation);
    },
    checkValidPassword(value) {
      const { PASSWORD, REQUIRED, MIN, MAX } = VALIDATION_RULES;
      const validation = {
        name: "Password",
        rule: `${PASSWORD}:${value}|${REQUIRED}|${MIN}:8|${MAX}:20`,
        messages: {
          [REQUIRED]: "This field is required",
          [MIN]: "",
          [MAX]: "",
        },
      };
      return Validate.checkValidate(value, validation);
    },
    checkValidConfirmPassword(value) {
      const { REQUIRED, CONFIRM } = VALIDATION_RULES;
      const validation = {
        name: "Confirm password",
        rule: `${REQUIRED}|${CONFIRM}:${this.userInfo.password}`,
        messages: {
          [REQUIRED]: "",
          [CONFIRM]: "",
        },
      };
      return Validate.checkValidate(value, validation);
    },
    handleBlur() {},
    handleKeydown() {},
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
    },
  },
  destroyed() {
    this.$toasted.clear();
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
