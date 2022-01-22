<template>
  <div v-if="!hidden" class="header__nav-middle">
    <div class="container">
      <div class="header__nav-middle__wrapped">
        <div class="header__nav-middle__logo">
          <router-link to="/">
            <img :src="logo" alt="" />
          </router-link>
        </div>
        <div class="header__nav-middle__search">
          <input type="text" placeholder="tim kiem..." />
          <div>
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="header__nav-middle__cart">
          <div v-if="isAuthenticated" class="header__nav-middle__cart__content">
            <div class="header__nav-middle__cart__wrap">
              <div
                class="header__nav-middle__cart__body"
                @click="handleClickCart"
              >
                {{ cartLength }}
                <div class="dropdown-cart__wrapped">
                  <div class="dropdown-cart__content">
                    <ul v-if="cartLength !== 0">
                      <li
                        class="dropdown-cart__item"
                        v-for="product in getCartStore"
                        :key="product.id"
                      >
                        <div class="dropdown-cart__item__img">
                          <img :src="product.image" alt="" />
                        </div>
                        <div class="dropdown-cart__item__info">
                          <p>{{ product.name }}</p>
                          <div>
                            <span>{{ product.price }}$</span>
                            <span>{{ product.price_discount }}$</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div v-else class="dropdown-cart__content__empty">
                      <img src="../../../../assets/images/empty.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="header__nav-middle__cart__top"></div>
            </div>
          </div>
          <router-link v-else to="/user/login" class="login-title">
            <i class="far fa-user"></i>
            login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import logo from "../../../../assets/images/logo--m.png";
import { ROUTES } from "../../../../utils/constants";
import useLocalStorage from "../../../../utils/useLocalStorage";

const { getLocalStorage } = useLocalStorage();

export default {
  props: ["hidden"],
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapGetters("cart", ["cart"]),
    getUserLogin() {
      return getLocalStorage("user");
    },
    isAuthenticated() {
      return getLocalStorage("isAuthenticated");
    },
    getCartStore() {
      return this.cart;
    },
    cartLength() {
      if (!this.getCartStore) return;
      return this.getCartStore.length;
    },
  },
  methods: {
    ...mapActions("cart", ["setCart"]),
    handleClickCart() {
      this.$router.push(ROUTES.CART);
    },
  },
  created() {
    this.setCart(getLocalStorage("user").cart || []);
  },
};
</script>
