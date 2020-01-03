<template>
  <div id="registerForm">
    <b-img src="../assets/imgRegisto.jpg" class="imgRegister" />
    <div id="bar"></div>
    <h1 class="centered" id="registerPage">Registo</h1>
    <br><br><br>
    <hr class="line1" />
    <div class="container col-sm-4">
      <form v-on:submit.prevent="addUser()">
        <div class="form-group">
          <label for="txtName" class="nameLabel">Nome de Utilizador:</label>
          <input
            type="text"
            class="form-control"
            id="txtName"
            placeholder="Insira o seu nome"
            required
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="passTxt" class="passLabel">Palavra-chave:</label>
          <input
            type="password"
            class="form-control"
            id="passTxt"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="confirmarPassTxt" class="confLabel">Confirmar Palavra-chave:</label>
          <input
            type="password"
            class="form-control"
            id="confirmarPassTxt"
            placeholder="Confirme sua Password"
            required
            v-model="confPass"
          />
        </div>
        <div class="form-group">
          <label for="sltSchool" class="schoolLabel">Instituição:</label>
          <select id="sltSchool" v-model="school">
            <option value="pick">Escolher Instituição</option>
            <option value="esht">ESHT</option>
            <option value="esmad">ESMAD</option>
            <option value="isep">ISEP</option>
            <option value="iscap">ISCAP</option>
            <option value="ese">ESE</option>
            <option value="esmae">ESMAE</option>
            <option value="ess">ESS</option>
          </select>
        </div>
        <div class="form-group">
          <label for="emailTxt" class="emailLabel">E-mail:</label>
          <input
            type="email"
            class="form-control"
            id="emailTxt"
            aria-describedby="emailHelp"
            placeholder="Insira o seu email"
            required
            v-model="email"
          />
        </div>
        <button type="submit" class="btnConf">Confirmar</button>
        <!-- <button type="button" class="btn btn-link float-right">
          <router-link to="/login">Login</router-link>
        </button>-->
      </form>
    </div>
    <hr class="line2" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Register",
  data: () => ({
    id: 0,
    name: "",
    school: "pick",
    email: "",
    password: "",
    confPass: ""
  }),
  created: function() {
   
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
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
        id: this.getLastId(),
        name: this.name,
        school: this.school,
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
.imgRegister {
  position: relative;
  width: 1263px;
  height: auto;
  background-color: white;
  /* -webkit-filter: blur(2px);
  filter: blur(2px); */
}
.form-control {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #fff;
}
.btnConf{
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 50px;
  left: 250px;
}
.btn:hover {
  color: white;
  border-radius: 0;
  border-color: #DAAA29;
  background-color: #000;
  border-width: thick;
}
.line1 {
  position: relative;
  background-color: #000;
  height: 3px;
  width: 1100px;
}
.line2 {
  position: relative;
  background-color: #000;
  height: 3px;
  width: 1100px;
  margin-top: 80px;
}
.nameLabel{
  font-family: GeosansLight;
  position: relative;
  margin-left: -250px;
  margin-top: 60px;
}
#txtName{
  position: relative;
  left: 140px;
  top: -45px;
}
.passLabel{
  font-family: GeosansLight;
  position: relative;
  margin-left: -280px;
  margin-top: -60px;
}
#passTxt{
  position: relative;
  left: 110px;
  top: -45px;
}
.confLabel{
  font-family: GeosansLight;
  position: relative;
  margin-left: -220px;
  margin-top: -60px;
}
#confirmarPassTxt{
  position: relative;
  left: 170px;
  top: -45px;
}
.schoolLabel{
  font-family: GeosansLight;
  position: relative;
  margin-left: -110px;
  margin-top: -60px;
}
#sltSchool{
  position: relative;
  left: 10px;
  width: 200px;
}
.emailLabel{
  font-family: GeosansLight;
  position: relative;
  margin-left: -330px;
  top: 45px;
}
#emailTxt{
  position: relative;
  left: 60px;
  width: 500px;
}
</style>
