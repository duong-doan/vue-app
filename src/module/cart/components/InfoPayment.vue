<template>
  <div class="product-payment__info">
    <div class="product-payment__content">
      <form class="product-payment__content__info" @submit="handleSubmit">
        <h3>Contact information</h3>
        <form-group classname="custom-form-group" label="Email:">
          <base-input
            id="email"
            type="text"
            placeholder="Email..."
            :value="inputValue.email"
            :onBlur="handleBlur"
            :onKeydown="handleKeydown"
            :onChange="handleChange"
            disabled
          />
        </form-group>
        <form-group classname="custom-form-group" label="Name:">
          <base-input
            id="name"
            type="text"
            placeholder="Name"
            :value="inputValue.name"
            :onBlur="handleBlur"
            :onKeydown="handleKeydown"
            :onChange="handleChange"
            disabled
          />
        </form-group>
        <form-group classname="custom-form-group" label="Phone:">
          <base-input
            id="phone"
            type="text"
            placeholder="Phone"
            :value="inputValue.phone"
            :onBlur="handleBlur"
            :onKeydown="handleKeydown"
            :onChange="handleChange"
            disabled
          />
        </form-group>

        <h3>Shipping address</h3>
        <div class="product-payment__content__info--address">
          <form-group classname="custom-form-group" label="Address:">
            <base-input
              id="address"
              type="text"
              placeholder="Address"
              :value="inputValue.address"
              :onBlur="handleBlur"
              :onKeydown="handleKeydown"
              :onChange="handleChange"
              required
            />
          </form-group>
        </div>
        <base-button
          type="submit"
          classname="b-button-custom"
          :processing="processing"
          :onClick="handleClick"
        >
          Next
        </base-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import useLocalStorage from "@/utils/useLocalStorage";
import BaseInput from "@/components/BaseInput";
import FormGroup from "@/components/FormGroup";
import BaseButton from "@/components/BaseButton";
import Validate from "@/utils/validate";
import { MODULES, VALIDATION_RULES } from "@/utils/constants";
import { STEP_SHIPPING } from "../store/constants";

const { AUTH, CART } = MODULES;
export default {
  components: {
    BaseInput,
    FormGroup,
    BaseButton,
  },
  data() {
    return {
      inputValue: {
        email: "",
        name: "",
        address: "",
        phone: "",
      },
      defaultValue: {
        email: "",
        name: "",
        address: "",
        phone: "",
      },
      userInfo: {},
      isAuthenticated: false,
    };
  },
  computed: {
    ...mapGetters(AUTH, ["user", "isProgressUpdate", "userLogin"]),
    processing() {
      return this.isProgressUpdate;
    },
  },
  methods: {
    ...mapActions(AUTH, ["updateUserRequest", "setInfoUser"]),
    ...mapActions(CART, ["setStep"]),
    handleBlur() {},
    handleKeydown() {},
    handleChange(id, e) {
      this.inputValue = {
        ...this.inputValue,
        [id]: e.target.value,
      };
    },
    checkValidAddress(value) {
      const { REQUIRED, ADDRESS, MIN } = VALIDATION_RULES;
      const validation = {
        name: "address",
        rule: `${REQUIRED}|${MIN}:10|${ADDRESS}`,
        messages: {
          [REQUIRED]: "This field is required",
          [MIN]: "Enter more than 10 characters",
        },
      };
      return Validate.checkValidate(value, validation);
    },
    async handleSubmit(e) {
      e.preventDefault();
      const fieldNames = ["email", "phone", "name", "address"];
      const hasChanged = fieldNames.some(
        (field) => this.defaultValue[field] !== this.inputValue[field]
      );
      const hasValue = fieldNames.some((field) => this.inputValue[field]);
      if (hasChanged || hasValue) {
        const data = {
          ...this.userLogin,
          ...this.inputValue,
        };
        await this.updateUserRequest(data);
        await this.setStep(STEP_SHIPPING);
      }
    },
    handleClick() {},
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    const userLocalStr = getLocalStorage("user");
    this.setInfoUser(userLocalStr)
    const isAuthenticatedLocalStr = getLocalStorage("isAuthenticated");
    this.inputValue = {
      email: userLocalStr.email,
      name: userLocalStr.name,
      address: userLocalStr.address,
      phone: userLocalStr.phone,
    };
    this.defaultValue = {
      email: this.userLogin.email,
      name: this.userLogin.name,
      address: this.userLogin.address,
      phone: this.userLogin.phone,
    };
    if (!isAuthenticatedLocalStr) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss">
.custom-form-group {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  label {
    font-size: 1.5rem;
    color: #555;
    margin-left: 10px;
    margin-right: 20px;
    width: 80px;
  }
}
</style>
