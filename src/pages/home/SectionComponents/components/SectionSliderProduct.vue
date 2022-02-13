<template>
  <div class="section__slider-product">
    <div class="section__slider-product__wrapped">
      <h1>FEATURED COLLECTION</h1>
      <span>Let's Get Inspired</span>
      <agile v-bind="options">
        <div class="slide" v-for="(item, index) in data" :key="index">
          <SliderProductItem :image="item.image" :className="item.className" />
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import { DATA_SLIDER_PRODUCT } from "@/utils/constants";
import SliderProductItem from "@/components/SliderProductItem/index.vue";

export default {
  components: {
    SliderProductItem,
    agile: VueAgile,
  },
  data() {
    return {
      data: DATA_SLIDER_PRODUCT,
      options: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 3,
        pauseOnHover: true,
      },
    };
  },
};
</script>
