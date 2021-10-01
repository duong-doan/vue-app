<template>
  <div class="section__blog">
    <div class="container">
      <h1>JOURNAL</h1>
      <span class="section__blog__sub"
        >Here’s what we’re working on and thinking about at Nest.</span
      >
      <div class="section__blog__wrapped">
        <Blog v-for="item in data" :image="item.image" :key="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../../../../components/Blog/index.vue";
import { DATA_BLOG } from "../../../../utils/constants";

export default {
  components: {
    Blog,
  },
  data() {
    return {
      data: DATA_BLOG,
    };
  },
};
</script>
