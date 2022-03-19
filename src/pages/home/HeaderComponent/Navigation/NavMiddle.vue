<template>
  <div v-if="!hidden" class="header__nav-middle">
    <div class="container">
      <div class="header__nav-middle__wrapped">
        <div class="header__nav-middle__logo">
          <router-link to="/">
            <img :src="logo" alt="" />
          </router-link>
        </div>
        <form
          v-if="!hiddenSearch"
          class="header__nav-middle__search"
          @submit="handleSubmitSearch"
        >
          <input
            type="text"
            v-model="valueInput"
            placeholder="Enter to search..."
          />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div class="header__nav-middle__cart">
          <div v-if="isAuthenticated" class="header__nav-middle__cart__content">
            <div class="header__nav-middle__cart__wrap">
              <div
                class="header__nav-middle__cart__body"
                @click="handleClickCart"
              >
                {{ this.cart && this.cart.length }}
                <div class="dropdown-cart__wrapped">
                  <div class="dropdown-cart__content">
                    <ul v-if="this.cart.length !== 0">
                      <li
                        class="dropdown-cart__item"
                        v-for="product in this.cart"
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
                      <img :src="empty" alt="" />
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
import logo from "@/assets/images/logo--m.png";
import empty from "@/assets/images/empty.jpg";
import { ROUTES } from "@/utils/constants";
import useLocalStorage from "@/utils/useLocalStorage";

export default {
  props: ["hidden", "hiddenSearch"],
  data() {
    return {
      logo,
      empty,
      isAuthenticated: false,
      user: {},
      valueInput: "",
    };
  },
  computed: {
    ...mapGetters('cart', ["cart"])
  },
  methods: {
    ...mapActions("cart", ["setCart"]),
    handleClickCart() {
      this.$router.push(ROUTES.CART);
    },
    handleSubmitSearch(e) {
      const { setLocalStorage } = useLocalStorage();
      e.preventDefault();
      setLocalStorage("query_search", this.valueInput);
      this.$router.push("/category");
    },
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    const cart = getLocalStorage("user").cart;
    this.setCart(cart ? cart : [])
    this.isAuthenticated = getLocalStorage("isAuthenticated");
    this.user = getLocalStorage("user");
  },
};
</script>
