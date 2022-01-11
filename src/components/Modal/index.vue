<template>
  <div>
    <b-modal
      :id="`modal-${id}`"
      centered
      modal-class="modal modal-custom"
      no-close-on-backdrop
      hide-header
    >
      <p class="my-4 modal__content">{{ text }}</p>
      <div slot="modal-footer">
        <b-button
          class="mx-2"
          size="lg"
          variant="danger"
          @click="handleClickCancel"
          >Cancel</b-button
        >
        <b-button size="lg" variant="success" @click="handleClickYes"
          >Yes</b-button
        >
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["onSubmit", "onClose", "text", "isShow", "id"],
  methods: {
    handleClickCancel() {
      this.$bvModal.hide(`modal-${this.id}`);
      document.body.classList.remove("disabled-scroll");
      this.onClose();
    },
    handleClickYes() {
      this.onSubmit();
    },
  },
  watch: {
    isShow(value) {
      if (value) {
        this.$bvModal.show(`modal-${this.id}`);
        document.body.classList.add("disabled-scroll");
      } else {
        this.$bvModal.hide(`modal-${this.id}`);
        document.body.classList.remove("disabled-scroll");
      }
    },
  },
};
</script>

<style lang="scss">
.modal {
  height: 100vh !important;
}
.modal__content {
  font-size: 1.8rem;
}
#modal___BV_modal_content_ {
  margin-top: 50%;
}
</style>
