<template>
  <div>
    <SpecialProduct />
    <SpecialProduct :isRevert="true" />
  </div>
</template>

<script>
import SpecialProduct from "../../../../components/SpecialProduct/index.vue";
export default {
  components: {
    SpecialProduct,
  },
};
</script>
