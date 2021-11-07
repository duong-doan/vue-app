import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export const App = () => {
  return <router-view />;
};

export default router;
