<template>
  <div class="navBar">
    <!--Navbar-->
    <nav class="navbar navbar-light bg-light">
      <a
        class="nav-item"
        id="bell"
        v-if="this.$store.state.loggedUser.length == 0"
      >
        <router-link class="navbar-brand text-left" to="/">
          <img
            src="../assets/logo.eshtEvents.png"
            class="img-fluid"
            id="logoText"
            alt
          />
        </router-link>
        <img src="../assets/Logo.mao.png" class="img-fluid" id="camp" alt />
        <router-link to="/login" id="loginBtn">Iniciar Sessão</router-link>
      </a>
      <a v-if="this.$store.state.loggedUser.length != 0" href="Profile">
        <router-link to="/">
          <img
            src="../assets/logo.eshtEvents.png"
            class="img-fluid"
            id="logoText1"
            alt
          />
        </router-link>
        <img src="../assets/Logo.mao.png" class="img-fluid" id="camp1" alt />
        <router-link to="/profile">
          <img
            :src="this.$store.state.loggedUser.user[0].foto_perfil"
            style="width:40px; height:40px; border: 2px solid #daaa29; border-radius: 100px; margin-right:10px;"
            class="img-fluid"
            id="photo"
            alt
          />
        </router-link>
        <a id="logout" @click="logout()">Terminar Sessão</a>
      </a>
    </nav>
    <!--/.Navbar-->
    <!--Navbar-->
    <nav class="navbar" id="navBar2">
      <div class="container" id="container1" style="justify-content: center">
        <!--GESTÃO DO ADMIN-->
        <div class="nav-item">
          <span
            v-if="
              this.$store.state.loggedUser.length != 0 &&
                this.$store.state.loggedUser.user[0].id_tipoUser === 1
            "
          >
            <router-link class="link" to="/menuadmin" id="links"
              >Area Administrador</router-link
            >
            <router-link class="link" to="/menu" id="links">Menus</router-link>
            <router-link class="link" to="/events" id="links"
              >Eventos e Catering</router-link
            >
            <router-link class="link" to="/room" id="links"
              >Espaços</router-link
            >
            <router-link class="link" to="/workshops" id="links"
              >Workshops</router-link
            >
          </span>
          <span v-else>
            <router-link class="link" to="/menu" id="links">Menus</router-link>
            <router-link class="link" to="/events" id="links"
              >Eventos e Catering</router-link
            >
            <router-link class="link" to="/room" id="links"
              >Espaços</router-link
            >
            <router-link class="link" to="/workshops" id="links"
              >Workshops</router-link
            >
          </span>
        </div>
      </div>
    </nav>
    <!--/.Navbar-->
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    email: "",
    password: "",
    foto_perfil: "",
    tipoUser: ""
  }),
  created: function() {
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );

      this.foto_perfil = this.$store.state.avatar;
      this.tipoUser = this.$store.state.loggedUser.user[0].id_tipoUser;
    }
  },
  methods: {
    /**VER SE EXISTE UM USER COM O EMAIL E PASS */
    logout() {
      this.$store.commit("LOGOUT");
    },
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
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
  height: 30%;
}

.modal-title {
  font-family: Channel;
  margin-left: 130px;
}

.modal-header {
  border: none;
}

#logoText {
  width: 35%;
  margin-left: 2vw;
  height: auto;
}

#logoText1 {
  width: 9vw;
  margin-left: 0vw;
  height: auto;
}

#bell {
  left: -2vw;
  position: relative;
}

#camp {
  width: 2vw;
  right: -25vw;
  position: relative;
}

#camp1 {
  width: 2vw;
  right: -38vw;
  position: relative;
}

#photo {
  width: 10vw;
  left: 77vw;
  object-fit: cover;
  position: relative;
}

#container1 {
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;
  font-family: GeosansLight;
}

#links {
  color: white;
  text-decoration: none;
}

#links:hover {
  color: #daaa29;
}

span {
  color: #232323;
}

#loginBtn {
  color: black !important;
  font-family: geosanslight;
  margin-left: 67vw;
}

#logout {
  color: black !important;
  font-family: geosanslight;
  position: absolute;
  right: 1vw;
  top: 1.5vw;
}

.link {
  padding: 20px;
}
</style>
