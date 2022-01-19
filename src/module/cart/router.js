import CartList from "./containers/CartList.vue";
import Payment from "./containers/Payment.vue";

const routes = [
  {
    path: "/cart",
    name: "cart",
    exact: true,
    component: CartList,
  },
  {
    path: "/cart/payment",
    name: "payment",
    exact: true,
    component: Payment,
  },
];

export default routes;
