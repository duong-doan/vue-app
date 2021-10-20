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
import BaseInput from "../../../components/BaseInput";
import FormGroup from "../../../components/FormGroup";
import { dataInputRegister } from "../constants";

export default {
  components: {
    BaseInput,
    FormGroup,
  },
  data() {
    return {
      data: dataInputRegister,
      userInfo: {
        username: "",
        password: "",
        confirm_password: "",
      },
      isEditInput: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.userInfo);
    },
    handleChangeInput(id, e) {
      this.userInfo = {
        ...this.userInfo,
        [id]: e.target.value,
      };
    },
  },
  watch: {
    userInfo(value) {
      console.log(value);
      if (
        value.username !== "" ||
        value.password !== "" ||
        value.confirm_password !== ""
      ) {
        this.isEditInput = true;
      } else {
        this.isEditInput = false;
      }
    },
  },
};
</script>
