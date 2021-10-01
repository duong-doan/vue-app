<template>
  <div>
    <NavTop />
    <NavMiddle />
    <NavBottom />
  </div>
</template>

<script>
import NavTop from "./NavTop.vue";
import NavMiddle from "./NavMiddle.vue";
import NavBottom from "./NavBottom.vue";
export default {
  components: {
    NavTop,
    NavMiddle,
    NavBottom,
  },
};
</script>

<style scoped></style>
