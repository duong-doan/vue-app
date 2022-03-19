import axios from "../utils/axios";

export const addNewUserToDB = async ({ email, password, phone }) => {
  try {
    const res = await axios.post("/auth", {
      email,
      password,
      phone,
      cart: [],
    });
    return res;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUsersFromDB = async () => {
  try {
    const res = await axios.get("/auth");
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUserLoginFromDB = async (id) => {
  try {
    const res = await axios.get(`/auth/${id}`);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const updateUserRequestDB = async (id, data) => {
  try {
    const res = await axios.put(`/auth/${id}`, data);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const updateCartUserRequest = async (id, data) => {
  try {
    const res = await axios.put(`/auth/${id}`, data);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
