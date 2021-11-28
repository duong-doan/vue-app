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
              <span>
                <router-link :to="`user/${userId}/information`">{{ getUserLogin.user.name }}</router-link>/
              </span>
              <a v-b-modal.modal href="#" @click="handleClickLogout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal text="Do you want logout?" :onSubmit="handleSubmit" :onClose="handleClose" />
  </div>
</template>

<script>
import useLocalStorage from '../../utils/useLocalStorage'
import Modal from '../../components/Modal'
import { mapActions, mapGetters } from 'vuex';

const { getLocalStorage } = useLocalStorage()
const user = getLocalStorage("user")

export default {
  name: "NavTop",
  components: {
    Modal
  },
  computed: {
    ...mapGetters('auth', ['userLogin']),
    getUserLogin() {
      const isAuthenticated = getLocalStorage("isAuthenticated")
      return {
        user,
        isAuthenticated
      }
    },
    makeGetUser() {
      return this.userLogin
    },
    userId() {
      return user.id
    }
  },
  methods: {
    ...mapActions('auth', ['setIsAuthenticated']),
    handleClickLogout() {
      this.$bvModal.show('modal')
      document.body.classList.add("disabled-scroll")
    },
    handleSubmit() {
      const { removeLocalStorage, setLocalStorage } = useLocalStorage()
      removeLocalStorage('user')
      setLocalStorage('isAuthenticated', false)
      this.setIsAuthenticated(true)
      this.$bvModal.hide('modal')
      window.location.reload()
    },
    handleClose() {
      this.$bvModal.hide('modal')
      document.body.classList.remove("disabled-scroll")
    }
  }
};
</script>

<style lang="scss">
  .disabled-scroll {
    height: 100%;
    overflow: hidden;
  }
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
      font-size: 1.5rem;
    }
    a {
      text-decoration: none;
      font-size: 1.4rem;
      color: #b7a188;
      transition: all 0.2s;

      &:hover {
        color: #c89979;
      }
    }
  }
</style>
