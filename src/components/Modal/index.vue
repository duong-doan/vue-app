<template>
<div>
     <b-button v-b-modal.modal-footer-sm>Small Footer Buttons</b-button>

  <b-modal id="modal-footer-sm" title="BootstrapVue" button-size="sm">
    <p class="my-2">This modal has small footer buttons</p>
  </b-modal>
</div>
</template>
<script>
export default {
    props: [],
    methods: {
        
    }
}
</script>