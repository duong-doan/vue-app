<template>
  <div class="product-detail__comments">
    <ul>
      <li
        v-for="titleTab in titleTabs"
        :key="titleTab.id"
        @click="handleClickTabs(titleTab.id)"
        :class="titleTab.active ? 'active' : ''"
      >
        {{ titleTab.title }}
      </li>
    </ul>
    <div class="product-detail__comments__content">
      <div
        class="product-detail__comments__content--description"
        v-if="titleTabs[0].active"
      >
        <h6>Description</h6>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </div>
      <div class="product-detail__comments__content--reviews" v-else>
        <form action="" @submit="handleSunmit">
          <h5>Reviews</h5>
          <h6>YOUR RATING *</h6>
          <star-rating
            :show-rating="false"
            @rating-selected="setRating"
          ></star-rating>

          <form-group classname="form-group__custom" label="YOUR REVIEW *">
            <textarea
              name="feedback"
              rows="4"
              cols="36"
              placeholder="Feedback..."
            />
          </form-group>

          <form-group classname="form-group__custom" label="NAME *">
            <base-input
              name="name"
              type="text"
              placeholder="Name..."
              classname="b-input-comment"
            />
          </form-group>

          <form-group label="EMAIL *" classname="form-group__custom">
            <base-input
              name="email"
              type="text"
              placeholder="Email..."
              classname="b-input-comment"
            />
          </form-group>

          <div class="form-group checkbox-save">
            <base-input-checkbox
              label="SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I COMMENT."
              id="save-info"
              name="save-info"
            />
          </div>

          <br />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { TITLE_TAB_INFO_USER_PRODUCT_DETAIL } from "@/utils/constants";
import FormGroup from "@/components/FormGroup";
import BaseInput from "@/components/BaseInput";
import BaseInputCheckbox from "@/components/BaseInputCheckbox";
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
    BaseInput,
    BaseInputCheckbox,
    FormGroup,
  },
  data() {
    return {
      titleTabs: TITLE_TAB_INFO_USER_PRODUCT_DETAIL,
      rating: 0,
    };
  },
  methods: {
    handleClickTabs(id) {
      TITLE_TAB_INFO_USER_PRODUCT_DETAIL.filter((title) => {
        if (title.id === id) {
          title.active = true;
        } else {
          title.active = false;
        }
        return title;
      });
    },
    handleSunmit(e) {
      e.preventDefault();
    },
    setRating(rating) {
      this.rating = rating;
    },
  },
};
</script>

<style lang="scss" scoped>
.b-input-comment {
  display: flex;
  flex-direction: column;
}
</style>
