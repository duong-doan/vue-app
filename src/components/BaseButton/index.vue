<template>
  <button :class="['b-button', classname]" @click="handleClick" type="submit">
    <b-spinner v-if="processing"></b-spinner>
    <span v-else><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: ["classname", "processing", "onClick"],
  methods: {
    handleClick() {
      this.onClick();
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/abstracts/_variables.scss";
.b-button {
  margin-top: 2rem;
  padding: 1rem 2.4rem;
  font-size: 1.4rem;
  border: 1px solid $border__color--primary;
  outline: none;
  border-radius: 4px;
  transition: ease 0.5s;
  position: relative;

  &:hover {
    transition: ease 0.5s;
    background: $hover__color--primary;
    color: $text__color--primary;
  }
}
</style>
