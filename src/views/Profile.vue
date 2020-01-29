<template>
  <div class="profile">
    
    <div class="container">
      <h1 style="padding-top:20px; padding-bottom: 50px;">Perfil</h1>
    </div>

    <div class="container perfilBanner">
      <div class="row">
        <div class="col-sm-4 fotoP">
          <div>
            <img style="width:200px; height:auto" :src="loggedUser[0].imgProfile" />
          </div>
          <button id="editFoto">Editar Foto</button>
        </div>
        <div align="left" class="col-sm-4 infos">
          <p><b>{{loggedUser[0].name}}</b></p>
          <p>Data de Nascimento: {{loggedUser[0].birth}}</p>
          <p>Contacto: {{loggedUser[0].contact}}</p>
          <p>Instituição: {{loggedUser[0].school}}</p>
          <p>E-mail: {{loggedUser[0].email}}</p>
        </div>
        <div class="col-sm-4">
          <router-link to="/Profile/editProfile">
            <button id="edit">
              <img
                style="width:25px; margin-right:5px; margin-top:5px"
                src="../assets/settings.svg"
              />Editar Perfil
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 60px; padding-top: 20px;">
      <h2>As Tuas Reservas</h2>
    </div>

    <div class="container tables">
      <b-tabs align="center">
        <b-tab title="Eventos">
          <div class="container" style="padding:120px;">
            <eventos />
          </div>
        </b-tab>
        <b-tab title="Espaços">
          <div class="container" style="padding:120px;">
            <espacos />
          </div>
        </b-tab>
      </b-tabs>
    </div>

  </div>
</template>

<script>
import espacos from "../components/espacos.vue";
import eventos from "../components/eventos.vue";
export default {
  components: {
    espacos,
    eventos
  },
  data() {},
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (localStorage.getItem("reservations")) {
      this.$store.state.reservations = JSON.parse(
        localStorage.getItem("reservations")
      );
      this.reservations = this.$store.state.reservations;
    }

    if (localStorage.getItem("roomRents")) {
      this.$store.state.roomRents = JSON.parse(
        localStorage.getItem("roomRents")
      );
      this.roomRents = this.$store.state.roomRents;
    }
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    }
  }
};
</script>

<style>
#edit {
  color: white;
  background-color: black;
  border: 0px;
  font-family: GeosansLight;
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
}

.table {
  position: sticky;
  color: black;
  top: 50px;
  left: 500px;
}

#editFoto {
  color: black;
  background-color: transparent;
  border: 0px;
}

.infos {
  margin-left: -85px;
  margin-right: 150px;
}

.fotoP {
  margin-left: -75px;
}

.perfilBanner {
  padding-top: 10px;
  padding-bottom: 50px;
  border-left: 2px solid black;
  border-right: 2px solid black;
}

.tables {
  padding-top: 50px;
  margin-bottom: 80px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
</style>