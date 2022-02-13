<template>
  <div class="product-payment__cart">
    <div class="product-payment__cart__shipping">
      <ul>
        <li>
          <p>Subtotal</p>
          <span>${{ totalPrice }}.00</span>
        </li>
        <li>
          <p>Shipping</p>
          <span>$20.00</span>
        </li>
      </ul>
    </div>

    <div class="product-payment__cart__total">
      <p>Total</p>
      <span
        >USD <strong>${{ total }}.00</strong></span
      >
    </div>
  </div>
</template>

<script>
import useLocalStorage from "@/utils/useLocalStorage";
const { getLocalStorage } = useLocalStorage();

export default {
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    total() {
      const result = this.totalPrice + 20;
      return result;
    },
  },
  created() {
    this.totalPrice = getLocalStorage("totalPrice");
  },
};
</script>
