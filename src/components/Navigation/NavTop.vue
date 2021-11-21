<template>
  <div class="header__nav-top">
    <div class="container">
      <div class="header__nav-top__wrapped">
        <div class="header__nav-top__left">
          <ul>
            <li>
              <a href="">
                <i class="fas fa-map-marker-alt"></i>
                <span>Da Nang</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-phone-alt"></i>
                <span>0123456789</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="header__nav-top__right">
          <ul v-if="!getUserLogin.isAuthenticated">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <div v-else class="nav-top__right__user">
            <div class="user__info">
              <img :src="getUserLogin.user.avatar" style="width: 20px; height: 20px" alt="avatar">
              <span>{{ getUserLogin.user.name }}/ </span>
              <a href="#" @click="handleClickLogout">Logout</a>
            </div>
            <b-modal></b-modal>
          </div>
        </div>
      </div>
    </div>
    <modal />
  </div>
</template>

<script>
import useLocalStorage from '../../utils/useLocalStorage'
import Modal from '../../components/Modal'

export default {
  name: "NavTop",
  components: {
    Modal
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
  methods: {
    handleClickLogout() {
    }
  }
};
</script>

<style lang="scss">
  .user__info {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      color: white;
    }
    a {
      text-decoration: none;
      font-size: 1.2rem;
      color: #b7a188;
      transition: all 0.2s;

      &:hover {
        color: #c89979;
      }
    }
  }
</style>
