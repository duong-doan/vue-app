<template>
  <div class="checkout-info">
    <ul>
      <li>
        <p>Contact</p>
        <span>{{ email }}</span>
      </li>
      <li :class="isFinalPayment ? 'add-border' : ''">
        <p>Ship to</p>
        <span>{{ address }}</span>
      </li>
      <template v-if="isFinalPayment">
        <li>
          <p>Method</p>
          <span>Shipping fee · $20.00</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["isFinalPayment", "email", "address"],
};
</script>
