<template>
  <div class="product-payment__final">
    <CheckoutInfo :isFinalPayment="true" />
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
