<template>
  <div class="product-detail">
    <div class="product-detail__wrapped">
      <div class="product-detail__breadcrumb">
        <div class="container">
          <breadcrumb :breadcrumb="breadcrumb" />
        </div>
      </div>
      <div class="container">
        <div class="loader" v-if="isProgress">Loading...</div>
        <DetailProduct v-else :productDetail="product_detail" />
        <CommentProduct />
        <RelatedProduct :relatedProducts="getRelatedProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailProduct from "../components/DetailProduct.vue";
import CommentProduct from "../components/CommentProduct.vue";
import RelatedProduct from "../components/RelatedProduct.vue";
import Breadcrumb from '../../../components/Breadscrum'
import { mapActions, mapGetters } from 'vuex';
import useLocalStorage from '../../../utils/useLocalStorage'

export default {
  props: [],
  components: {
    DetailProduct,
    CommentProduct,
    RelatedProduct,
    Breadcrumb
  },
  computed: {
    ...mapGetters('products', {
      product_detail: 'product_detail',
      isProgress: 'isProgress'
    }),
    breadcrumb() {
      return [
        {
          id: 1,
          text: 'Home',
          to: '/'
        },
        {
          id: 2,
          text: `${this.product_detail.name}`,
        }
      ]
    },
    getRelatedProducts() {
      const { getLocalStorage } = useLocalStorage()
      return getLocalStorage("related_products")
    },
    productId() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('products', ['progress', 'getProductDetailRequest']),
  },
  created() {
    this.progress()
    this.getProductDetailRequest(this.productId)
  },
  watch: {
    productId (id) {
      this.progress()
      this.getProductDetailRequest(id)
    } 
  }
};
</script>
