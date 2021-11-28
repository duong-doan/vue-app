import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Information from "./components/Information.vue";

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
  {
    path: "/user/:id/information",
    name: "Information",
    exact: true,
    component: Information,
  },
];

export default routes;
