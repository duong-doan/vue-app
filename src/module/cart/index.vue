<template>
  <div class="cart-page">
    <div class="cart-page__header">
      <NavTop />
      <NavMiddle />
    </div>

    <div class="container">
      <div class="cart-page__wrapped">
        <div class="cart-page__list">
          <Table :items="cart_default" :fields="fields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import useLocalStorage from "../../utils/useLocalStorage";
import NavTop from "../../components/Navigation/NavTop.vue";
import NavMiddle from "../../components/Navigation/NavMiddle.vue";
import Table from "../../components/Table";

export default {
  components: {
    NavTop,
    NavMiddle,
    Table,
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "",
        },
        {
          key: "product",
          label: "Product",
        },
        {
          key: "price",
          label: "Price",
        },
        {
          key: "quantity",
          label: "Quantity",
        },
        {
          key: "price_discount",
          label: "Discount price",
        },
        "delete",
      ],
      cart_default: [],
    };
  },
  computed: {
    ...mapGetters("auth", ["cart"]),
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.cart_default = getLocalStorage("user").cart;
  },
};
</script>
