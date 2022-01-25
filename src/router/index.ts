import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Products from "@/views/Products.vue";
import GetProduct from "@/components/Products/Get/Get_Single_Product.vue";
import ProductList from "@/components/Products/Get/ProductList.vue";
import WhyUs from "@/views/WhyUs.vue";
import Testimonial from "@/views/Testimonial.vue";
import Login from "@/views/Login.vue";
import ForgotPassword from "@/components/UserAccount/ForgotPassword/Password.vue";
import Register from "@/components/UserAccount/Register/Register.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/products", name: "Products", component: Products },
  { path: "/getproduct/:id", name: "GetProduct", component: GetProduct },
  { path: "/productslist", name: "ProductsList", component: ProductList },
  { path: "/whyus", name: "WhyUs", component: WhyUs },
  { path: "/testimonial", name: "Testimonial", component: Testimonial },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
