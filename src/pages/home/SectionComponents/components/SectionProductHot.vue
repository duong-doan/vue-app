<template>
  <div class="section__product-hot">
    <div class="container">
      <div class="section__product-hot__wrapped">
        <h1>NEW ARRIVALS</h1>
        <span class="section__product-hot__subscribe">Just Stocked</span>
        <div class="section__product-hot__list">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../../../components/Product/index.vue";

export default {
  components: {
    Product,
  },
};
</script>
