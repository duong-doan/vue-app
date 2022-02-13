<template>
  <div class="product-payment__ship">
    <div class="product-payment__ship__info">
      <CheckoutInfo :email="email" :address="address" />

      <h3>Shipping method</h3>

      <div class="product-payment__ship__method">
        <p>
          <i class="fas fa-plane"></i>
          Shipping fee
        </p>
        <span>$20.00</span>
      </div>
    </div>
    <base-button :onClick="handleBackStep" classname="b-button-custom"
      >Back</base-button
    >
    <base-button :onClick="handleNextStep">Next</base-button>
  </div>
</template>

<script>
import CheckoutInfo from "@/components/CheckoutInfo/index.vue";
import BaseButton from "@/components/BaseButton";
import { mapActions } from "vuex";
import { STEP_INFO, STEP_PAYMENT } from "../store/constants";
import useLocalStorage from "@/utils/useLocalStorage";

export default {
  data() {
    return {
      email: "",
      address: "",
    };
  },
  components: {
    CheckoutInfo,
    BaseButton,
  },
  methods: {
    ...mapActions("cart", ["setStep"]),
    handleBackStep() {
      this.setStep(STEP_INFO);
    },
    handleNextStep() {
      this.setStep(STEP_PAYMENT);
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.email = getLocalStorage("user").email;
    this.address = getLocalStorage("user").address;
  },
};
</script>

<style lang="scss">
.b-button-custom {
  margin-right: 10px;
}
</style>
