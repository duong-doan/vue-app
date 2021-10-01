import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export const App = () => {
  return <router-view />;
};

export default router;
