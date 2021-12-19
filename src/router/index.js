import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/coins",
    name: "Coins",
    component: () =>
      import(/* webpackChunkName: "coins" */ "../views/Coins.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/paintings",
    name: "Paintings",
    component: () =>
      import(/* webpackChunkName: "paintings" */ "../views/Paintings.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/sculptures",
    name: "Sculptures",
    component: () =>
      import(/* webpackChunkName: "sculptures" */ "../views/Sculptures.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/comics",
    name: "Comics",
    component: () =>
      import(/* webpackChunkName: "comics" */ "../views/Comics.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import(/* webpackChunkName: "maps" */ "../views/Maps.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/raresignatures",
    name: "Rare signatures",
    component: () =>
      import(
        /* webpackChunkName: "raresignatures" */ "../views/Raresignatures.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/productssignedbycelebrities",
    name: "Products signed by celebrities",
    component: () =>
      import(
        /* webpackChunkName: "products signed by celebrities" */ "../views/Products signed by celebrities.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/myprofile",
    name: "My profile",
    component: () =>
      import(/* webpackChunkName: "myprofile" */ "../views/myprofile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/cart.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/shippingandpayment",
    name: "Shipping and payment method",
    component: () =>
      import(
        /* webpackChunkName: "shippingandpayment" */ "../views/shippingandpayment.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/stephencurry",
    name: "Stephen Curry card",
    component: () =>
      import(
        /* webpackChunkName: "stephencurry" */ "../views/stephencurry.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/cards",
    name: "Cards",
    component: () =>
      import(/* webpackChunkName: "cards" */ "../views/Cards.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/addnewaddress",
    name: "Add new address",
    component: () =>
      import(
        /* webpackChunkName: "addnewaddress" */ "../views/addnewaddress.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/changeemail",
    name: "Change email address",
    component: () =>
      import(/* webpackChunkName: "changeemail" */ "../views/changeemail.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/changepass",
    name: "Change password",
    component: () =>
      import(/* webpackChunkName: "changepass" */ "../views/changepass.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/forgotpass",
    name: "Forgot password",
    component: () =>
      import(/* webpackChunkName: "forgotpass" */ "../views/forgotpass.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/myaddresses",
    name: "My addresses",
    component: () =>
      import(/* webpackChunkName: "myaddresses" */ "../views/myaddresses.vue"),
    meta: {
      needsUser: true,
    },
  },

  {
    path: "/updatepersonal",
    name: "Update personal information",
    component: () =>
      import(
        /* webpackChunkName: "updatepersonal" */ "../views/updatepersonal.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "updatepersonal" */ "../views/login.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "updatepersonal" */ "../views/signup.vue"),
    meta: {
      needsUser: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Bio sam na",
    from.name,
    "idem na",
    to.name,
    "a korisnik je",
    store.currentUser
  );
  const authenticated = store.currentUser !== null;
  if (!authenticated && to.meta.needsUser) {
    next("Login");
  } else {
    next();
  }
});

export default router;
