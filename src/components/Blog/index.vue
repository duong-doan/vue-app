<template>
  <div class="blog" data-aos="fade-up" data-aos-duration="2000">
    <div class="blog__wrapped">
      <div class="blog__image">
        <img :src="image" alt="" />
      </div>
      <div class="blog__content">
        <h3>STUNNING BLACK BELT WATCH</h3>
        <span>20 / Sep/ 2021</span>
        <div class="blog__content__comments">
          <span>0 comments</span>
          <div></div>
          <span> <i class="fas fa-user"></i> Duong Doan </span>
        </div>
        <p>
          Pellentesque posuere orci lobortis scelerisque blandit. Donec id
          tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos
          sodales suscipit tortor ditaemcos Pellentesque posuere orci lobortis
          scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac,
          consequat velit. Quisquemos sodales suscipit tortor ditaemcos
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image"],
};
</script>
