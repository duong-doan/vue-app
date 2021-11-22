<template>
  <div>
    <b-modal id="modal" hide-header @click="handleClickModal">
      <p class="my-4 modal__content">{{ text }}</p>
        <div slot="modal-footer">
          <b-button class="mx-2" size="lg" variant="danger" @click="handleClickCancel">Cancel</b-button>
          <b-button size="lg" variant="success" @click="handleClickYes">Yes</b-button>
        </div>
    </b-modal>
  </div>
</template>
<script>

export default {
  props: ['onSubmit', 'onClose', 'text'],
  methods: {
    handleClickCancel() {
      this.onClose()
    },
    handleClickYes() {
      this.onSubmit()
    },
    handleClickModal() {
    }
  }
}
</script>

<style lang="scss">
  .modal__content {
    font-size: 1.8rem;
  }
  #modal___BV_modal_content_ {
    margin-top: 50%;
  }
</style>