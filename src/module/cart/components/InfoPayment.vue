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
            />
          </form-group>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { MODULES } from "../../../utils/constants";
import useLocalStorage from "../../../utils/useLocalStorage";
import BaseInput from "../../../components/BaseInput";
import FormGroup from "../../../components/FormGroup";

const { AUTH } = MODULES;
export default {
  components: {
    BaseInput,
    FormGroup,
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
    };
  },
  computed: {
    ...mapGetters(AUTH, ["user", "isProgressUpdate"]),
    getUserLocal() {
      return this.user;
    },
  },
  methods: {
    ...mapActions(AUTH, ["updateUserRequest"]),
    handleBlur() {},
    handleKeydown() {},
    handleChange(id, e) {
      this.inputValue = {
        ...this.inputValue,
        [id]: e.target.value,
      };
    },
    async handleSubmit(e) {
      e.preventDefault();
      const emailValueChanged =
        this.defaultValue.email !== this.inputValue.email;
      const nameValueChanged = this.defaultValue.name !== this.inputValue.name;
      const phoneValueChanged =
        this.defaultValue.phone !== this.inputValue.phone;
      const addressValueChanged =
        this.defaultValue.address !== this.inputValue.address;
      const hasChanged =
        emailValueChanged ||
        nameValueChanged ||
        phoneValueChanged ||
        addressValueChanged;
      if (hasChanged) {
        const data = {
          ...this.userInfo,
          ...this.inputValue,
        };
        await this.updateUserRequest(data);
        console.log(data);
      }
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    const userLocalStr = getLocalStorage("user");
    this.inputValue = {
      email: userLocalStr.email,
      name: userLocalStr.name,
      address: "",
      phone: userLocalStr.phone,
    };
    this.defaultValue = {
      email: userLocalStr.email,
      name: userLocalStr.name,
      address: "",
      phone: userLocalStr.phone,
    };
    this.userInfo = {
      ...userLocalStr,
    };
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
