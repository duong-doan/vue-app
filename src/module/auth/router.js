import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const routes = [
  {
    path: "/user/login",
    name: "Login",
    exact: true,
    component: Login,
  },
  {
    path: "/user/register",
    name: "Register",
    exact: true,
    component: Register,
  },
];

export default routes;
