<template>
  <div id="registerForm">
    <b-img src="../assets/imgRegisto.jpg" class="imgRegister" />
    <div id="bar"></div>
    <h1 class="centered" id="registerPage">Registo</h1>
    <br />
    <br />
    <br />
    <hr class="line1" />
    <div class="container col-sm-4" style="left: 15%">
      <form v-on:submit.prevent="addUser()" id="form">
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
          <label for="passTxt" class="passLabel">Palavra-chave:</label>
          <input
            type="password"
            class="form-control"
            id="passTxt"
            placeholder="Password"
            required
            v-model="password"
          />
          <label for="confirmarPassTxt" class="confLabel">Confirmar Palavra-chave:</label>
          <input
            type="password"
            class="form-control"
            id="confirmarPassTxt"
            placeholder="Confirme sua Password"
            required
            v-model="confPass"
          />
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
          <label for="birthTxt" class="birthLabel">Data de Nascimento:</label>
          <input
            type="date"
            class="form-control"
            id="birthTxt"
            placeholder
            required
            v-model="birth"
          />
          <label for="sltSchool" class="schoolLabel">Instituição:</label>
          <select id="sltSchool" v-model="school">
            <option v-for="s in schools" :value="s.id_ipp" :key="s.id_ipp">{{s.nome}}</option>
          </select>
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
import { mapGetters } from "vuex";
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
    imgPerfil: "",
    schools: []
  }),
  created() {
    this.getAllSchools();
  },
  computed: {
    ...mapGetters(["getSchools"])
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch("addUser", {
          name: this.name,
          school: this.school,
          email: this.email,
          password: this.password,
          birth: this.birth,
          contact: this.contact,
          imgProfile: this.imgPerfil
        });
      } catch (err) {
        alert(err);
      }
    },
    saveStorage() {
      localStorage.setItem("users", JSON.stringify(this.$store.state.users));
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(this.$store.state.loggedUser)
      );
    },
    async getAllSchools() {
      try {
        await this.$store.dispatch("getSchools");
        this.schools = this.getSchools;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
.imgRegister {
  position: relative;
  width: 66.5%;
  height: auto;
  background-color: white;
  /* -webkit-filter: blur(2px);
  filter: blur(2px); */
}
#registerPage {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Channel;
  font-size: 200%;
  color: black;
}
#bar {
  position: absolute;
  opacity: 0.6;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 66.5%;
  height: 10%;
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
  width: 20%;
  font-size: 0.8vw;
  height: 2vw;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 2vw;
  left: 20vw;
}
.btnConf:hover {
  color: white;
  border-radius: 0;
  border-color: #daaa29;
  background-color: #000;
  border-width: 0.35vw;
}
.line1 {
  position: relative;
  background-color: #000;
  height: 0.2vw;
  width: 60%;
}
.line2 {
  position: relative;
  background-color: #000;
  height: 0.2vw;
  width: 60%;
  margin-top: 4%;
}
#form{
  align-items: left;
  text-align: left;
}
.nameLabel {
  font-family: GeosansLight;
  position: relative;
  /* margin-left: -15vw; */
  margin-top: 7%;
}
#txtName {
  position: relative;
  left: 10vw;
  width: 30%;
  top: -2vw;
}
.passLabel {
  font-family: GeosansLight;
  position: relative;
}
#passTxt {
  position: relative;
  left: 32%;
  top: -2vw;
  width: 30%;
}
.confLabel {
  font-family: GeosansLight;
  position: relative;
}
#confirmarPassTxt {
  position: relative;
  left: 32%;
  top: -2vw;
  width: 33%;
}
.emailLabel {
  font-family: GeosansLight;
  position: relative;
  margin-top: 2%;
}
#emailTxt {
  position: relative;
  left: 32%;
  width: 30%;
  margin-top: -7%;
}
.contactLabel {
  font-family: GeosansLight;
  position: relative;
  margin-top: 7%;
}
#contactTxt {
  position: relative;
  left: 32%;
  width: 41%;
  margin-top: -7%;
}
.birthLabel {
  font-family: GeosansLight;
  position: relative;
  top: 45px;
}
#birthTxt {
  position: relative;
  left: 32%;
  width: 30%;
}
.schoolLabel {
  font-family: GeosansLight;
  position: relative;
  margin-top: 10%;
}
#sltSchool {
  position: relative;
  width: 200px;
  left: 23%;
}
#avatar {
  position: absolute;
  top: 10%;
  width: 49%;
  height: 37%;
  left: -70%;
  border: 2px solid #232323;
  
}
#avatar1 {
  width: 48%;
  height: 36%;
}
#addAvatar {
  position: absolute;
  color: #000;
  left: -54.5%;
  top: 52%;
  font-size: 120%;
  font-family: GeosansLight;
  
}
#urlAvatar {
  position: absolute;
  left: -60%;
  top: 60%;
  
}
</style>
