<template>
  <input
    :id="id"
    :type="type ? type : 'text'"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    autocomplete="off"
    @change="handleChange"
  />
</template>

<script>
export default {
  props: ["id", "required", "name", "value", "onchange", "type", "placeholder"],
  methods: {
    handleChange(e) {
      this.onchange(this.id, e);
    },
  },
};
</script>

<style lang="scss"></style>
