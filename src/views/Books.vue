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
            <b>Books</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/harrypotter.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">
                Harry Potter and the Philosopher’s Stone
              </h6>
              <p class="card-text">J.K. Rowling</p>
              <p>3 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/christmascarol.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">A Christmas Carol</h5>
              <p class="card-text">Charles Dickens</p>
              <p>15 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/hobbit.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">The Hobbit</h5>
              <p class="card-text">J.R.R. Tolkien</p>
              <p>50 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/catinhat.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">The Cat in the Hat</h5>
              <p class="card-text">Dr. Seuss</p>
              <p>2 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/birdsofamerica.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Audubon’s Birds of America</h5>
              <p class="card-text">John James</p>
              <p>6.1 mil $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/Baskervilles.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">The Hound of the Baskervilles</h5>
              <p class="card-text">Arthur C. Doyle</p>
              <p>1 500 $</p>
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
  name: "Books",
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
  height: calc(100vh / 1.8);
}
</style>
