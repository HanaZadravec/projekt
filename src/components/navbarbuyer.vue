<template>
  <nav class="navbar navbar-expand-lg navbar" style="background-color: #d2c1a7">
    <img src="@/assets/pozadina.jpg" style="width: 50px; height: 50px" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"><i class="fas fa-bars fa-lg"></i></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/" style="color: black">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            style="color: black"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Products
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/paintings">Paintings</a>
            <a class="dropdown-item" href="/sculptures">Sculptures</a>
            <a class="dropdown-item" href="/comics">Comics</a>
            <a class="dropdown-item" href="/books">Books</a>
            <a class="dropdown-item" href="/coins">Coins</a>
            <a class="dropdown-item" href="/maps">Maps</a>
            <a class="dropdown-item" href="/raresignatures">Rare signatures</a>
            <a class="dropdown-item" href="/productssignedbycelebrities"
              >Products signed by celebrities</a
            >
            <a class="dropdown-item" href="/cards">Cards</a>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click.prevent="logout()"
            style="color: black"
            >Logout</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="color: black">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input
          v-model="store.searchTerm"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style="margin-top: 5px"
        />
        <a href="/cart" style="text-decoration: none"
          ><i
            class="fas fa-shopping-cart nav-link fa-2x"
            style="color: black"
          ></i
        ></a>
        <a href="/myprofile" style="text-decoration: none"
          ><i class="fas fa-user-circle nav-link fa-2x" style="color: black"></i
        ></a>
      </form>
    </div>
  </nav>
</template>

<script>
import store from "@/store.js";
import firebase from "@/firebase.js";

export default {
  name: "navbar_buyer",
  data() {
    return {
      store: store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>
