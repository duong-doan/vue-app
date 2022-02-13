<template>
  <div class="filter-products mt-5">
    <div v-if="products.length === 0" class="m-auto fs-3">
      No products found
    </div>
    <product
      v-else
      v-for="product in products"
      :key="product.id"
      :productId="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"
      :priceDiscount="product.priceDiscount"
    />
  </div>
</template>

<script>
import Product from "@/components/Product";
import { mapActions, mapGetters } from "vuex";
import { TYPE_SEARCH } from "../store/constants";
import useLocalStorage from "@/utils/useLocalStorage";

export default {
  components: {
    Product,
  },
  computed: {
    ...mapGetters("category", ["products"]),
  },
  methods: {
    ...mapActions("category", ["getFilterProducts"]),
    handleSearch() {
      const { getLocalStorage } = useLocalStorage();
      const param = getLocalStorage("query_search");
      const data = {
        param,
        type: TYPE_SEARCH.SEARCH,
      };
      this.getFilterProducts(data);
    },
  },
  created() {
    this.handleSearch();
  },
};
</script>

<style lang="scss">
.filter-products {
  display: flex;
  flex-wrap: wrap;
}
</style>
