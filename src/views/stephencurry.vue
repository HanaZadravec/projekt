<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 col-sm-12">
          <img src="@/assets/stephencurry.jpg" style="width: 100%" />
        </div>
        <div class="col-md-6 col-12 col-sm-12" style="margin-top: 50px">
          <h2>Stephen Curry, Panini, 2009/10</h2>
          <hr />
          <span style="font-size: 20px; margin-right: 15px" class="tekst"
            ><b>Buy now price:600 000 $</b></span
          >
          <button type="button" class="btn btn-dark center" style="width: 90px">
            Buy now
          </button>
          <hr />
          <p style="font-size: 120%"><b>Best offer:</b></p>
          <div style="margin-top: 100px">
            <span style="font-size: 120%; margin-right: 15px"
              ><b>Time remaining:</b></span
            >
            <button
              type="button"
              class="btn btn-dark center"
              style="width: 125px"
            >
              Make an offer
            </button>
          </div>
        </div>
        <div
          class="col-md-12 col-12 col-sm-12"
          style="
            border-style: solid;
            border-width: 2px;
            border-color: black;
            margin-top: 75px;
          "
        >
          <p style="margin-top: 7px"><b>Description</b></p>
          <p>
            What makes the card especially rare is a part of Curry's jersey
            number that is visible on the patch, giving memorabilia-enthusiasts
            even more reason to bask in it's authenticity. Listed as a 2009/10
            Panini National Treasures "Century Gold" Stephen Curry signed patch
            rookie card, the card is one of only 25 editions ever made.
          </p>
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
  name: "Stephen Curry card",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>

<style scoped>
hr {
  height: 2px;
  color: black;
  background-color: black;
  border: none;
  width: 90%;
}
</style>
