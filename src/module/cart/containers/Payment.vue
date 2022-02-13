<template>
  <div class="product-payment">
    <nav-top />
    <nav-middle />
    <div class="container">
      <div class="product-payment__wrapped">
        <div class="row">
          <div class="col-7">
            <h1 class="title">Marley - Watch Shop</h1>
            <div class="product-payment__info__tabs">
              <h6
                v-for="(tab, index) in renderTabs"
                :key="index"
                @click="handleClickTab(tab.step)"
                :class="['title-tab', { active: tab.step === stepTab }]"
              >
                {{ tab.text }}
                <span v-if="index !== renderTabs.length - 1">></span>
              </h6>
            </div>
            <div v-switch="stepTab">
              <div v-case="1"><InfoPayment /></div>
              <div v-case="2"><ShipPayment /></div>
              <div v-case="3"><FinalPayment /></div>
            </div>
          </div>
          <div class="col-5">
            <TotalPayment />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPayment from "../components/InfoPayment";
import ShipPayment from "../components/ShipPayment";
import FinalPayment from "../components/FinalPayment";
import TotalPayment from "../components/TotalPayment";
import NavTop from "@/pages/home/HeaderComponent/Navigation/NavTop.vue";
import NavMiddle from "@/pages/home/HeaderComponent/Navigation/NavMiddle.vue";
import { tabsPayment } from "../store/constants";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    InfoPayment,
    ShipPayment,
    FinalPayment,
    TotalPayment,
    NavTop,
    NavMiddle,
  },
  computed: {
    ...mapGetters("cart", ["step"]),
    stepTab() {
      return this.step;
    },
    renderTabs() {
      return tabsPayment;
    },
  },
  methods: {
    ...mapActions("cart", ["setStep"]),
    handleClickTab(step) {
      this.setStep(step);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/abstracts/_variables.scss";

.title {
  margin-top: 10rem;
  font-size: 3.5rem;
  color: #b59979;
  padding-left: 5rem;
}

.product-payment__info__tabs {
  margin: 3rem 0;
  font-size: 2rem;
  padding-left: 5rem;
  display: flex;
  align-items: center;

  .title-tab {
    font-size: 2rem;

    &:hover {
      cursor: pointer;
      color: $hover__color--primary;
      span {
        color: black;
      }
    }
    span {
      margin: 0 4px;
    }
  }

  .active {
    color: $hover__color--primary;
    span {
      color: black;
    }
  }
}
</style>
