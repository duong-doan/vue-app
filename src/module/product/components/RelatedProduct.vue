<template>
  <div class="product-detail__related">
    <h1>Related Products</h1>
    <div class="product-detail__related__list">
      <Product 
        v-for="product in relatedProducts" 
        :key="product.id"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :priceDiscount="product.priceDiscount"
        :productId="product.id" />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Product from "../../../components/Product/index.vue";

export default {
  props: ['relatedProducts', 'productId'],
  components: {
    Product,
  },

  watch: {
    '$route.params.id'(id) {
      console.log(this);
      this.getProductDetailRequest(id)
      this.progress()
    }
  },
  methods: {
    ...mapActions('products',['getProductDetailRequest', 'progress']),
  }
};
</script>
