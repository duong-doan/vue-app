<template>
  <div class="user-info">
    <div class="user-info__wrapped">
      <div class="user-info__breadcrumb">
        <div class="container">
          <breadcrumb :breadcrumb="breadcrumb" />
        </div>
      </div>
      <div class="container">
        <h1>User info</h1>
        <div>
          <b-card no-body>
            <b-tabs
              pills
              card
              vertical
              nav-wrapper-class="w-20"
              active-tab-class="active-tab"
            >
              <b-tab title="My profile" active>
                <b-card-text>
                  <div class="profile row">
                    <div class="profile__header">
                      <div class="profile__header__title">
                        <h3>My profile</h3>
                        <span
                          >Manage profile information for account security</span
                        >
                      </div>
                    </div>
                    <div class="profile__body">
                      <div class="row">
                        <div class="profile__body__content col-lg-8 col-sm-12">
                          <form @submit="handleSubmit">
                            <form-group label="Username" class="profile__input">
                              <template v-if="isEdit">
                                <form id="form-change-name">
                                  <button
                                    class="btn-submit btn-submit__change-name"
                                    @click="handleSubmitChange"
                                  >
                                    ok
                                  </button>
                                  <base-input
                                    id="name"
                                    name="name"
                                    :value="valueInput.name"
                                    :onChange="handleChange"
                                    :onBlur="handleBlur"
                                    :onKeydown="handleKeydown"
                                  />
                                </form>
                              </template>
                              <template v-else>
                                <span
                                  class="profile__input--change"
                                  @click="handleClickChange"
                                  >change</span
                                >
                                <span>{{
                                  valueInput.name ? valueInput.name : user.name
                                }}</span>
                              </template>
                            </form-group>
                            <form-group label="Email" class="profile__input">
                              <span>{{ user.email }}</span>
                            </form-group>
                            <form-group
                              label="Phone number"
                              class="profile__input"
                            >
                              <base-input
                                id="phone"
                                name="phone"
                                :value="
                                  valueInput.phone
                                    ? valueInput.phone
                                    : user.phone
                                "
                                :onChange="handleChange"
                                :onBlur="handleBlur"
                                :onKeydown="handleKeydown"
                              />
                            </form-group>
                            <form-group
                              label="Birth day"
                              class="profile__input"
                            >
                              <base-input
                                id="date"
                                type="date"
                                name="date"
                                :value="user.birthDay"
                                :onChange="handleChange"
                                :onBlur="handleBlur"
                                onKeydown=""
                              />
                            </form-group>
                            <button
                              :class="[
                                'btn-submit btn-submit__form',
                                {
                                  'btn-submit__loading': isProgressUpdate,
                                  'btn-submit__active': activeBtn,
                                },
                              ]"
                              type="submit"
                            >
                              SAVE
                              <div
                                v-if="isProgressUpdate"
                                class="loader-small"
                              ></div>
                            </button>
                          </form>
                        </div>
                        <div
                          class="profile__body__image col col-lg-4 col-sm-12"
                        >
                          <form action="">
                            <img
                              ref="img"
                              :src="`${user.avatar}`"
                              alt="image"
                            />
                            <div>
                              <input
                                id="input_file"
                                ref="input"
                                type="file"
                                hidden
                                @change="handleChooseFileImage"
                              />
                              <label for="input_file">Choose File</label>
                              <span ref="span">No file chosen</span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Orders">
                <b-card-text>Tab contents 2</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { BTabs } from "bootstrap-vue";
// Components
import Breadcrumb from "../../../components/Breadscrum";
import FormGroup from "../../../components/FormGroup";
import BaseInput from "../../../components/BaseInput";
// Utils
import useLocalStorage from "../../../utils/useLocalStorage";
import { toastMessage } from "../../../utils/notification";
import {
  CONFIG_TOAST,
  MODULES,
  ROUTES,
  STATUS_TOAST,
  POSITION_TOAST,
  EN_LANG,
} from "../../../utils/constants";
// Store
import { AUTH_STATE, UPDATE_USER_REQUEST } from "../store/constants";

const { AUTH } = MODULES;
const { IS_PROGRESS_UPDATE } = AUTH_STATE;
const { SUCCESS } = STATUS_TOAST;
const { TOP_RIGHT } = POSITION_TOAST;

const { getLocalStorage } = useLocalStorage();

