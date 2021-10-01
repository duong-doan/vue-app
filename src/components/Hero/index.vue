<template>
  <div class="hero__item" :data-aos="classAnimation" data-aos-duration="2000">
    <div class="hero__item__content">
      <h4>{{ description }}</h4>
      <hr />
      <h2>{{ title }}</h2>
    </div>
    <img :src="bgHero" alt="" />
  </div>
</template>

<script>
export default {
  props: ["title", "bgHero", "classAnimation", "description"],
};
</script>
