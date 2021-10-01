<template>
  <div class="product-detail">
    <div class="product-detail__wrapped">
      <div class="product-detail__breadcrum">
        <div class="container">
          homepage/product1
        </div>
      </div>
      <div class="container">
        <DetailProduct />
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

export default {
  components: {
    DetailProduct,
    CommentProduct,
    RelatedProduct,
  },
};
</script>
