import Vue from "vue";

export const toastMessage = (message, options) => {
    Vue.toasted.show(message, {
        ...options,
        position: 'top-right',
        duration: 3000,
        iconPack: 'fontawesome',
        closeOnSwipe: true,
        singleton: false
    })
}
