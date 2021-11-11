import Vue from "vue";

export const toastMessage = (message, options, customMsg, handleClickToast) => {
  Vue.toasted.show(message, {
    ...options,
    position: "top-right",
    duration: 5000,
    iconPack: "fontawesome",
    closeOnSwipe: true,
    singleton: false,
    action: {
      text: customMsg,
      onClick: handleClickToast,
    },
  });
};
