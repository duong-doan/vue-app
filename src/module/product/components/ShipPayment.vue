<template>
  <div class="product-payment__ship">
    <div class="product-payment__ship__info">
      <CheckoutInfo />

      <h3>Shipping method</h3>

      <div class="product-payment__ship__method">
        <p>
          <i class="fas fa-plane"></i>
          International Shipping
        </p>
        <span>$20.00</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutInfo from "../../../components/CheckoutInfo/index.vue";

export default {
  components: {
    CheckoutInfo,
  },
};
</script>
