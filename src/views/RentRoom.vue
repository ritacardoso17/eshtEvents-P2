<template>
  <div class="rentRoom">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeftR" />
    <h3 id="titule">Os nossos Espaços</h3>
    <hr id="lineRightR" />

    <p id="guideRoom">Complete as seguintes etapas para efetuar a sua reserva</p>

    <b-card no-body>
      <!-- v-model="tabIndex" -->
      <b-tabs align="center" small card id="tab1">
        <!-- TAB DA ESCOLHA DO ESPAÇO -->
        <b-tab title="Espaço" :title-link-class="'tab-title-class'" active>
          <br />
            <div class="row">
              ▶
              <b style="color: #daaa29; font-size: 130% ">Escolha</b> o espaço que pretende alugar
              <div class="col-sm-4" v-for="type in this.types" :key="type.id">
                <b-button id="btn5" @click="updatePhoto(type)" value="type"></b-button>
              </div>
            </div>
        </b-tab>
        <!-- TAB DA INFO -->
        <b-tab title="Informação">
          <form action>
            <div class="form-check">
              <p class="guide8">▶ Data e hora para o aluguer</p>
              <b-form-input v-model="day" type="date" id="rentDate" required></b-form-input>
              <b-form-input v-model="time" type="time" id="rentTime" required></b-form-input>
              <p class="guide9">▶ Tempo de duração</p>
              <b-form-input
                v-model="duration"
                type="number"
                max="12"
                min="1"
                id="rentDuration"
                required
              ></b-form-input>
            </div>
          </form>
        </b-tab>
        <!-- TAB DO RESUMO -->
        <b-tab title="Resumo">
          <h3 class="resume">
            <b>Resumo</b>
          </h3>
          <hr id="resumeLine" />
          <p id="inform">
            <b>Informações</b>
          </p>
          <p id="pDate">▶ Dia: {{day}}</p>
          <p id="pTime">▶ Hora: {{time}}h</p>
          <p id="pDuration">▶ Duração: {{duration}}h</p>
          <p id="room">
            <b>Espaço</b>
          </p>
          <p>▶ Espaço: {{types}}</p>

          <img :src="types" alt="HEY" />
          <a id="confirm" class="btn btn-primary" @click="rentRoom()" role="button">Confirmar</a>
          <a id="cancel" class="btn btn-primary" href="/room" role="button">Cancelar</a>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "rentRoom",
  data: () => ({
    id: 0,
    types: "",
    day: "",
    time: "",
    duration: "",
    user: "",
    state: 0
  }),
  methods: {
    updatePhoto(p) {
      this.type = p;
    },
    getLoggedUserEmail() {
      return this.$store.getters.getLoggedUserEmail;
    },
    getTypeById(type) {
      return this.rooms.filter(room => room.type === type)[0].name;
    },
    getLastIdRooms() {
      return this.$store.getters.getLastIdRooms;
    },
    rentRoom() {
      this.$store.commit("RENT_ROOM", {
        id: this.getLastIdRooms() + 1,
        type: this.types,
        day: this.day,
        time: this.time,
        duration: this.duration,
        userMail: this.$store.getters.getLoggedUserEmail
      });
      alert("adicionei reserva de espaço");
    },

    saveStorage() {
      localStorage.setItem("rooms", JSON.stringify(this.$store.state.rooms));
    }
  },
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("rooms")) {
      this.$store.state.rooms = JSON.parse(localStorage.getItem("rooms"));
    }
  }
};
</script>

<style>
.catering {
  position: relative;
  width: 1263px;
}
#lineLeftR {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 300px;
}
#lineRightR {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 300px;
}
#titule {
  margin-top: -4%;
  font-family: Channel;
  color: black;
}
#guideRoom {
  font-family: GeosansLight;
  text-align: center;
  font-size: 150%;
}
.nav-link {
  color: white !important;
  font-family: GeosansLight;
}
.nav-link.active {
  background-color: #232323 !important;
}
.card-header:first-child {
  background-color: #232323;
}
#tab1 {
  height: 450px;
}
/* ESPAÇO TAB */
.guide7 {
  font-family: GeosansLight;
  text-align: justify;
  margin-top: 15px;
  margin-left: 180px;
  font-size: 110%;
}
#butn1 {
  border: 2px solid #232323;
  position: relative;
  width: 190px;
  height: 130px;
  left: -15px;
  top: 0px;
}

#butn2 {
  border: 2px solid #232323;
  position: relative;
  width: 190px;
  height: 130px;
  left: 15px;
  top: 0px;
}
#butn3 {
  border: 2px solid #232323;
  width: 190px;
  position: relative;
  height: 130px;
  left: 45px;
  top: 0px;
}
#butn4 {
  border: 2px solid #232323;
  position: relative;
  width: 190px;
  height: 130px;
  left: 75px;
  top: 0px;
}
/* INFO TAB */
.guide8 {
  font-family: GeosansLight;
  text-align: justify;
  margin-top: 15px;
  margin-left: 180px;
  font-size: 110%;
}
.guide9 {
  font-family: GeosansLight;
  text-align: justify;
  position: relative;
  top: -115px;
  left: 700px;
  font-size: 110%;
}
#rentDate {
  position: relative;
  width: 200px;
  left: 200px;
}
#rentTime {
  position: relative;
  width: 200px;
  left: 200px;
  top: 80px;
}
#rentDuration {
  width: 200px;
  position: relative;
  left: 700px;
  top: -117px;
}
/* RESUMO TAB */
.resume {
  font-family: GeosansLight;
  color: black;
  margin-top: 20px;
}
#resumeLine {
  width: 500px;
  height: 2px;
  background-color: #daaa29;
  border: none;
}
#inform {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 450px;
}
#room {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 700px;
  margin-top: -148px;
}
#pDate {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 425px;
}
#pTime {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 425px;
}
#pDuration {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 425px;
}
#confirm {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 180px;
  left: 100px;
}
#cancel {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 180px;
  left: -100px;
}
</style>