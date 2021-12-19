<template>
  <div>
    <navbarbuyer />
    <div
      class="image_back"
      style="position: relative; text-align: center; color: white"
    >
      <img src="@/assets/pr.png" class="pozadina" style="width: 100%" />
      <div
        class="col-lg-6 col-12"
        style="position: absolute; bottom: 30px; left: 0px; font-size: 130%"
      >
        “Go in as janitors and come out as millionaires.” <br />
        - Arsène Lupin
      </div>
    </div>

    <div class="container" style="margin-top: 80px">
      <div class="row">
        <div class="col-lg-4 col-4">
          <a href="/comics"
            ><img
              src="@/assets/comics.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Comics</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/cards"
            ><img src="@/assets/c.jpg" style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Cards</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/paintings"
            ><img
              src="@/assets/painting.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Paintings</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/coins"
            ><img
              src="@/assets/coin.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Coins</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/sculptures"
            ><img
              src="@/assets/sculpture.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Sculptures</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="raresignatures">
            <img
              src="@/assets/rare_signature.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Rare signatures</b></p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/productssignedbycelebrities"
            ><img
              src="@/assets/signed.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center">
            <b>Products signed by celebrities</b>
          </p>
        </div>
        <div class="col-lg-4 col-4">
          <a href="/maps"
            ><img
              src="@/assets/maps.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Maps</b></p>
        </div>

        <div class="col-lg-4 col-4">
          <a href="/books"
            ><img
              src="@/assets/books.jpg"
              style="width: 100%; border-radius: 10%"
          /></a>
          <p style="text-align: center"><b>Books</b></p>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer";
import footerapp from "@/components/footerapp.vue";

export default {
  name: "Home",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>
