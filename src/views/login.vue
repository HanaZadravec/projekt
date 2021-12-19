<template>
  <div class="boja">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 col-12"
          style="margin-top: 50px; margin-bottom: 15px"
        >
          <h1
            style="
              font-size: 70px;
              text-align: center;
              text-shadow: 6px 6px 8px #a0a0a0;
              font-family: Papyrus Copperplate Fantasy;
            "
          >
            Welcome to Lupin
          </h1>
        </div>
        <div class="col-md-12">
          <form style="margin-top: 15px">
            <div class="form-group">
              <label for="email_login" class="center">Email:</label>
              <input
                v-model="email"
                type="email"
                class="form-control center"
                id="email_login"
                placeholder="Enter email..."
                style="height: 48px"
              />
            </div>
            <div class="form-group">
              <label for="pass_login" class="center">Password:</label>
              <input
                v-model="password"
                type="password"
                class="form-control center"
                id="pass_login"
                data_toggle="password"
                placeholder="Enter password..."
                style="height: 48px"
              />
            </div>

            <button
              @click="login()"
              class="btn btn-outline-dark center"
              type="button"
              style="height: 40px; margin-top: 5px; width: 70px"
            >
              Login
            </button>
            <p style="text-align: center; font-size: 22px; margin-top: 10px">
              Don´t have an account?
              <b
                ><i
                  ><u
                    ><a
                      href="/signup"
                      style="text-decoration: none; color: black"
                      >Sign up</a
                    ></u
                  ></i
                ></b
              >
            </p>
            <p style="text-align: center; font-size: 30px">
              --------or--------
            </p>
            <button
              class="btn btn-outline-dark center"
              type="submit"
              style="height: 40px; margin-top: 5px; width: 30%"
            >
              <i class="fab fa-google"></i> Google
            </button>
            <button
              class="btn btn-outline-dark center"
              type="submit"
              style="height: 40px; margin-top: 5px; width: 30%"
            >
              <i class="fab fa-facebook-square" style="font-size: 22px"></i>
              Facebook
            </button>
          </form>
          <div style="margin-top: 20px">
            <a
              href="/forgotpass"
              style="
                text-decoration: none;
                color: black;
                text-align: center;
                font-size: 19px;
              "
              ><p>
                <b><u>Forgot your password?</u></b>
              </p></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="slika_centrirano"><img src="@/assets/logo.jpg" /></div>
  </div>
</template>

<style scoped>
.slika_centrirano {
  display: flex;
  justify-content: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.boja {
  background-color: #ebebeb;
}

label {
  font-size: 20px;
}
</style>

<script>
import firebase from "@/firebase.js";
export default {
  name: "Login",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("uspjesna prijava", result);
        })
        .catch((e) => {
          console.error("greška", e);
        });
    },
  },
};
</script>
