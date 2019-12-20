<template>
  <div id="registerForm">
    <hr class="line1">
    <div class="container col-sm-4">
      <form v-on:submit.prevent="addUser()">
        <div class="form-group">
          <label for="txtName">Nome:</label>
          <input type="text" class="form-control" id="txtName" placeholder="Insira o seu nome" required v-model="name"/>
        </div>
        <div class="form-group">
          <label for="emailTxt">E-mail:</label>
          <input type="email" class="form-control" id="emailTxt" aria-describedby="emailHelp" placeholder="Insira o seu email" required v-model="email"/>
        </div>
        <div class="form-group">
          <label for="passTxt">Password:</label>
          <input type="password" class="form-control" id="passTxt" placeholder="Password" required v-model="password"/>
        </div>
        <div class="form-group">
          <label for="confirmarPassTxt">Confirmar Password:</label>
          <input type="password" class="form-control" id="confirmarPassTxt" placeholder="Confirme sua Password" required v-model="confPass"/>
        </div>
        <button type="submit" class="btn">Confirmar</button>
        <!-- <button type="button" class="btn btn-link float-right">
          <router-link to="/login">Login</router-link>
        </button>-->
      </form>
    </div>
    <hr class="line2">
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    id: 0,
    name: "",
    email: "",
    password: "",
    confPass: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
  },
  methods: {
    /**
     * GET LAST ID
     */
    getLastId() {
      return this.$store.getters.getLastId;
    },
    /***
     * FUNCTION CREATED TO ADD NEW TRAVEL
     */
    addUser() {
      this.$store.commit("ADD_USER", {
        id: this.getLastId() + 1,
        name: this.name,
        email: this.email,
        password: this.password,
        confPass: this.confPass
      });
    },
    saveStorage() {
      localStorage.setItem("users", JSON.stringify(this.$store.state.users));
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(this.$store.state.loggedUser)
      );
    }
  }
};
</script> 

<style>
.form-control {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #fff;
}
.btn {
  position: absolute;
  left: 308px;
  color: white;
  border-radius: 0;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
}
.btn:hover {
  color: white;
  border-radius: 0;
  border-color: #f7ca18;
  background-color: #000;
  border-width: thick;
}
.line1{
  position: relative;
  background-color: #000;
  height: 3px;
  width: 1100px;
}
.line2{
  position: relative;
  background-color: #000;
  height: 3px;
  width: 1100px;
  margin-top: 80px;
}
</style>