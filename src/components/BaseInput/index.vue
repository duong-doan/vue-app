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
  />
</template>

<script>
export default {
  props: ["id", "required", "name", "value", "onchange", "type", "placeholder", "disabled"],
  methods: {
    handleChange(e) {
      this.onchange(this.id, e);
    },
  },
};
</script>

<style lang="scss"></style>
