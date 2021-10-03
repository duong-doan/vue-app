<template>
  <div>
    <HeaderComponent />
    <BannerComponent />
    <SectionComponents />
    <FooterComponent />
  </div>
</template>

<script>

import HeaderComponent from "./HeaderComponent/index.vue";
import BannerComponent from "./BannerComponent/index.vue";
import SectionComponents from "./SectionComponents/index.vue";
import FooterComponent from "./FooterComponent/index.vue";

export default {
  components: {
    HeaderComponent,
    BannerComponent,
    SectionComponents,
    FooterComponent,
  }
};
</script>
