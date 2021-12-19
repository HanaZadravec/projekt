<template>
  <div class="col-md-12" style="margin-top: 20px">
    <div class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <h6 class="card-title">{{ slika.naziv }}</h6>
        <p class="card-text">{{ slika.proizvodac }}</p>
        <p>{{ slika.cijena }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slika"],
  name: "card",
};
</script>
