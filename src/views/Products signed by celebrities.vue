<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1
            style="
              margin-top: 15px;
              margin-bottom: 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 55px;
            "
          >
            <b>Products signed by celebrities</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/jimmypage.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Guitar</h5>
              <p class="card-text">Signed by Jimmy Page</p>
              <p>73 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/dimaggiomonroe.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Baseball ball</h5>
              <p class="card-text">Signed by Joe DiMaggio & Marilyn Monroe</p>
              <p>191 200 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/baberuthbaseball.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Baseball ball</h5>
              <p class="card-text">Signed by Babe Ruth</p>
              <p>380 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/pinkfloydautographed.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">The Darkness Album</h5>
              <p class="card-text">Signed by Pink floyd</p>
              <p>70 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/lennonLP.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">John Lennon’s Murderer Signed LP</h6>
              <p class="card-text">Signed by John Lennon</p>
              <p>525 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/beatlesfancard.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Beatles original fan club card</h5>
              <p class="card-text">Signed by The Beatles</p>
              <p>124 000 $</p>
            </div>
          </div>
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
export default {
  name: "Products signed by celebrities",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: 31vh;
  object-fit: contain;
}
.card {
  height: calc(100vh / 1.7);
}
</style>
