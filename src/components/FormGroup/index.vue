<template>
  <div :class="['form-group', classname]">
    <slot></slot>
    <label class="form-group__label">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  props: ["classname", "label"],
};
</script>

<style lang="scss">
.form-group {
  display: flex;
  flex-direction: column;
}
</style>
