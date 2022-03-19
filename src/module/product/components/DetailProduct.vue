<template>
  <div class="product-detail__info">
    <div class="row">
      <div class="col-md-6">
        <div class="product-detail__info__image">
          <img :src="productDetail.image" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-detail__info__content">
          <h1>{{ productDetail.name }}</h1>
          <div class="product-detail__info__content--price">
            <span
              :class="productDetail.price_discount !== 0 ? '' : 'no-discount'"
              >${{ productDetail.price }}</span
            >
            <span v-if="productDetail.price_discount !== 0"
              >${{ productDetail.price_discount }}</span
            >
          </div>
          <p>This is a simple, virtual product.</p>
          <div class="product-detail__info__content--quantity">
            <form @submit="handleSubmit">
              <input type="text" :value="quantity" readonly />
              <div>
                <button
                  type="button"
                  class="change-quantity"
                  @click="increaseQuantityProduct"
                >
                  <i class="fas fa-sort-up"></i>
                </button>
                <button
                  type="button"
                  class="change-quantity"
                  @click="decreaseQuantityProduct"
                  :disabled="quantity <= 1 ? true : false"
                >
                  <i class="fas fa-sort-down"></i>
                </button>
              </div>
              <button type="submit">ADD TO CART</button>
            </form>
          </div>
          <ul>
            <li>
              <h6>SKU</h6>
              <span>Woo-beanie-logo</span>
            </li>
            <li>
              <h6>Category</h6>
              <span>Rings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// Utils
import { toastMessage } from "@/utils/notification";
import {
  CONFIG_TOAST,
  USER_LOCAL_STR,
  MODULES,
  POSITION_TOAST,
  STATUS_TOAST,
  EN_LANG,
  ROUTES,
  MESSAGE_TOAST,
} from "@/utils/constants";
import useLocalStorage from "@/utils/useLocalStorage";
// Store
import { AUTH_STATE } from "../../auth/store/constants";

const { AUTH, PRODUCT, CART } = MODULES;
const { IS_AUTHENTICATED } = AUTH_STATE;
const { TOP_CENTER, TOP_RIGHT } = POSITION_TOAST;
const { INFORMATION, SUCCESS, ERROR } = STATUS_TOAST;

const { getLocalStorage } = useLocalStorage();

export default {
  data() {
    return {
      cartDefault: [],
    };
  },
  props: ["productDetail"],
  computed: {
    ...mapGetters(PRODUCT, ["quantity_default"]),
    ...mapGetters(CART, ["cart"]),
    ...mapGetters(AUTH, ["user"]),
    quantity() {
      return this.quantity_default;
    },
    getIsAuthenticated() {
      const isAuthenticated = getLocalStorage(IS_AUTHENTICATED);
      return isAuthenticated;
    },
    getUserLogin() {
      const userLocal = getLocalStorage(USER_LOCAL_STR);
      return userLocal;
    },
  },
  methods: {
    ...mapActions(PRODUCT, [
      "increaseQuantityProduct",
      "decreaseQuantityProduct",
      "clearDataProduct"
    ]),
    ...mapActions(CART, ["addCartUserRequest"]),
    handleSubmit(e) {
      // toast props: type, message, options, customMsg, handleClickToast
      e.preventDefault();
      if (this.getIsAuthenticated) {
        const options = {
          ...CONFIG_TOAST,
          duration: 2000,
          position: TOP_CENTER,
        };
        const data = {
          ...this.productDetail,
          quantity: this.quantity,
          isActive: false,
        };
        const isSameProduct = this.cartDefault.some(
          (item) => item.id === this.productDetail.id
        );
        // compare if is same product
        if (!isSameProduct) {
          this.cartDefault.push(data);
          toastMessage(SUCCESS, EN_LANG.product.add_cart_success, {
            ...options,
          });
        } else {
          toastMessage(INFORMATION, EN_LANG.product.product_is_exist, {
            ...options,
          });
        }
        // add cart to server
        const cartUserItem = this.cartDefault;
        this.addCartUserRequest(cartUserItem);
      } else {
        const handleClickToast = () => {
          this.$router.push(ROUTES.LOGIN);
        };
        toastMessage(
          ERROR,
          EN_LANG.auth.login_first,
          {
            ...CONFIG_TOAST,
            duration: 10000,
            position: TOP_RIGHT,
            keepOnHover: true,
          },
          MESSAGE_TOAST.go_to_login,
          handleClickToast
        );
      }
    },
  },
  created() {
    this.cartDefault = this.getUserLogin.cart;
  },
  destroyed() {
    this.$toasted.clear();
    this.clearDataProduct()
  },
};
</script>
