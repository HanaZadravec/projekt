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
            <b>Cards</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-12 col-12">
          <card
            v-for="karte in filteredCards"
            :key="karte.url"
            :slika="karte"
          />

          <div class="col-md-3">
            <div class="col-md-4 tag-container"></div>
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
import card from "@/components/card.vue";
import store from "@/store.js";
let proizvod = [];
proizvod = [
  {
    url: "https://picsum.photos/id/2/400/400",
    naziv: "Mickey Mantle 1952",
    cijena: "5.2 mil $",
    proizvodac: "Topps",
  },
  {
    url: "https://picsum.photos/id/1/400/400",
    naziv: "Luka Doncic 2018/19 Logoman 1/1",
    cijena: "4.6 mil $",
    proizvodac: "Panini",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    naziv: "Giannis Antetokounmpo 2013/2014",
    cijena: "1.8 mil $",
    proizvodac: "Panini",
  },
];

export default {
  name: "Cards",
  data: function () {
    return {
      proizvod,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let karte of this.proizvod) {
        if (
          karte.naziv.toLowerCase().indexOf(termin.toLowerCase()) >= 0 ||
          karte.proizvodac.toLowerCase().indexOf(termin.toLowerCase()) >= 0
        ) {
          newCards.push(karte);
        }
        console.log(newCards);
      }
      return newCards;
    },
  },
  components: {
    navbarbuyer,
    footerapp,
    card,
  },
};
</script>
