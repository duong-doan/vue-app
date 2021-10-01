<template>
  <div class="product-detail__related">
    <h1>Related Products</h1>
    <div class="product-detail__related__list">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>
<script>
import Product from "../../../components/Product/index.vue";
export default {
  components: {
    Product,
  },
};
</script>
