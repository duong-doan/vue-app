<template>
  <div class="cart-page">
    <div class="cart-page__header">
      <NavTop />
      <NavMiddle />
    </div>

    <div class="container">
      <div class="cart-page__wrapped">
        <div class="cart-page__list">
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop from "../../components/Navigation/NavTop.vue";
import NavMiddle from "../../components/Navigation/NavMiddle.vue";
import Table from "../../components/Table";

export default {
  components: {
    NavTop,
    NavMiddle,
    Table,
  },
};
</script>
