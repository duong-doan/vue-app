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
            <span :class="productDetail.price_discount !== 0 ? '' : 'no-discount'">${{ productDetail.price }}</span>
            <span v-if="productDetail.price_discount !== 0">${{ productDetail.price_discount }}</span>
          </div>
          <p>This is a simple, virtual product.</p>
          <div class="product-detail__info__content--quantity">
            <form @submit="handleSubmit">
              <input
                type="text"
                :value="quantity"
                placeholder="abc"
                readonly
              />
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
import { toastMessage } from '../../../utils/notification';
import { CONFIG_TOAST } from '../../../utils/constants'
import useLocalStorage from '../../../utils/useLocalStorage'

export default {
  props: ['productDetail'],
  computed: {
    ...mapGetters('products', ['quantity_default']),
    ...mapGetters('auth', ['cart']),
    getCart() {
      return this.cart
    },
    quantity() {
      return this.quantity_default
    },
    getIsAuthenticated() {
      const { getLocalStorage } = useLocalStorage()
      const isAuthenticated = getLocalStorage("isAuthenticated")
      return isAuthenticated
    }
  },
  methods: {
    ...mapActions('products', [
      'increaseQuantityProduct',
      'decreaseQuantityProduct',
    ]),
    ...mapActions('auth', [
      'addCartUserRequest'
    ]),
    handleSubmit(e) {
      // toast props: type, message, options, customMsg, handleClickToast
      e.preventDefault();
      if (this.getIsAuthenticated) {
        console.log(this.quantity)
        const data = {
          ...this.productDetail,
          quantity: this.quantity
        }
        const isSameProduct = this.getCart.some(item => item.id === this.productDetail.id)
        if(!isSameProduct) {
          this.getCart.push(data)
        }
        const cartUserItem = this.getCart
        this.addCartUserRequest(cartUserItem)
        toastMessage(
          "success",
          "Add to cart success!!",
          {
            ...CONFIG_TOAST,
            duration: 2000,
            position: "top-center",
          }
        )
      } else {
        const handleClickToast = () => {
          this.$router.push('/user/login')
        }
        toastMessage(
          "error",
          "Please login first !!",
          {
            ...CONFIG_TOAST,
            duration: 10000,
            position: "top-right",
            keepOnHover: true
          },
          "Go to login",
          handleClickToast
        )
      }
    }
  },
  destroyed() {
    this.$toasted.clear()
  }
};
</script>
