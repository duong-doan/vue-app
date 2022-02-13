<template>
  <div class="side-bar">
    <form @submit="handleSubmit">
      <div class="filter-menu my-5">
        <h6 class="filter-menu__title font">Brands</h6>
        <div class="filter-menu__content">
          <BaseInputRadio
            v-for="brand in data_brands"
            :key="brand.title"
            :label="brand.label"
            :id="brand.id"
            :name="brand.name"
            :onChange="handleChangeRadio"
            className="input-checkbox__custom"
          />
        </div>
      </div>

      <div class="filter-menu">
        <h6 class="filter-menu__title">Price</h6>
        <div class="filter-menu__content">
          <div class="custom-range">
            <span class="price-limit__start">0$</span>
            <b-form-input
              id="range"
              type="range"
              min="0"
              max="20000"
              step="1000"
              v-model="valueRange"
            />
            <span class="price-limit__end">20000$</span>
          </div>
          <div class="custom-range__result">{{ valueRange }}$</div>
        </div>
      </div>

      <base-button :onClick="handleClick" :processing="processing"
        >Filter</base-button
      >
    </form>
  </div>
</template>

<script>
import BaseInputRadio from "@/components/BaseInputRadio";
import BaseButton from "@/components/BaseButton";
import { DATA_BRANDS, TYPE_SEARCH } from "../store/constants";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BaseInputRadio,
    BaseButton,
  },
  data() {
    return {
      data_brands: DATA_BRANDS,
      valueRange: 0,
      valueRadio: "",
    };
  },
  computed: {
    ...mapGetters("category", ["processing"]),
  },
  methods: {
    ...mapActions("category", ["getFilterProducts"]),
    handleClick() {},
    handleChangeRadio(e) {
      this.valueRadio = e.target.id;
    },
    async handleSubmit(e) {
      e.preventDefault();
      const data = {
        brand: this.valueRadio,
        price: this.valueRange,
        type: TYPE_SEARCH.FILTER,
      };
      await this.getFilterProducts(data);
    },
  },
  destroyed() {
    (this.valueRange = 0), (this.valueRadio = "");
  },
};
</script>

<style lang="scss">
.side-bar {
  form {
    display: flex;
    flex-direction: column;

    .filter-menu {
      .input-checkbox__custom {
        justify-content: space-between;
        flex-direction: row-reverse;
      }
      &__title {
        width: 100%;
        background: #b59979;
        color: black;
        text-align: center;
        font-size: 22px;
        padding: 8px 0;
      }
      &__content {
        label {
          font-size: 18px;
        }
      }

      &:nth-child(2) {
        .filter-menu__content {
          .custom-range {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 16px;

            input {
              margin-top: 0;
            }

            .price-limit__start,
            .price-limit__end {
              font-size: 16px;
            }
            &__result {
              display: inline-block;
              width: 100%;
              text-align: center;
              font-weight: bolder;
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
}
</style>
