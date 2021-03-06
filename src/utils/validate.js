import { VALIDATION_RULES } from "./constants";
const {
  EMAIL,
  PASSWORD,
  MIN,
  MAX,
  REQUIRED,
  CONFIRM,
  PHONE_NUMBER,
} = VALIDATION_RULES;

const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

const Validate = {
  checkValidate(value, validation) {
    const rules = validation.rule.split("|");
    let error = "";
    const returnData = ({ rule, errorMes }) => {
      return {
        valid: !errorMes,
        rule,
        errorMes,
      };
    };

    for (let i = 0; i < rules.length; i++) {
      const splitRule = rules[i].split(":");
      const rule = {
        name: splitRule[0],
        value: splitRule[1],
      };

      // required
      if (rule.name === REQUIRED) {
        error = this.required(validation, value);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }

      // min
      if (rule.name === MIN) {
        const min = parseInt(rule.value);
        const max = rules
          .find((rule) => rule.indexOf(MAX) !== -1)
          .split(":")[1];
        error = this.min(validation, value, min, max);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }

      // max
      if (rule.name === MAX) {
        const max = parseInt(rule.value);
        const min = rules
          .find((rule) => rule.indexOf(MIN) !== -1)
          .split(":")[1];
        error = this.min(validation, value, min, max);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }
      // email
      if (rule.name === EMAIL) {
        error = this.email(value);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }

      // password
      if (rule.name === PASSWORD) {
        error = this.password(value);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }

      // confirm
      if (rule.name === CONFIRM) {
        const { value: compareValue } = rule;
        error = this.confirm(value, compareValue);
        if (error) {
          return returnData({ rule: rule.name, errorMes: error });
        }
      }

      if (rule.name === PHONE_NUMBER) {
        if (value === "") {
          return returnData({ rule: rule.name, errorMsg: error });
        }
        error = this.phoneNumber(value);
        if (error) {
          return returnData({ rule: rule.name, errorMsg: error });
        }
      }
    }
  },
  required({ messages, name }, value) {
    const isEmptyObject = isObject(value) && !Object.keys(value).length;
    if (isEmptyObject || !value) {
      if (messages && messages[REQUIRED]) {
        return messages[REQUIRED];
      }
      return `${name} is required`;
    }
    return "";
  },
  min({ messages, name }, value, min, max) {
    if (value.length < min) {
      if (messages && messages[MIN]) {
        return messages[MIN];
      }
      return `${name} must between ${min} and ${max} characters`;
    }
    return "";
  },
  max({ messages, name }, value, min, max) {
    if (value.length > min) {
      if (messages && messages[MAX]) {
        return messages[MAX];
      }
      return `${name} must between ${min} and ${max} characters`;
    }
    return "";
  },
  password(value) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,20}$/;
    if (regex.test(value)) {
      return "";
    }
    return "Password includes at least one special character and number";
  },
  email(value) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(value)) {
      return "";
    }
    return "Please enter correct email";
  },
  confirm(value, compareValue) {
    if (value !== compareValue) {
      return "Confirm password not the same password";
    }
    return "";
  },
  phoneNumber(value) {
    /*
      0X-XXXX-XXXX
      0XXX-XX-XXXX
      (0X)XXXX-XXXX
      (0XXX)XX-XXXX
      070-XXXX-XXXX
      080-XXXX-XXXX
      090-XXXX-XXXX
      050-XXXX-XXXX
      0120-XXX-XXX
      0XX-XXX-XXXX
      0XX-XXXX-XXXX
    */
    const regex = /^(0|\+81)([0-9]{1})[-]([0-9]{4})[-][0-9]{4}$|^(0|\+81)([0-9]{3})[-]?([0-9]{2})[-][0-9]{4}$|^[(](0|\+81)([0-9]{1})[)]([0-9]{4})[-][0-9]{4}$|^[(](0|\+81)([0-9]{3})[)]([0-9]{2})[-][0-9]{4}$|^(050|070|080|090|\+8150|\+8170|\+8180|\+8190)[-]([0-9]{4})[-][0-9]{4}$|^(0120|\+81120)[-]([0-9]{3})[-][0-9]{3}$|^(\+)?[0-9]{10,17}$|^(0|\+81)([0-9]{2})[-]([0-9]{3})[-][0-9]{4}$|^(0|\+81)([0-9]{2})[-]([0-9]{4})[-][0-9]{4}$/im;
    const isValid = regex.test(value);
    if (!isValid) {
      return "Enter your phone number";
    }
    return "";
  },
};

export default Validate;
