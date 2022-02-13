<template>
  <div :class="['input-checkbox', className]">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="isChecked"
      :placeholder="placeholder"
      @change="handleChange"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "id",
    "onchange",
    "type",
    "placeholder",
    "label",
    "isChecked",
    "className",
    "onChange",
  ],
  methods: {
    handleChange(e) {
      this.onChange(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-checkbox {
  display: flex;
  align-items: center;
  input {
    padding: 1rem;
    font-size: 1.4rem;
    color: #888;
  }
}
</style>
