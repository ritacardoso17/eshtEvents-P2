<template>
  <div class="profile">
    <h1 id="title" class="centered">Perfil</h1>
    <!-- <div id="container"> -->
    <hr id="linha1" />
    <hr id="linha2" />
    <div id="picture">
      <img id="picture" />
    </div>
    <a id="editPhoto">Editar Foto</a>

    <h3 id="name">{{loggedUser[0].name}}</h3>

    <p id="info">Data de Nascimento: {{loggedUser[0].birth}}</p>

    <p id="info">Contacto: {{loggedUser[0].contact}}</p>

    <p id="info">Instituição: {{loggedUser[0].school}}</p>

    <p id="info">E-mail: {{loggedUser[0].email}}</p>

    <router-link to="/Profile/editProfile">
      <button id="edit">Editar Perfil</button>
    </router-link>
    <!-- </div> -->


    <espacos/>
    <eventos/>
  </div>
</template>

<script>
import espacos from "../components/espacos.vue"
import eventos from "../components/eventos.vue"
export default {
  components:{
    espacos,
    eventos
  },
  data() {
    return {
      objects: [],
      fields: [
        { key: "type", lable: "type", sortable: true },
        { key: "day", lable: "day", sortable: true },
        { key: "state", lable: "state", sortable: true },
        { key: "change" },
        { key: "rate" }
      ]
    };
  },
  created() {
    localStorage.setItem("rooms", JSON.stringify(this.$store.state.rooms));
    if (localStorage.getItem("rooms")) {
      this.objects = JSON.parse(localStorage.getItem("rooms"));
    }

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    },
    getRooms() {
      return this.$store.state.rooms;
    },
    editStars() {
      let star1 = document.addEventListener("click");
      let star2 = document.addEventListener("click");
      let star3 = document.addEventListener("click");
      let star4 = document.addEventListener("click");
      let star5 = document.addEventListener("click");
      if (star1) {
        /* src da primeira estrela mudar para preenchido */
      } else if (star2) {
        /* src da 1 e 2 estrelas mudar para preenchido */
      } else if (star3) {
        /* src da 1, 2 e 3 estrelas mudar para preenchido */
      } else if (star4) {
        /* src da 1, 2, 3 e 4 estrelas mudar para preenchido */
      } else if (star5) {
        /* src da 1, 2, 3, 4 e 5 estrelas mudar para preenchido */
      }
    }
  }
};
</script>

<style>
#title {
  font-family: Channel;
  color: #000;
  position: absolute;
  top: 150px;
  font-size: 25px;
}
/* #container {
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  height: 350px;
  width: 1050px;
} */
#linha1 {
  position: absolute;
  left: 100px;
  top: 200px;
  height: 500px;
  width: 2px;
  background-color: #000;
}
#linha2 {
  position: absolute;
  top: 200px;
  right: 100px;
  height: 500px;
  width: 2px;
  background-color: #000;
}
#picture {
  position: absolute;
  top: 100px;
  width: 200px;
  height: 300px;
  left: 100px;
}
#editPhoto {
  position: absolute;
  width: 200px;
  height: 300px;
  left: 200px;
  top: 1040px;
  text-decoration: underline;
}
#name {
  position: relative;
  padding-top: 10px;
  margin-left: 106px;
  font-weight: bold;
  font-family: Champagne;
}
#info {
  position: relative;
  margin-top: 40px;
  margin-left: 490px;
  text-align: left;
  font-family: GeosansLight;
}
#edit {
  position: relative;
  top: 40px;
  margin-left: 600px;
  width: 150px;
  height: 50px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight;
}
#edit:hover {
  position: relative;
  margin-left: 600px;
  color: white;
  border-color: #daaa29;
  background-color: #000;
  border-width: thick;
}
#profileLinks {
  position: relative;
  top: 100px;
  font-size: 35px;
  font-family: GeosansLight;
  color: black;
}
#subtitle {
  position: relative;
  top: 150px;
}
#line1 {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: 187px;
  margin-left: 350px;
}
#line2 {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: 117px;
  margin-right: 350px;
}
.table {
  position: sticky;
  color: black;
  top: 50px;
  left: 500px;
}
.yourEvents {
  /* background-color: #232323;
  color: white; */
  position: absolute;
  top: 1000px;
  width: 1000px;
}
</style>