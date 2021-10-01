<template>
  <div class="product-payment">
    <div class="container">
      <div class="product-payment__wrapped">
        <div class="row">
          <div class="col-7">
            <h1 class="title">Marley - Watch Shop</h1>
            <div class="product-payment__info__tabs">
              Information > Shipping > Payment
            </div>
            <InfoPayment />
            <ShipPayment />
            <FinalPayment />
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
import InfoPayment from "../components/InfoPayment.vue";
import ShipPayment from "../components/ShipPayment.vue";
import FinalPayment from "../components/FinalPayment.vue";
import TotalPayment from "../components/TotalPayment.vue";

export default {
  components: {
    InfoPayment,
    ShipPayment,
    FinalPayment,
    TotalPayment,
  },
};
</script>

<style lang="scss">
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
}
</style>
