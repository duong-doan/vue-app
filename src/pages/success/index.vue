<template>
  <div class="buy-success">
    <div class="card text-center">
      <div
        style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;"
        class="d-flex justify-content-center"
      >
        <i class="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p class="mb-5">
        We received your purchase request;<br />
        we'll be in touch shortly!
      </p>
      <base-button :onClick="handleClick">Go Back</base-button>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/BaseButton";
import { toastMessage } from "@/utils/notification";

export default {
  components: {
    BaseButton,
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
  created() {
    toastMessage("success", "Congratulation!!");
  },
  destroyed() {
    this.$toasted.clear();
  },
};
</script>
<style lang="scss" scoped>
.buy-success {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #ebf0f5;
}

h1 {
  color: #88b04b;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404f5e;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 0;
}
i {
  color: #9abc66;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
}
</style>
