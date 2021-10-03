<template>
  <div class="product-detail__related">
    <h1>Related Products</h1>
    <div class="product-detail__related__list">
      <Product 
        v-for="product in related_product" 
        :key="product.id"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :priceDiscount="product.priceDiscount" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Product from "../../../components/Product/index.vue";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapGetters(['related_product']),
  }
};
</script>
