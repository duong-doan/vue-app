import Vue from "vue";
import AOS from "aos";
import { App } from "./router/index";
import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import VueAgile from "vue-agile";
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(VueAgile);
AOS.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
