<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="margin-top: 15px">Shipping and payment method</h1>
        </div>
        <div class="col-md-12 center">
          <form style="margin-top: 15px">
            <label for="shipment_method" class="center">Shipping method:</label>
            <select
              class="form-select center"
              aria-label="Default select example"
              style="height: 48px; margin-bottom: 25px"
              id="shipment_method"
            >
              <option value="delivery">Delivery service</option>
              <option value="inperson">In person</option>
            </select>

            <a href="/addnewaddress" style="color: black"
              ><button
                type="button"
                class="btn btn-dark center"
                style="width: 180px"
              >
                <i class="fas fa-plus-circle fa-md"> Add new address</i>
              </button></a
            >
            <p style="text-align: center; margin-top: 25px">
              prikaz svih spremljenih adresa
            </p>
            <label for="payment_method" class="center">Payment method:</label>
            <select
              class="form-select center"
              aria-label="Default select example"
              style="height: 48px; margin-bottom: 25px"
              id="payment_method"
            >
              <option value="debit_card">Debit card</option>
              <option value="inperson_payment">In person</option>
              <option value="cash_delivery">Cash on delivery</option>
            </select>
            <button
              type="button"
              class="btn btn-dark center"
              style="width: 70px"
            >
              Order
            </button>
          </form>
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
  name: "Shipping and payment method",
  components: {
    navbarbuyer,
    footerapp,
  },
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
}
</style>
