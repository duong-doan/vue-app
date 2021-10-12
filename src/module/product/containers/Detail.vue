<template>
  <div class="product-detail">
    <div class="product-detail__wrapped">
      <div class="product-detail__breadcrum">
        <div class="container">
          <Breadscrum :breadcrumb="breadcrumb" />
        </div>
      </div>
      <div class="container">
        <div class="loader" v-if="isProgress">Loading...</div>
        <DetailProduct v-else :productDetail="product_detail" />
        <CommentProduct />
        <div class="loader" v-if="isProgress">Loading...</div>
        <RelatedProduct v-else :relatedProducts="getRelatedProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailProduct from "../components/DetailProduct.vue";
import CommentProduct from "../components/CommentProduct.vue";
import RelatedProduct from "../components/RelatedProduct.vue";
import Breadscrum from '../../../components/Breadscrum'
import { mapActions, mapGetters } from 'vuex';

export default {
  props: [],
  components: {
    DetailProduct,
    CommentProduct,
    RelatedProduct,
    Breadscrum
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
      return JSON.parse(localStorage.getItem('related_products')) 
    },
    productId() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('products',['progress', 'getProductDetailRequest']),
  },
  created() {
    this.getProductDetailRequest(this.$route.params.id)
    this.progress()
  }
};
</script>
