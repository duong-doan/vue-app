<template>
  <div data-aos="fade-left" data-aos-duration="2000" class="product">
    <div class="product__wrapped">
      <div class="product__image">
        <img :src="product1" alt="" />
      </div>
      <div class="product__info">
        <h6>Classio 4</h6>
        <div class="product__info--price">
          <span>$110.00</span>
          <span>$99.00</span>
        </div>
        <router-link to="/product/detail/:id">
          <button>Add to cart</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import product1 from "../../assets/images/products/product-05.png";

export default {
  data() {
    return {
      product1,
    };
  },
};
</script>
