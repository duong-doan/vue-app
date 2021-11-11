import { map } from "lodash";

export const checkEmailExists = (arr, emailCompare) => {
  let isSame = true;
  const arrEmail = [];

  if (arr) {
    map(arr, (user) => {
      arrEmail.push(user.email);
    });
  }

  if (!arrEmail.includes(emailCompare)) {
    isSame = false;
  }

  return isSame;
};

export const checkLoginUser = (arr, emailCompare, pwCompare) => {
  let isSame = false;
  const arrUsers = [];

  if (arr) {
    map(arr, (user) => {
      arrUsers.push(user);
    });
  }

  const findUser = arrUsers.find((user) => {
    if (user.email === emailCompare && user.password === pwCompare) {
      isSame = true;
      return user;
    }
  });

  return {
    isSame,
    findUser,
  };
};
