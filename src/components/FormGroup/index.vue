<template>
  <div :class="['form-group', classname]">
    <template v-if="errorText">
      <span class="form-group__error">{{ errorText }}abc</span>
    </template>
    <slot></slot>
    <label class="form-group__label">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  props: ["classname", "label", "errorText"],
};
</script>

<style lang="scss">
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  &__error {
    color: #e86d23;
    position: absolute;
    bottom: 12px;
    left: 0;
  }
}
</style>
