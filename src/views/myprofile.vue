<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 50px; margin-bottom: 30px">
          <h1 style="font-family: Arial, Helvetica, sans-serif">
            <b
              >My profile<i
                class="fas fa-user-circle fa-sm nav-link active"
                style="color: black; display: inline-block"
              ></i
            ></b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <menumyprofile />
        </div>
        <div class="col-md-1 vl"></div>
        <div class="col-md-7">
          <h2 style="font-family: Arial, Helvetica, sans-serif">
            <b>Order history</b>
          </h2>
          <img
            src="@/assets/myprofile.png"
            class="center"
            style="width: 80%; margin-top: 30px"
          />
          <p
            style="
              font-size: 40px;
              text-align: center;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <b>No orders yet</b>
          </p>
          <p
            style="
              font-size: 23px;
              text-align: center;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            Check out various vintage and collectible items just by clicking the
            button down below
          </p>
          <a href="/" class="btn-dark" style="text-decoration: none"
            ><button
              type="button"
              class="btn btn-dark center"
              style="width: 170px"
            >
              Go to the store
            </button></a
          >
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import menumyprofile from "@/components/menumyprofile.vue";

export default {
  name: "My profile",
  components: {
    navbarbuyer,
    footerapp,
    menumyprofile,
  },
};
</script>
<style scoped>
.vl {
  border-left: 2px solid black;
  height: 500px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
@media screen and (max-width: 767.5px) {
  .col-md-1 {
    display: none;
  }
  .col-md-7 {
    margin-top: 30px;
  }
}
</style>
