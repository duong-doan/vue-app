import Vue from "vue";

export const toastMessage = (
  type,
  message,
  options,
  customMsg,
  handleClickToast
) => {
  const defaultOptions = {
    action: {
      text: customMsg,
      onClick: handleClickToast,
    },
  };

  switch (type) {
    case "success": {
      Vue.toasted.success(message, {
        ...options,
        ...defaultOptions,
      });
      break;
    }

    case "error": {
      Vue.toasted.error(message, {
        ...options,
        ...defaultOptions,
      });
      break;
    }

    case "info": {
      Vue.toasted.info(message, {
        ...options,
        ...defaultOptions,
      });
      break;
    }
  }
};
// abcd
