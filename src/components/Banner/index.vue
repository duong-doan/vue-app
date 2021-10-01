<template>
  <div class="section__banner">
    <agile :dots="false">
      <div class="slide">
        <div class="slide__first">
          <div class="slide__first__content">
            <h4>Mona Watch</h4>
            <h2>Classico</h2>
            <p>
              With 24/7 live streaming, a versatile magnetic stand, person
              alerts with Nest Aware and one app for all your Nest products,
              Nest Cam helps you keep an eye on what matters. From anywhere.
            </p>
            <button>Xem sản phẩm</button>
          </div>
          <img :src="BgSlider1" alt="" />
        </div>
      </div>
      <div class="slide">
        <div class="slide__second">
          <div class="slide__second__content">
            <h4>Mona Watch</h4>
            <h2>Classico</h2>
            <p>
              With 24/7 live streaming, a versatile magnetic stand, person
              alerts with Nest Aware and one app for all your Nest products,
              Nest Cam helps you keep an eye on what matters. From anywhere.
            </p>
            <button>Xem sản phẩm</button>
          </div>
          <img :src="BgSlider2" alt="" />
        </div>
      </div>
      <template slot="prevButton"><i class="fas fa-angle-left"></i></template>
      <template slot="nextButton"><i class="fas fa-angle-right"></i></template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import BgSlider1 from "../../assets/images/blog5.jpg";
import BgSlider2 from "../../assets/images/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg";

export default {
  data() {
    return {
      BgSlider1,
      BgSlider2,
    };
  },
  components: {
    agile: VueAgile,
  },
};
</script>
