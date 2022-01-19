import Detail from "./containers/Detail.vue";

const routes = [
  {
    path: "/product/detail/:id",
    name: "Detail",
    exact: true,
    component: Detail,
  },
];

export default routes;
