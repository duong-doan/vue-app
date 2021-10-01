<template>
  <div class="slider-product-item">
    <div class="slider-product-item__wrapped">
      <img :class="className" :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "className"],
};
</script>
