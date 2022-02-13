import homeRoutes from "../pages/home/router";
import SuccessRoutes from "../pages/success/router";
import productRoutes from "../module/product/router";
import auth from "../module/auth/router";
import cartRouters from "../module/cart/router";
import categoryRoutes from "../module/category/router";

export default [
  ...homeRoutes,
  ...productRoutes,
  ...auth,
  ...cartRouters,
  ...categoryRoutes,
  ...SuccessRoutes,
];
