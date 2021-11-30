<template>
  <input
    :id="id"
    :type="type ? type : 'text'"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    autocomplete="off"
    :disabled="disabled"
    @change="handleChange"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script>
export default {
  props: ["id", "required", "name", "value", "onChange", "onBlur", "onKeydown", "type", "placeholder", "disabled"],
  methods: {
    handleChange(e) {
      this.onChange(this.id, e);
    },
    handleBlur(e) {
      this.onBlur(e)
    },
    handleKeydown(e) {
      this.onKeydown(e)
    }
  },
};
</script>

<style lang="scss"></style>
