<template>
  <div class="section__product-hot">
    <div class="container">
      <div class="section__product-hot__wrapped">
        <h1>NEW ARRIVALS</h1>
        <span class="section__product-hot__subscribe">Just Stocked</span>
        <div class="section__product-hot__list">
          <Product
            v-for="product in productsRender"
            :key="product.id"
            :productId="product.id"
            :name="product.name"
            :image="product.image"
            :price="product.price"
            :priceDiscount="product.priceDiscount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "@/components/Product/index.vue";

export default {
  components: {
    Product,
  },
  created() {
    this.getDataProductsRequest();
  },
  computed: {
    ...mapGetters("products", ["products"]),
    productsRender() {
      return this.products.slice(0, 8);
    },
  },
  methods: {
    ...mapActions("products", ["getDataProductsRequest"]),
  },
};
</script>
