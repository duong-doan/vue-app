<template>
  <div class="checkout-info">
    <ul>
      <li>
        <p>Contact</p>
        <span>abc@mail.com</span>
      </li>
      <li :class="isFinalPayment ? 'add-border' : ''">
        <p>Ship to</p>
        <span>asdasdasd, Vietnam</span>
      </li>
      <template v-if="isFinalPayment">
        <li>
          <p>Method</p>
          <span>International Shipping · $20.00</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["isFinalPayment"],
};
</script>
