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
            :onSelectedRow="handleSelectedRow"
            :onSelectedRowHead="handleSelectedRowHead"
            :processing="this.processing"
            :onClickBuy="handleClickBuy"
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
import NavTop from "../../../pages/home/HeaderComponent/Navigation/NavTop.vue";
import NavMiddle from "../../../pages/home/HeaderComponent/Navigation/NavMiddle.vue";
import Table from "../../../components/Table";
import { toastMessage } from "../../../utils/notification";
import {
  CONFIG_TOAST,
  EN_LANG,
  POSITION_TOAST,
  STATUS_TOAST,
} from "../../../utils/constants";
import { STATE_CART } from "../store/constants";
const { CART } = STATE_CART;

const { getLocalStorage } = useLocalStorage();

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
      selectedRowProduct: [],
    };
  },
  computed: {
    ...mapGetters(CART, ["cart", "processing"]),
    getCartStore() {
      return this.cart;
    },
    totalPrice() {
      const result = this.selectedRowProduct.reduce((acc, cur) => {
        if (cur.isActive) {
          const price =
            cur.price_discount === 0
              ? cur.price * cur.quantity
              : cur.price_discount * cur.quantity;
          return acc + price;
        } else {
          return 0;
        }
      }, 0);
      return result;
    },
  },
  methods: {
    ...mapActions("cart", ["setCart", "setQuantity"]),
    handleDeleteRow(id) {
      this.isShow = true;
      this.idDelete = id;
      const nameProduct = this.getCartStore.find((x) => x.id === id).name;
      this.customTextDialog = `Do you want delete ${nameProduct}?`;
    },
    handleSubmitDialogModal() {
      this.isShow = false;
      const newCart = this.getCartStore.filter((x) => x.id !== this.idDelete);
      this.setCart(newCart);
    },
    handleCloseDialogModal() {
      this.isShow = false;
    },
    async handleDecrease(id, currentQuantity) {
      const dataReq = {
        type: "decrease",
        id,
        currentQuantity,
      };
      await this.setQuantity(dataReq);
      const cartLocalStr = await getLocalStorage("user").cart;
      this.selectedRowProduct = this.filterData(cartLocalStr);
    },
    async handleIncrease(id, currentQuantity) {
      const dataReq = {
        type: "increase",
        id,
        currentQuantity,
      };
      await this.setQuantity(dataReq);
      const cartLocalStr = await getLocalStorage("user").cart;
      this.selectedRowProduct = this.filterData(cartLocalStr);
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
    handleSelectedRow(data) {
      this.selectedRowProduct = this.filterData(data);
      this.setCart(data);
    },
    handleSelectedRowHead(data) {
      this.selectedRowProduct = data;
    },
    filterData(data) {
      return data.filter((product) => product.isActive);
    },
    handleClickBuy() {
      if (this.totalPrice !== 0) {
        this.$router.push("cart/payment");
      } else {
        toastMessage(STATUS_TOAST.INFORMATION, EN_LANG.auth.cart_empty, {
          ...CONFIG_TOAST,
          duration: 5000,
          position: POSITION_TOAST.TOP_RIGHT,
          keepOnHover: true,
        });
      }
    },
  },
  created() {
    const refreshCart = getLocalStorage("user").cart.map((product) => {
      product.isActive = false;
      return product;
    });
    this.setCart(refreshCart);
  },
};
</script>
