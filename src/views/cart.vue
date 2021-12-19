<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="margin-top: 15px">Cart</h1>
        </div>
        <div class="col-md-12">
          <a href="/shippingandpayment"
            ><button type="button" class="btn btn-dark">
              Shipping and payment method
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

export default {
  name: "Cart",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>
