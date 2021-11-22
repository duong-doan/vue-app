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
                1
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
      const isAuthenticated = getLocalStorage("isAuthenticated")
      return {
        user,
        isAuthenticated
      }
    }
  },
  watch: {
    getUserLogin(value) {
      console.log("middle", value.isAuthenticated)
    }
  }
};
</script>
