<template>
  <div class="cart-page">
    <div class="cart-page__header">
      <NavTop />
      <NavMiddle />
    </div>

    <div class="container">
      <div class="cart-page__wrapped">
        <div class="cart-page__list">
          <Table
            :items="getCartStore"
            :fields="fields"
            :onDelete="handleDeleteRow"
          />
          <DialogModal
            id="delete-product"
            :isShow="isShow"
            :text="customTextDialog"
            :onSubmit="handleSubmitDialogModal"
            :onClose="handleCloseDialogModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DialogModal from "../../components/Modal";
import useLocalStorage from "../../utils/useLocalStorage";
import NavTop from "../../components/Navigation/NavTop.vue";
import NavMiddle from "../../components/Navigation/NavMiddle.vue";
import Table from "../../components/Table";

export default {
  components: {
    NavTop,
    NavMiddle,
    Table,
    DialogModal,
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
          formatter: (value, key, item) => {
            return item.name;
          },
          sortable: true,
          sortByFormatted: true,
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
          sortable: true,
        },
        "delete",
      ],
      customTextDialog: "",
      isShow: false,
      idDelete: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["cart"]),
    getCartStore() {
      return this.cart;
    },
  },
  methods: {
    ...mapActions("auth", ["setCart"]),
    handleDeleteRow(id) {
      this.isShow = true;
      this.idDelete = id;
      const text = this.getCartStore.find((x) => x.id === id).name;
      this.customTextDialog = `Do you want delete ${text}?`;
    },
    handleSubmitDialogModal() {
      this.isShow = false;
      const newCart = this.getCartStore.filter((x) => x.id !== this.idDelete);
      this.setCart(newCart);
    },
    handleCloseDialogModal() {
      this.isShow = false;
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.setCart(getLocalStorage("user").cart);
  },
};
</script>
