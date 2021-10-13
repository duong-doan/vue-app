<template>
  <div
    v-if="!reverseLabel"
    :class="['input-text', classname, { 'is-edit': isEdit }]"
  >
    <label>{{ label }}</label>
    <input
      :id="id"
      :required="required"
      :type="type ? type : 'text'"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      autocomplete="off"
      @change="handleChange"
    />
  </div>
  <div v-else :class="['input-text', classname, { 'is-edit': isEdit }]">
    <input
      :id="id"
      :required="required"
      :type="type ? type : 'text'"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      autocomplete="off"
      @change="handleChange"
    />
    <label>{{ label }}</label>
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
    "onblur",
    "type",
    "placeholder",
    "label",
    "labelBottom",
    "labelTop",
    "reverseLabel",
    "isEdit",
    "classname",
  ],
  methods: {
    handleChange(e) {
      this.onchange(this.id, e);
    },
    // handleBlur() {
    //   this.onblur(this.id);
    // },
  },
};
</script>

<style lang="scss"></style>
