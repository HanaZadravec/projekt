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
            <b>Coins</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/ukpenny.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">1933 UK Penny</h5>
              <p class="card-text">UK</p>
              <p>68 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/coinofedward.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">The Coin of Edward VIII</h6>
              <p class="card-text">UK</p>
              <p>1 mil $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/annevigocoin.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">Queen Anne Vigo Five-Guinea Coin</h6>
              <p class="card-text">UK</p>
              <p>220 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/unaandthelion.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Una and the Lion coin</h5>
              <p class="card-text">UK</p>
              <p>890 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/libertyhead.jpeg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">1913 Liberty Head nickel</h5>
              <p class="card-text">USA</p>
              <p>4 mil $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

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

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";

export default {
  name: "Coins",
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
