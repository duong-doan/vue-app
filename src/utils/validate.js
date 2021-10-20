import { VALIDATION_RULES } from "./constants";
const { EMAIL, PASSWORD, MIN, MAX, REQUIRED, CONFIRM } = VALIDATION_RULES;

const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

const Validate = {
  checkValidate(value, validation, options = {}) {
    const rules = validation.rule.split("|");
    let error = "";
    const { isObjectDataFormat } = options;
    const returnData = ({ rule, errorMes }) => {
      if (isObjectDataFormat) {
        return {
          valid: !errorMes,
          rule,
          errorMes,
        };
      }
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
    }
  },
  required({ messages, name = "field" }, value) {
    const isEmptyObject = isObject(value) && !Object.keys(value).length;
    if (isEmptyObject) {
      if (messages && messages[REQUIRED]) {
        return messages[REQUIRED];
      }
      return `${name} is required`;
    }
    return "";
  },
  min({ messages, name = "field" }, value, min, max) {
    if (value.length < min) {
      if (messages && messages[MIN]) {
        return messages[MIN];
      }
      return `${name} must between ${min} and ${max} characters`;
    }
    return "";
  },
  max({ messages, name = "field" }, value, min, max) {
    if (value.length > min) {
      if (messages && messages[MAX]) {
        return messages[MAX];
      }
      return `${name} must between ${min} and ${max} characters`;
    }
    return "";
  },
  password(value) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(value)) {
      return "";
    }
    return "Password not correct";
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
  },
};

export default Validate;
