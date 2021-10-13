<template>
  <div class="product-detail__info">
    <div class="row">
      <div class="col-6">
        <div class="product-detail__info__image">
          <img :src="productDetail.image" alt="" />
        </div>
      </div>
      <div class="col-6">
        <div class="product-detail__info__content">
          <h1>{{ productDetail.name }}</h1>
          <div class="product-detail__info__content--price">
            <span
              :class="productDetail.price_discount !== 0 ? '' : 'no-discount'"
              >${{ productDetail.price }}</span
            >
            <span v-if="productDetail.price_discount !== 0"
              >${{ productDetail.price_discount }}</span
            >
          </div>
          <p>This is a simple, virtual product.</p>
          <div class="product-detail__info__content--quantity">
            <input
              type="text"
              :value="quantity_default"
              placeholder="abc"
              readonly
            />
            <div>
              <button class="change-quantity" @click="increaseQuantityProduct">
                <i class="fas fa-sort-up"></i>
              </button>
              <button
                class="change-quantity"
                @click="decreaseQuantityProduct"
                :disabled="quantity_default <= 1 ? true : false"
              >
                <i class="fas fa-sort-down"></i>
              </button>
            </div>
            <button>ADD TO CART</button>
          </div>
          <ul>
            <li>
              <h6>SKU</h6>
              <span>Woo-beanie-logo</span>
            </li>
            <li>
              <h6>Category</h6>
              <span>Rings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["productDetail"],
  computed: {
    ...mapGetters("products", ["quantity_default"]),
  },
  methods: {
    ...mapActions("products", [
      "increaseQuantityProduct",
      "decreaseQuantityProduct",
    ]),
  },
};
</script>
