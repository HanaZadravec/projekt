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
            <b>Comics</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/comics27.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Detective Comics #27</h5>
              <p class="card-text">DC Comics</p>
              <p>2.1 mil $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/comics38.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Detective Comics #38</h5>
              <p class="card-text">DC Comics</p>
              <p>107 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/waltdisney.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h6 class="card-title">Walt Disney's Comics and Stories #1</h6>
              <p class="card-text">Dell Comics</p>
              <p>89 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/planetcomics.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Planet Comics #1</h5>
              <p class="card-text">Fiction House</p>
              <p>98 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/newcomics.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">New Comics #1</h5>
              <p class="card-text">National Allied Newspaper Syndicate</p>
              <p>10 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/famousfunnies.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Famous Funnies #1</h5>
              <p class="card-text">Eastern Color Printing</p>
              <p>7 000 $</p>
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
  name: "Comics",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>
