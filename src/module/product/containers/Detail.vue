<template>
  <div class="product-detail">
    <div class="product-detail__wrapped">
      <div class="product-detail__breadcrum">
        <div class="container">
          <Breadscrum :breadcrumb="breadcrumb" />
        </div>
      </div>
      <div class="container">
        <template v-if="isProgress">
          <div class="loader">Loading...</div>
        </template>
        <template v-else>
          <DetailProduct :productDetail="product_detail" />
        </template>
        <CommentProduct />
        <RelatedProduct />
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
    ...mapGetters(['product_detail', 'isProgress']),
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
    }
  },
  methods: {
    ...mapActions(['progress', 'getProductDetailRequest'])
  },
  created() {
    this.getProductDetailRequest(this.$route.params.id)
    this.progress()
  }
};
</script>
