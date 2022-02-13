<template>
  <div class="product-payment__final">
    <CheckoutInfo
      :isFinalPayment="true"
      :email="user.email"
      :address="user.address"
    />
    <base-button
      :onClick="handleCLickPayment"
      :processing="this.isProgressUpdate"
      classname="b-button-custom"
      >Payment</base-button
    >
  </div>
</template>

<script>
import useLocalStorage from "@/utils/useLocalStorage";
import CheckoutInfo from "@/components/CheckoutInfo/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";
import { mapActions, mapGetters } from "vuex";
import { STEP_INFO } from "../store/constants";

export default {
  data() {
    return {
      user: {},
      totalPrice: 0,
    };
  },
  components: {
    CheckoutInfo,
    BaseButton,
  },
  computed: {
    ...mapGetters("cart", ["selectedProduct", "orders"]),
    ...mapGetters("auth", ["isProgressUpdate"]),
  },
  methods: {
    ...mapActions("auth", ["updateUserRequest"]),
    ...mapActions("cart", ["setOrders", "setStep"]),
    async handleCLickPayment() {
      const order = {
        id: this.orders.length,
        status: "done",
        cart: this.selectedProduct,
        totalPrice: this.totalPrice,
      };
      this.orders.push(order);
      const data = {
        ...this.user,
        orders: this.orders,
        cart: [],
      };
      await this.updateUserRequest(data);
      await this.setOrders(this.orders);
      await this.setStep(STEP_INFO);
      await this.$router.push("/buy-success");
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.user = getLocalStorage("user");
    this.totalPrice = getLocalStorage("totalPrice");
  },
};
</script>
