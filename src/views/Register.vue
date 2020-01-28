<template>
  <div id="registerForm">
    <b-img src="../assets/imgRegisto.jpg" class="imgRegister" />
    <div id="bar"></div>
    <h1 class="centered" id="registerPage">Registo</h1>
    <br />
    <br />
    <br />
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
            pattern="[a-z0-9._%+-]+@+[a-z]+.ipp.pt"
            placeholder="Insira o seu email"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="contactTxt" class="contactLabel">Contacto:</label>
          <input
            type="tel"
            class="form-control"
            id="contactTxt"
            pattern="[0-9]{9}"
            placeholder="Insira o seu número de telefone"
            required
            v-model="contact"
          />
        </div>
        <div class="form-group">
          <label for="birthTxt" class="birthLabel">Data de Nascimento:</label>
          <input
            type="date"
            class="form-control"
            id="birthTxt"
            placeholder
            required
            v-model="birth"
          />
        </div>
        <input type="link" id="urlAvatar" v-model="imgPerfil" :placeholder="imgPerfil" />
        <div id="avatar">
          <img id="avatar1" :src="imgPerfil" />
        </div>
        <p href id="addAvatar">Insira Url do avatar</p>
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
    confPass: "",
    contact: "",
    birth: "",
    eventType: [],
    imgPerfil: ""
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
     * FUNCTION CREATED TO ADD NEW USER
     */

    addUser() {
      if (this.email.includes(this.school.toLowerCase())) {
        alert(this.school);
        this.$store.commit("ADD_USER", {
          id: this.getLastId() + 1,
          name: this.name,
          school: this.school,
          email: this.email,
          password: this.password,
          confPass: this.confPass,
          birth: this.birth,
          contact: this.contact,
          imgProfile: this.imgPerfil
        });
      }
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
#registerPage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Channel;
  font-size: 210%;
  color: black;
}
#bar {
  position: absolute;
  opacity: 0.6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1263px;
  height: 90px;
  background-color: white;
}
.form-control {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #fff;
}
.btnConf {
  position: relative;
  width: 120px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 50px;
  left: 380px;
}
.btn:hover {
  color: white;
  border-radius: 0;
  border-color: #daaa29;
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
.nameLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -250px;
  margin-top: 60px;
}
#txtName {
  position: relative;
  left: 140px;
  top: -45px;
}
.passLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -280px;
  margin-top: -60px;
}
#passTxt {
  position: relative;
  left: 110px;
  top: -45px;
  width: 410px;
}
.confLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -220px;
  margin-top: -60px;
}
#confirmarPassTxt {
  position: relative;
  left: 170px;
  top: -45px;
  width: 350px;
}
.schoolLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -110px;
  margin-top: -60px;
}
#sltSchool {
  position: relative;
  left: 10px;
  width: 200px;
}
.emailLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -330px;
  top: 45px;
}
#emailTxt {
  position: relative;
  left: 60px;
  width: 465px;
}
.contactLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -320px;
  top: 45px;
}
#contactTxt {
  position: relative;
  left: 70px;
  width: 455px;
}
.birthLabel {
  font-family: GeosansLight;
  position: relative;
  margin-left: -250px;
  top: 45px;
}
#birthTxt {
  position: relative;
  left: 145px;
  width: 380px;
}
#avatar {
  position: absolute;
  top: 70px;
  width: 200px;
  height: 200px;
  left: -300px;
  border: 2px solid #232323;
}
#avatar1 {
  width: 196px;
  height: 196px;
}
#addAvatar {
  position: absolute;
  color: #000;
  left: -275px;
  top: 300px;
  font-size: 120%;
  font-family: GeosansLight;
}
#urlAvatar {
  position: absolute;
  left: -300px;
  top: 340px;
}
</style>