export default {
  components: {
    Breadcrumb,
    FormGroup,
    BaseInput,
    BTabs,
  },
  data() {
    return {
      user: {},
      isEdit: false,
      imgUrl: "",
      valueInput: {
        name: "",
        phone: "",
        date: "",
      },
      activeBtn: false,
    };
  },
  computed: {
    ...mapGetters(AUTH, [IS_PROGRESS_UPDATE]),
    breadcrumb() {
      return [
        {
          id: 1,
          text: "Home",
          to: ROUTES.HOME,
        },
        {
          id: 2,
          text: `${this.user.name}`,
        },
      ];
    },
  },
  methods: {
    ...mapActions(AUTH, [UPDATE_USER_REQUEST]),
    handleChooseFileImage() {
      // const file = inputEl.files[0]
      const fileType = this.$refs.input.files[0].type;
      const validateType = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/JPG",
        "image/JPEG",
        "image/PNG",
      ];
      if (validateType.includes(fileType)) {
        // const fileReader = new FileReader()
        // fileReader.onload = () => {
        //   const fileURL = fileReader.result
        //   titleEl.textContent = inputEl.files[0].name
        //   imgEl.src = fileURL
        //   this.imgUrl = fileURL
        // }
        // fileReader.readAsDataURL(file)
        this.$refs.span.textContent = this.$refs.input.files[0].name;
        this.$refs.span.style = "color: black;";
        this.$refs.img.src = URL.createObjectURL(this.$refs.input.files[0]);
        this.imgUrl = URL.createObjectURL(this.$refs.input.files[0]);
      } else {
        this.$refs.span.textContent = "This file is error";
        this.$refs.span.style = "color: red;";
        this.$refs.img.src = "";
        this.imgUrl = "";
      }
    },
    handleClickChange() {
      this.isEdit = true;
    },
    handleSubmitChange() {
      this.isEdit = false;
      const { name } = this.valueInput;
      if (name) {
        this.valueInput = {
          ...this.valueInput,
          name,
        };
      }
    },
    handleBlur() {
      this.isEdit = false;
      // const {name, phone, date} = this.valueInput
      // if(name || phone || date) {
      //   this.activeBtn = true
      // } else {
      //   this.activeBtn = false
      // }
    },
    handleChange(id, e) {
      this.valueInput = {
        ...this.valueInput,
        [id]: e.target.value,
      };
    },
    handleKeydown(e) {
      if (e.key === "Escape") {
        this.isEdit = false;
      }
    },
    async handleSubmit(e) {
      e.preventDefault();
      const { name, phone, date } = this.valueInput;
      const customData = {
        ...this.user,
        avatar: this.imgUrl ? this.imgUrl : this.user.avatar,
        name: name ? name : this.user.name,
        phone: phone ? phone : this.user.phone,
        birthDay: date,
      };
      await this.updateUserRequest(customData);
      await toastMessage(SUCCESS, EN_LANG.auth.update_success, {
        ...CONFIG_TOAST,
        duration: 2000,
        position: TOP_RIGHT,
      });
    },
  },
  created() {
    const userLocal = getLocalStorage("user");
    this.user = userLocal;
  },
  watch: {
    valueInput(value) {
      const keys = Object.keys(value);
      const isEmpty = keys.includes((item) => {
        if (value[item]) {
          return false;
        }
      });
      if (!isEmpty) this.activeBtn = true;
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/abstracts/_variables.scss";
.nav-link.active {
  color: brown !important;
  background: transparent !important;
}
.nav-link {
  color: burlywood !important;
}

.profile {
  &__header {
    &__title {
      border-bottom: 1px solid $gray-400;
      padding-bottom: 20px;

      span {
        color: $gray-600;
      }
    }
  }

  &__body {
    padding-top: 20px;
    &__content {
      form {
        .btn-submit {
          position: relative;
          padding: 10px 30px;
          background: $hover__color--primary;
          color: $white;
          border: none;
          border-radius: 3px;
          transition: 0.2s all;
          font-size: 1.4rem;
        }

        .btn-submit__form {
          opacity: 0;
          visibility: hidden;

          .loader-small {
            position: absolute;
            left: 10px;
            top: 26%;
            transform: translateY(-50%);
            margin: 0;
            width: 20px;
            height: 20px;
          }

          &:hover {
            background: rgb(204, 183, 156);
          }
        }

        .btn-submit__loading {
          padding: 10px 30px 10px 50px;
        }

        .btn-submit__active {
          opacity: 1;
          visibility: visible;
        }

        #form-change-name {
          display: flex;
          flex-direction: row-reverse;
        }
        .profile__input {
          display: flex;
          align-items: baseline;
          flex-direction: row-reverse;
          justify-content: flex-end;
          height: 40px;

          label {
            font-size: 1.5rem;
            color: $text__color--dark;
            font-weight: 300;
            width: 20%;
          }

          span {
            margin-left: 10px;
            font-size: 1.6rem;
          }

          input {
            margin-left: 10px;
            font-size: 1.6rem;
            padding: 5px 10px;
          }

          ::placeholder {
            font-size: 1.2rem;
          }

          span.profile__input--change {
            text-decoration: underline;
            font-size: 1rem;
            color: $hover__color--primary;
            margin-bottom: 2px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    &__image {
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 20px;
          border: 1px solid $gray-400;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: baseline;

          label {
            border: 1px solid;
            padding: 5px 10px;
            margin-right: 4px;
            border-radius: 3px;
            background: $hover__color--primary;
            color: $white;
            transition: 0.2s all;

            &:hover {
              cursor: pointer;
              background: rgb(204, 183, 156);
            }
          }
        }
      }
    }
  }
}
</style>
