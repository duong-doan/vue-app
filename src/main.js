import Vue from "vue";
import AOS from "aos";
import { App } from "./router/index";
import BootstrapVue from "bootstrap-vue";
import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import VueAgile from "vue-agile";
import store from "./store/index";
import Toasted from "vue-toasted";
import { TabsPlugin } from "bootstrap-vue";
import VSwitch from "v-switch-case";

Vue.use(VSwitch);
Vue.use(BootstrapVue);
AOS.init({
  once: true,
});
Vue.use(VueAgile);
Vue.use(Toasted);
Vue.use(TabsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
