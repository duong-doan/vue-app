<template>
  <div>
    <SectionHeroTop />
    <SectionProductHot />
    <SectionSpecialProduct />
    <SectionSliderProduct />
    <SectionBlog />
    <SectionSubscribe />
  </div>
</template>

<script>
import SectionHeroTop from "./components/SectionHeroTop.vue";
import SectionProductHot from "./components/SectionProductHot.vue";
import SectionSpecialProduct from "./components/SectionSpecialProduct.vue";
import SectionSliderProduct from "./components/SectionSliderProduct.vue";
import SectionBlog from "./components/SectionBlog.vue";
import SectionSubscribe from "./components/SectionSubscribe.vue";

export default {
  components: {
    SectionHeroTop,
    SectionProductHot,
    SectionSpecialProduct,
    SectionSliderProduct,
    SectionBlog,
    SectionSubscribe,
  },
};
</script>
