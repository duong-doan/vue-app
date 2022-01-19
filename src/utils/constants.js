import bgHero1 from "../assets/images/banner-4.jpg";
import bgHero2 from "../assets/images/banner-1.jpg";
import bgHero3 from "../assets/images/img-2_80aec88a-806c-4683-9085-4d9185a23b48_1920X.jpg";
import bgHero4 from "../assets/images/banner-3.jpg";

import SpecialImg1 from "../assets/images/special-img-1.jpg";
import SpecialImgDetail1 from "../assets/images/slider-product/4.png";
import SpecialImg2 from "../assets/images/special-img-2.jpg";
import SpecialImgDetail2 from "../assets/images/slider-product/2.png";

import SliderProductItem1 from "../assets/images/slider-product/2.png";
import SliderProductItem2 from "../assets/images/slider-product/4.png";
import SliderProductItem3 from "../assets/images/slider-product/BTWM3P-3-1.png";
import SliderProductItem4 from "../assets/images/slider-product/FSK84F.png";
import SliderProductItem5 from "../assets/images/slider-product/LJQ4JZ.png";

import BlogImg1 from "../assets/images/blog/blog-11_grande.jpg";
import BlogImg2 from "../assets/images/blog/blog-12_grande.jpg";
import BlogImg3 from "../assets/images/blog/blog-10_grande.jpg";

export const DATA_SECTION_HERO_TOP = [
  {
    watch: "CLASSIC",
    bgHero: bgHero1,
    classAnimation: "fade-right",
    description: "WEEKLY DAYS",
  },
  {
    watch: "Bestseller Selection",
    bgHero: bgHero2,
    classAnimation: "fade-left",
    description: "FEEL THE COMFORT",
  },
  {
    watch: "Analogue Dial",
    bgHero: bgHero3,
    classAnimation: "fade-left",
    description: "FLEXIBLE",
  },
  {
    watch: "Trainer Wrist",
    bgHero: bgHero4,
    classAnimation: "fade-left",
    description: "SEE THE PURE",
  },
];

export const DATA_SPECIAL_PRODUCT = [
  {
    image: SpecialImg1,
    imageDetail: SpecialImgDetail1,
    name: "Chess master classic",
    title: "Chess Master Silver Watch From Congaa",
  },
  {
    image: SpecialImg2,
    imageDetail: SpecialImgDetail2,
    name: "Diving deep blue",
    title: "Diving Deep Blue From Brazil",
  },
];

export const DATA_SLIDER_PRODUCT = [
  {
    image: SliderProductItem1,
  },
  {
    image: SliderProductItem2,
    className: "img-scale",
  },
  {
    image: SliderProductItem3,
  },
  {
    image: SliderProductItem4,
  },
  {
    image: SliderProductItem5,
  },
];

export const DATA_BLOG = [
  { image: BlogImg1 },
  { image: BlogImg2 },
  { image: BlogImg3 },
];

export const TITLE_TAB_INFO_USER_PRODUCT_DETAIL = [
  {
    id: 1,
    title: "DESCRIPTION",
    active: true,
  },
  {
    id: 2,
    title: "REVIEWS",
    active: false,
  },
];

export const VALIDATION_RULES = {
  REQUIRED: "REQUIRED",
  MIN: "MIN",
  MAX: "MAX",
  NAME: "NAME",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  CONFIRM: "CONFIRM",
};

export const ERRORS = {
  EMAIL_EXISTS: "Email is exists",
  ACCOUNT_ERROR: "Email or password not correct",
};

export const CONFIG_TOAST = {
  position: "top-right",
  iconPack: "fontawesome",
  closeOnSwipe: true,
  singleton: false,
  fitToScreen: false,
};

export const USER_LOCAL_STR = "user";

export const MODULES = {
  AUTH: "auth",
  PRODUCT: "products",
};

export const POSITION_TOAST = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
};

export const STATUS_TOAST = {
  SUCCESS: "success",
  ERROR: "error",
  INFORMATION: "info",
};

export const MESSAGE_TOAST = {
  go_to_login: "Go to login",
};

export const EN_LANG = {
  product: {
    add_cart_success: "Add to cart success!!",
    product_is_exist: "The product is already in the cart now!!",
  },
  auth: {
    login_first: "Please login first !!",
    update_success: "You have update complete",
    cart_empty: "You have not selected any products",
  },
};

export const ROUTES = {
  HOME: "/",
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  CART: "/cart",
};
