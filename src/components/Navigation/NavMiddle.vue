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
          <i class="fas fa-heart"></i>
          <div class="header__nav-middle__cart__content">
            <div class="header__nav-middle__cart__wrap">
              <div class="header__nav-middle__cart__body">
                1
              </div>
              <div class="header__nav-middle__cart__top"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/images/logo--m.png";

export default {
  data() {
    return {
      logo,
    };
  },
};
</script>
