<template>
  <div class="accordion" role="tablist" v-if="orders.length > 0">
    <b-card v-for="order in orders" :key="order.id" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tabpanel">
        <b-button
          block
          v-b-toggle="'accordion' + order.id"
          variant="info"
          class="title"
          >Order {{ order.id + 1 }}</b-button
        >
      </b-card-header>
      <b-collapse
        :id="'accordion' + order.id"
        :accordion="'accordion' + order.id"
        role="tabpanel"
      >
        <b-card-body>
          <ul class="list-unstyled">
            <b-media v-for="product in order.cart" :key="product.id" tag="li">
              <template #aside>
                <img
                  :src="product.image"
                  class="product-img"
                  alt="placeholder"
                />
              </template>
              <h5 class="mt-0 mb-1">{{ product.name }}</h5>
              <p class="mb-0">{{ product.price }}</p>
            </b-media>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["orders"],
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 16px;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.product-img {
  width: 40px;
  height: 40px;
}
</style>
