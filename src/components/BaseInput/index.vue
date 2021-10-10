<template>
  <div class="input-text">
    <template v-if="labelTop">
      <label>{{ label }}</label>
      <input
        :id="id"
        :required="required"
        :type="type ? type : 'text'"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        autocomplete="off"
        :@change="onchange"
      />
    </template>
    <template>
      <input
        :id="id"
        :required="required"
        :type="type ? type : 'text'"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        autocomplete="off"
        :@change="onchange"
      />
      <label>{{ label }}</label>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "required",
    "name",
    "value",
    "onchange",
    "type",
    "placeholder",
    "label",
    "labelBottom",
    "labelTop",
  ],
};
</script>

<style lang="scss" scoped>
// .input-text {
//   display: flex;
//   flex-direction: column;
//   input {
//     padding: 1rem;
//     font-size: 1.4rem;
//     color: #888;
//   }
// }
</style>
