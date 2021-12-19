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
            <b>Paintings</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/bianco.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Bianco</h5>
              <p class="card-text">Victor Vasarely</p>
              <p>350 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/lepuits.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Le puits</h5>
              <p class="card-text">Fernand Léger</p>
              <p>174 140 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/dice.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Dice</h5>
              <p class="card-text">Alexander Calder</p>
              <p>380 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/m50.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">M.50</h5>
              <p class="card-text">Petar Klasen</p>
              <p>12 200 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/lepavillon.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">Le Pavillon au bord de la Seine</h6>
              <p class="card-text">Emmanuel de La Villéon</p>
              <p>11 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/brunviolet.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Brun violet et rouge</h5>
              <p class="card-text">Serge Poliakoff</p>
              <p>75 000 $</p>
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
  name: "Paintings",
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
