<template>
  <div class="navBar">
    <!--Navbar-->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand text-left" href="/">
        <img src="../assets/logo.eshtEvents.png" class="img-fluid" alt />
      </a>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <img src="../assets/Logo.mao.png" class="img-fluid" id="camp" alt />
        </li>
      </ul>

      <a class="nav-link" v-b-modal.modal-1 id="login">
        Iniciar Sessão
        <!-- moustache? -->
      </a>
      <b-modal id="modal-1" centered size="m" title="Iniciar Sessão" hide-header-close hide-footer>
        <b-img src="../assets/noun_X_2290001.png" id="x1"></b-img>
        <b-img src="../assets/noun_X_2290001.png" id="x2"></b-img>
        <div class="form-group">
          <form v-on:submit.prevent="login()">
            <label for="txtEmailLogin" class="emailLogin">E-mail:</label>
            <input
              type="email"
              class="form-control"
              id="txtEmailLogin"
              placeholder="Insira o seu e-mail"
              v-model="email"
              required
            />
            <label for="txtPasswordLogin" class="passLogin">Palavra-Chave:</label>
            <input
              type="password"
              class="form-control"
              id="txtPasswordLogin"
              placeholder="Insira a sua palavra-chave"
              v-model="password"
              required
            />
            <b-button type="submit" class="btn btn-primary float-right" id="btnLogin">Entrar</b-button>
            <router-link tag="a" id="join" :to="{ name: 'register' }">Ainda não estás registado? Junta-te a nós!</router-link>
          </form>
        </div>
      </b-modal>
    </nav>
    <!--/.Navbar-->
    <!--Navbar-->
    <nav class="navbar" id="navBar2">
      <div class="container" style="justify-content: center">
        <router-link to="/events" id="eventsLink">Eventos e Catering</router-link>
        <span>/////</span>
        <router-link to="/room" id="roomsLink">Espaços</router-link>
        <span>/////</span>
        <router-link to="/workshops" id="workshopsLink">Workshops</router-link>
        <span>/////</span>
        <router-link to="/menus" id="menusLink">Menus</router-link>
      </div>
    </nav>
    <!--/.Navbar-->
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: ""
  }),
  created: function() {
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
    /**VER SE EXISTE UM USER COM O EMAIL E PASS */
    login() {
      this.$store.commit("LOGIN", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
.navbar-light {
  background-color: white !important;
}
#navBar2 {
  background-color: #232323;
  height: 40px;
}
.modal-title {
  font-family: Channel;
  margin-left: 130px;
}
.modal-header {
  border: none;
}
img {
  width: 40%;
  height: auto;
}
#join {
  font-size: 80%;
  font-family: GeosansLight;
  color: #000;
}
#x1 {
  position: relative;
  width: 30px;
  height: auto;
  top: -65px;
}
#x2 {
  position: relative;
  width: 30px;
  height: auto;
  top: -65px;
  left: 405px;
}
#txtEmailLogin {
  position: relative;
  width: 250px;
  left: 130px;
  top: -43px;
}
#txtPasswordLogin {
  position: relative;
  width: 250px;
  left: 130px;
  top: -45px;
}
.emailLogin {
  font-family: GeosansLight;
  margin-left: 80px;
}
.passLogin {
  font-family: GeosansLight;
  margin-left: 30px;
}
#btnLogin {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  white-space: nowrap;
  padding: 2px;
  left: -10px;
  background-color: #232323;
  font-family: GeosansLight;
}
#btnLogin:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
#camp {
  width: 10%;
  height: auto;
}
.container {
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;
  font-family: GeosansLight;
}
#eventsLink {
  color: white;
  text-decoration: none;
}
#eventsLink:hover {
  color: #daaa29;
}
#roomsLink {
  color: white;
  text-decoration: none;
}
#roomsLink:hover {
  color: #daaa29;
}
#workshopsLink {
  color: white;
  text-decoration: none;
}
#workshopsLink:hover {
  color: #daaa29;
}
#menusLink {
  color: white;
  text-decoration: none;
}
#menusLink:hover {
  color: #daaa29;
}
span {
  color: #232323;
}
</style>