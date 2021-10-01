<template>
  <div class="special-product">
    <div class="special-product__wrapped">
      <template v-if="!isRevert">
        <img
          class="special-product__img"
          :src="`${data[0].image}`"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div
          class="special-product__detail"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            class="special-product__detail__img"
            :src="`${data[0].imageDetail}`"
            alt=""
          />
          <h6>{{ data[0].name }}</h6>
          <div class="special-product__detail--price">
            <span>$110.00</span>
            <span>$99.00</span>
          </div>
          <button>Add to cart</button>
        </div>
        <div class="special-product__info">
          <h1>
            {{ data[0].title }}
          </h1>
          <p>
            Curabitur blandit tempus porttitor. Nulla vitae elit libero, a
            pharetra augue lorem upsum dolor site amet
          </p>
          <a href="#">LEARN MORE</a>
        </div>
      </template>
      <!-- else -->
      <template v-else>
        <div class="special-product__info data">
          <h1>
            {{ data[1].title }}
          </h1>
          <p>
            Curabitur blandit tempus porttitor. Nulla vitae elit libero, a
            pharetra augue lorem upsum dolor site amet
          </p>
          <a href="#">LEARN MORE</a>
        </div>
        <div
          class="special-product__detail"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            class="special-product__detail__img"
            :src="`${data[1].imageDetail}`"
            alt=""
          />
          <h6>{{ data[1].name }}</h6>
          <div class="special-product__detail--price">
            <span>$110.00</span>
            <span>$99.00</span>
          </div>
          <button>Add to cart</button>
        </div>
        <img
          class="special-product__img"
          :src="`${data[1].image}`"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { DATA_SPECIAL_PRODUCT } from "../../utils/constants";

export default {
  props: ["isRevert"],
  data() {
    return {
      data: DATA_SPECIAL_PRODUCT,
    };
  },
};
</script>
