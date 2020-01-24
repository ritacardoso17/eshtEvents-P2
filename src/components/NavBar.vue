<template>
  <div class="navBar">
    <!--Navbar-->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand text-left" href="/">
        <img src="../assets/logo.eshtEvents.png" class="img-fluid" id="logoText" alt />
      </a>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <img src="../assets/Logo.mao.png" class="img-fluid" id="camp" alt />
        </li>
      </ul>
      <a v-if="this.$store.state.loggedUser.length != 0" href="Profile">
        <img
          :src="imgProfile"
          style="width:40px; height:40px; border: 2px solid #daaa29; border-radius: 100px; margin-right:10px;"
          class="img-fluid"
          id="camp"
          alt
        />
      </a>
      <router-link
        to="/login"
        v-if="this.$store.state.loggedUser.length == 0"
        id="loginBtn"
      >Iniciar Sessão</router-link>
      <a
        id="logout"
        @click="logout()"
        v-if="this.$store.state.loggedUser.length != 0"
      >Terminar Sessão</a>
    </nav>
    <!--/.Navbar-->
    <!--Navbar-->
    <nav class="navbar" id="navBar2">
      <div class="container" id="container1" style="justify-content: center">
        <!--GESTÃO DO ADMIN-->
        <div class="nav-item">
          <span v-if="this.$store.state.loggedUser.length != 0 && getTypeUser() === 'admin'">
            <router-link class="link" to="/menuAdmin">Area Administrador</router-link>
            <router-link class="link" to="/menu" id="menusLink">Menus</router-link>
            <router-link class="link" to="/events" id="eventsLink">Eventos e Catering</router-link>
            <router-link class="link" to="/room" id="roomsLink">Espaços</router-link>
            <router-link class="link" to="/workshops" id="workshopsLink">Workshops</router-link>
          </span>
          <span v-else>
            <router-link class="link" to="/menu" id="menusLink">Menus</router-link>
            <router-link class="link" to="/events" id="eventsLink">Eventos e Catering</router-link>
            <router-link class="link" to="/room" id="roomsLink">Espaços</router-link>
            <router-link class="link" to="/workshops" id="workshopsLink">Workshops</router-link>
          </span>
        </div>
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
    password: "",
    imgProfile: ""
  }),
  created: function() {
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
      this.imgProfile = this.$store.state.loggedUser[0].imgProfile;
    }
    if (!localStorage.getItem("foodMenus")) {
      localStorage.setItem(
        "foodMenus",
        JSON.stringify(this.$store.state.foodMenus)
      );
    }
    if (!localStorage.getItem("workshops")) {
      localStorage.setItem(
        "workshops",
        JSON.stringify(this.$store.state.workshops)
      );
    }
    
    if (!localStorage.getItem("rentRooms")) {
      localStorage.setItem(
        "rentRooms",
        JSON.stringify(this.$store.state.workshops)
      );
    }
  },
  methods: {
    /**VER SE EXISTE UM USER COM O EMAIL E PASS */
    logout() {
      this.$store.commit("LOGOUT");
    },
    getTypeUser() {
      return this.$store.getters.getTypeUser;
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
  height: 40px;
}

.modal-title {
  font-family: Channel;
  margin-left: 130px;
}

.modal-header {
  border: none;
}

#logoText {
  width: 40%;
  height: auto;
}

#camp {
  width: 10%;
  height: auto;
}

#container1 {
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

#loginBtn {
  color: black !important;
  font-family: geosanslight;
}
#logout {
  color: black !important;
  font-family: geosanslight;
}
.link {
  padding: 20px;
}
</style>