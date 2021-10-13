<template>
  <div class="login-box__wrapper">
    <div class="login-box">
      <h2>Login</h2>
      <form autocomplete="off" @submit="handleSubmit">
        <div class="user-box">
          <base-input
            v-for="input in data"
            :key="input.id"
            :id="input.id"
            :label="input.name"
            :type="input.type"
            :required="input.required"
            :value="userInfo[input.id]"
            :onchange="handleChangeInput"
            :reverseLabel="true"
            :isEdit="isEditInput"
          />
        </div>
        <div class="wrapped-btn">
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <router-link to="/user/register">Create a new account</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../../components/BaseInput";
import { dataInputLogin } from "../constants";

export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      data: dataInputLogin,
      userInfo: {
        username: "",
        password: "",
      },
      isEditInput: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.userInfo);
    },
    handleChangeInput(id, e) {
      this.userInfo = {
        ...this.userInfo,
        [id]: e.target.value,
      };
      this.userInfo[id] !== ""
        ? (this.isEditInput = true)
        : (this.isEditInput = false);
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/abstracts/_variables.scss";

.login-box__wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient($hover__color--primary, $hover__color--secondary);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: $white;
    text-align: center;
    font-size: 3rem;
  }

  form {
    .user-box {
      .input-text {
        position: relative;

        input {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: $white;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid $white;
          outline: none;
          background: transparent;
        }

        input:focus ~ label {
          top: -20px;
          left: 0;
          color: $hover__color--secondary;
          font-size: 12px;
        }

        label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: $white;
          pointer-events: none;
          transition: 0.5s;
        }
      }

      .input-text.is-edit {
        input ~ label {
          top: -20px;
          left: 0;
          color: $hover__color--secondary;
          font-size: 12px;
        }
      }
    }

    .wrapped-btn {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 20px;
      button {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: $hover__color--primary;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        letter-spacing: 4px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-bottom: 20px;

        &:hover {
          background: $hover__color--secondary;
          color: $text__color--darker;
          border-radius: 5px;
          box-shadow: 0 0 5px $hover__color--secondary,
            0 0 25px $hover__color--secondary, 0 0 50px $hover__color--secondary,
            0 0 100px $hover__color--secondary;
        }

        span {
          position: absolute;
          display: block;
        }

        span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim1 1s linear infinite;
        }

        span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim2 1s linear infinite;
          animation-delay: 0.25s;
        }

        span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            270deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim3 1s linear infinite;
          animation-delay: 0.5s;
        }

        span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            360deg,
            transparent,
            $hover__color--secondary
          );
          animation: btn-anim4 1s linear infinite;
          animation-delay: 0.75s;
        }
      }

      a {
        color: $white;
      }
    }
  }
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
