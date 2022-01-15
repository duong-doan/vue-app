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
            :onDecrease="handleDecrease"
            :onIncrease="handleIncrease"
            :perPage="perPage"
            :currentPage="currentPage"
            :onChangePage="handlePageChange"
            :totalPrice="this.totalPrice"
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
import useLocalStorage from "../../../utils/useLocalStorage";
import DialogModal from "../../../components/Modal";
import NavTop from "../../../components/Navigation/NavTop.vue";
import NavMiddle from "../../../components/Navigation/NavMiddle.vue";
import Table from "../../../components/Table";

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
        {
          key: "delete",
          label: "",
        },
      ],
      customTextDialog: "",
      isShow: false,
      idDelete: "",
      perPage: 4,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters("auth", ["cart"]),
    getCartStore() {
      return this.cart;
    },
    totalPrice() {
      const result = this.getCartStore.reduce((acc, cur) => {
        const price =
          cur.price_discount === 0
            ? cur.price * cur.quantity
            : cur.price_discount * cur.quantity;
        return acc + price;
      }, 0);
      return result;
    },
  },
  methods: {
    ...mapActions("auth", ["setCart", "setQuantity"]),
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
    handleDecrease(id, currentQuantity) {
      const data = {
        type: "decrease",
        id,
        currentQuantity,
      };
      this.setQuantity(data);
    },
    handleIncrease(id, currentQuantity) {
      const data = {
        type: "increase",
        id,
        currentQuantity,
      };
      this.setQuantity(data);
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.setCart(getLocalStorage("user").cart);
  },
};
</script>
