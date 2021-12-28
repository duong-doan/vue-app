<template>
  <div class="header__nav-middle">
    <div class="container">
      <div class="header__nav-middle__wrapped">
        <div class="header__nav-middle__logo">
          <a href="#">
            <img :src="logo" alt="" />
          </a>
        </div>
        <div class="header__nav-middle__search">
          <input type="text" placeholder="tim kiem..." />
          <div>
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="header__nav-middle__cart">
          <div v-if="getUserLogin.isAuthenticated" class="header__nav-middle__cart__content">
            <div class="header__nav-middle__cart__wrap">
              <div class="header__nav-middle__cart__body">
                {{getUserLogin.cart.length}}
                <div class="dropdown-cart__wrapped">
                  <div class="dropdown-cart__content">
                    <ul v-if="getUserLogin.cart.length">
                      <li class="dropdown-cart__item" v-for="product in getUserLogin.cart" :key="product.id">
                        <div class="dropdown-cart__item__img">
                          <img :src="product.image" alt="">
                        </div>
                        <div class="dropdown-cart__item__info">
                          <p>{{product.name}}</p>
                          <div>
                            <span>{{product.price}}$</span>
                            <span>{{product.price_discount}}$</span>
                          </div>
                        </div>
                        <!-- <i class="fas fa-times"></i>
                        <span class="dropdown-cart__item__quantity">{{product.quantity}}</span> -->
                      </li>
                    </ul>
                    <div class="dropdown-cart__content__empty" v-else>
                      <img src="../../assets/images/empty.jpg" alt="">
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
import logo from "../../assets/images/logo--m.png";
import useLocalStorage from '../../utils/useLocalStorage'

export default {
  data() {
    return {
      logo,
    };
  },
  computed: {
    getUserLogin() {
      const { getLocalStorage } = useLocalStorage()
      const user = getLocalStorage("user")
      let cart = []
      const isAuthenticated = getLocalStorage("isAuthenticated")
      if(isAuthenticated) {
        cart = user.cart
      }
      return {
        user,
        isAuthenticated,
        cart
      }
    }
  }
};
</script>
