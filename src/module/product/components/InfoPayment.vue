<template>
  <div class="product-payment__info">
    <div class="product-payment__content">
      <div class="product-payment__content__info">
        <h3>Contact information</h3>
        <input type="text" placeholder="Email..." />

        <h3>Shipping address</h3>
        <div class="product-payment__content__info--address">
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="City" />
        </div>
        <div class="wrapped__checkbox">
          <input type="checkbox" checked />
          <span>Save this information for next time</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
