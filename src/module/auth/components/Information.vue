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
            <b-tabs pills card vertical nav-wrapper-class="w-20" active-tab-class="active-tab">
              <b-tab title="My profile" active>
                <b-card-text>
                  <div class="profile row">
                    <div class="profile__header">
                      <div class="profile__header__title">
                        <h3>My profile</h3>
                        <span>Manage profile information for account security</span>
                      </div>
                    </div>
                    <div class="profile__body">
                      <div class="row">
                        <div class="profile__body__content col-lg-8 col-sm-12">
                          <form>
                            <form-group label="Username" class="profile__input">
                              <template v-if="isEdit">
                                <form id="form-change-name">
                                  <button @click="handleSubmitChange">ok</button>
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
                                <span class="profile__input--change" @click="handleClickChange">change</span>
                                <span>{{ user.name }}</span>
                              </template>
                            </form-group>
                            <form-group label="Email" class="profile__input">
                              <span>{{ user.email }}</span>
                            </form-group>
                            <form-group label="Phone number" class="profile__input">
                              <base-input 
                                id="phone"
                                name="phone"
                                :value="valueInput.name"
                                :onChange="handleChange"
                                :onBlur="handleBlur"
                                :onKeydown="handleKeydown"
                              />
                            </form-group>
                            <form-group label="Birth day" class="profile__input">
                              <base-input 
                                type="date"
                                name="phone"
                              />
                            </form-group>
                            <button>SAVE</button>
                          </form>
                        </div>
                        <div class="profile__body__image col col-lg-4 col-sm-12">
                          <form action="">
                            <img id="img_url" :src="`${user.avatar}`" alt="image">
                            <div>
                              <input id="input_file" type="file" hidden @change="handleChooseFileImage">
                              <label for="input_file">Choose File</label>
                              <span class="title-upload">No file chosen</span>
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
import Breadcrumb from "../../../components/Breadscrum"
import useLocalStorage from "../../../utils/useLocalStorage"
import FormGroup from "../../../components/FormGroup"
import BaseInput from "../../../components/BaseInput"
import { BTabs } from 'bootstrap-vue'

const { getLocalStorage } = useLocalStorage()

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
        valueInput: {
          name: "",
          phone: ""
        }
      }
    },
    computed: {
      breadcrumb() {
        return [
          {
            id: 1,
            text: "Home",
            to: "/"
          },
          {
            id: 2,
            text: `${this.user.name}`,
          }
        ]
      }
    },
    methods: {
      handleChooseFileImage() {
        const imgEl = document.querySelector("#img_url")
        const inputEl = document.querySelector("#input_file")
        const titleEl = document.querySelector(".title-upload")
        imgEl.src = URL.createObjectURL(inputEl.files[0])
        titleEl.textContent = inputEl.files[0].name
      },
      handleClickChange() {
        this.isEdit = true
      },
      handleSubmitChange() {
        this.isEdit = false
      },
      handleBlur() {
        this.isEdit = false
      },
      handleChange(id, e) {
        this.valueInput = {
          ...this.valueInput,
          [id]: e.target.value
        }
      },
      handleKeydown(e) {
        if(e.key === "Escape") {
          this.isEdit = false
        }
      }
    },
    created() {
      const userLocal = getLocalStorage("user")
      this.user = userLocal
    }
}
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
          button {
            padding: 10px 20px;
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
              background: $pink;
              color: $white;

              &:hover {
                cursor: pointer;
              }
            }
          }

        }
      }
    }
  }


</style>