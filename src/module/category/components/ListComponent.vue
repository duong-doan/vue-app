<template>
  <div class="category-page">
    <nav-middle :hiddenSearch="true" />
    <div class="container">
      <div class="search-bar">
        Result search: <span>{{ querySearch }}</span>
      </div>
      <div class="product-search__wrapped px-5 row">
        <div class="col-3">
          <sidebar />
        </div>
        <div class="col-9 ">
          <filter-products />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMiddle from "@/pages/home/HeaderComponent/Navigation/NavMiddle.vue";
import Sidebar from "./Sidebar.vue";
import FilterProducts from "./FilterProducts.vue";
import useLocalStorage from "@/utils/useLocalStorage";
import { mapActions } from "vuex";

export default {
  components: { Sidebar, NavMiddle, FilterProducts },
  data() {
    return {
      querySearch: "",
    };
  },
  methods: {
    ...mapActions("category", ["clearDataSearch"]),
  },
  created() {
    const { getLocalStorage } = useLocalStorage();
    this.querySearch = getLocalStorage("query_search");
  },
  destroyed() {
    this.clearDataSearch();
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/abstracts/_variables.scss";

.search-bar {
  font-size: 20px;
  margin: 0 30px;
  padding: 10px 0;
  span {
    color: $hover__color--primary;
  }
}
</style>
