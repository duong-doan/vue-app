import homeRoutes from "../pages/home/router";
import productRoutes from "../module/product/router";
import auth from "../module/auth/router";

export default [...homeRoutes, ...productRoutes, ...auth];
