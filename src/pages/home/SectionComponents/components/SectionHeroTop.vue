<template>
  <div class="section__hero--top">
    <div class="section__hero--top__wrapped">
      <HeroItem
        :description="heros[0].description"
        :classAnimation="heros[0].classAnimation"
        :title="heros[0].watch"
        :bgHero="heros[0].bgHero"
      />
      <div class="section__hero--top__center" data-aos="fade-up">
        <HeroItem
          :description="heros[1].description"
          :title="heros[1].watch"
          :bgHero="heros[1].bgHero"
        />
        <HeroItem
          :description="heros[2].description"
          :title="heros[2].watch"
          :bgHero="heros[2].bgHero"
        />
      </div>
      <HeroItem
        :description="heros[3].description"
        :classAnimation="heros[3].classAnimation"
        :title="heros[3].watch"
        :bgHero="heros[3].bgHero"
      />
    </div>
  </div>
</template>

<script>
import HeroItem from "../../../../components/Hero/index.vue";
import { DATA_SECTION_HERO_TOP } from "../../../../utils/constants";

export default {
  components: { HeroItem },
  data() {
    return {
      heros: DATA_SECTION_HERO_TOP,
    };
  },
};
</script>
