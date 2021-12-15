<template>
  <div data-aos="fade-left" data-aos-duration="2000" class="product">
    <router-link :to="`/product/detail/${productId}`">
      <div class="product__wrapped">
        <div class="product__image">
          <img :src="image" alt="" />
        </div>
        <div class="product__info">
          <h6>{{ name }}</h6>
          <div class="product__info--price">
            <span :class="priceDiscount === 0 ? 'no-discount' : ''">${{ price }}</span>
            <span>{{ priceDiscount === 0 ? "" : `$${priceDiscount}` }}</span>
          </div>
            <button>VIEW DETAIL</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'priceDiscount', 'image', 'productId', 'idRelated'],
};
</script>
