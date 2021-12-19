<template>
  <router-view />
</template>

<script>
import firebase from "@/firebase.js";
import store from "@/store.js";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    console.log("*** User", user.email);
    store.currentUser = user.email;
    if (!currentRoute.meta.needsAuth) {
      router.push({ name: "Home" });
    }
  } else {
    // User is not signed in.
    console.log("*** No user");
    store.currentUser = null;
    if (currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});
export default {
  name: "app",
};
</script>
