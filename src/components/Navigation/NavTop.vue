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
          <ul v-if="!getIsAuthenticated">
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
              <div class="user__info__img">
                <img :src="getUserLogin.avatar" alt="avatar">
              </div>
              <h3>{{ getUserLogin.name }}</h3>
              <div class="dropdown__info__wrapped">
                <div class="dropdown__info">
                  <ul>
                    <li>
                      <router-link class="link-router" :to="`user/${userId}/information`">My information</router-link>
                    </li>
                    <li>
                      <a v-b-modal.modal href="#" @click="handleClickLogout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              
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

export default {
  name: "NavTop",
  components: {
    Modal
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    ...mapGetters('auth', ['userLogin']),
    getIsAuthenticated() {
      const isAuthenticated = getLocalStorage("isAuthenticated")
      return isAuthenticated
    },
    getUserLogin() {
      return this.user
    },
    makeGetUser() {
      return this.userLogin
    },
    userId() {
      return this.user.id
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
  },
  created() {
    this.user = getLocalStorage("user")
  }
};
</script>

<style lang="scss">
@import "../../assets/sass/abstracts/_variables.scss";
  .disabled-scroll {
    height: 100%;
    overflow: hidden;
  }

  .user__info {
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px 0;

    &:hover {
      .dropdown__info__wrapped {
        visibility: visible;
        opacity: 1;
      }
    }

    &__img {
      border: 1px solid white;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    h3 {
      color: $white;
      font-size: 1.4rem;
      margin: 0;
    }
    .dropdown__info__wrapped {
      position: absolute;
      top: 35px;
      right: 0;
      z-index: 11;
      visibility: hidden;
      transition: all 0.2s;
      opacity: 0;
      background: white;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        margin: 0;
        width: 200px;
        li {
          margin-bottom: 5px;
          a {
            transition: all 0.2s;
            color: black;
            &:hover {
              color: $hover__color--primary;
            }
          }
        }
      }
    }
  }

</style>
