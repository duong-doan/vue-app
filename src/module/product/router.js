import Detail from "./containers/Detail.vue";
import Payment from "./containers/Payment.vue";

const routes = [
  {
    path: "/product/detail/:id",
    name: "Detail",
    exact: true,
    component: Detail,
  },
  {
    path: "/product/payment",
    name: "Payment",
    exact: true,
    component: Payment,
  },
];

export default routes;
