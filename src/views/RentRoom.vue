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
      <b-tabs align="center" v-model="tabIndex" small card id="tab1">
        <!-- TAB DA ESCOLHA DO ESPAÇO -->
        <b-tab title="Espaço" :title-link-class="'tab-title-class'" active>
          <b-progress id="progress" :value="33" variant="warning" :striped="striped"></b-progress>
          <br />
          <p class="guide7">
            ▶
            <b style="color: #daaa29; font-size: 130% ">Escolha</b> o espaço que pretende alugar
          </p>

          <div class="container" align="center">
            <div class="row">
              <div v-for="r in this.rooms" :key="r.id">
                <b-img :src="r.img" style="width:200px" class="roomImg"></b-img>
                <div class="row">
                  <button @click="chooseRoom(r.name)" id="btnChoose">{{r.name}}</button>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- TAB DA INFO -->
        <b-tab title="Informação">
          <form action>
            <b-progress id="progress" :value="66" variant="warning" :striped="striped"></b-progress>
            <br />
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
              <p class="guide10">▶ Motivo da reserva</p>
              <textarea id="rentReason" cols="30" rows="2" v-model="reason"></textarea>
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
          <p id="pReason">▶ Motivo: {{reason}}</p>
          <p id="room">
            <b>Espaço</b>
          </p>
          <p id="roomSlt">{{slctRoom}}</p>
          <a
            id="confirm"
            class="btn btn-primary"
            @click="rentRoom()"
            role="button"
          >Confirmar</a>
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
    type: "",
    day: "",
    time: "",
    duration: "",
    user: "",
    state: 0,
    slctRoom: "",
    rooms: [],
    tabIndex: 1,
    roomRents: [],
    reason: ""
  }),
  created() {
    window.addEventListener("unload", this.saveStorage);

    localStorage.setItem("rooms", JSON.stringify(this.$store.state.rooms));
    if (localStorage.getItem("rooms")) {
      this.$store.state.rooms = JSON.parse(localStorage.getItem("rooms"));
      this.rooms = this.$store.state.rooms;
    }
    if (localStorage.getItem("roomRents")) {
      this.$store.state.roomRents = JSON.parse(
        localStorage.getItem("roomRents")
      );
      this.roomRents = this.$store.state.roomRents;
    }
  },
  methods: {
    saveStorage() {
      localStorage.setItem(
        "roomRents",
        JSON.stringify(this.$store.state.roomRents)
      );
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
    chooseRoom(room) {
      for (let r in this.rooms) {
        if (room === this.rooms[r].name) {
          this.slctRoom = room;
        }
      }
      this.tabIndex++;
    },
    rentRoom() {
      this.$store.commit("RENT_ROOM", {
        id: this.getLastIdRooms() + 1,
        room: this.slctRoom,
        day: this.day,
        time: this.time,
        duration: this.duration,
        userName: this.$store.state.loggedUser[0].name,
        userMail: this.getLoggedUserEmail(),
        reason: this.reason
      });
      if (
        this.room == "" ||
        this.day == "" ||
        this.time == "" ||
        this.duration == "" ||
        this.reason == ""
      ) {
        this.$bvToast.toast('Tem de preencher todos os campos')
      } else {
        location.href="./room"
         this.$bvToast.toast('Alguer de Espaço efetuado com sucesso')
      }
    }
  }
};
</script>

<style>
.catering {
  position: relative;
  width: 1263px;
}

#progress {
  width: 400px;
  margin-left: 400px;
  height: 8px;
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
#btnChoose {
  width: 120px;
  font-size: 12px;
  margin-top: 10px;
  height: 30px;
  margin-left: 195px;
  color: white;
  background-color: #000;
  border: 2px solid black;
  font-family: GeosansLight;
}
#btnChoose:hover {
  background-color: #000;
  border: 2px solid #daaa29;
}
.roomImg {
  margin-left: 140px;
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
  width: 300px;
  font-size: 110%;
}

.guide10 {
  font-family: GeosansLight;
  text-align: justify;
  position: relative;
  top: -70px;
  width: 300px;
  left: 700px;
  font-size: 110%;
}

#rentDate {
  position: relative;
  width: 200px;
  height: 35px;
  left: 200px;
}

#rentTime {
  position: relative;
  width: 200px;
  height: 35px;
  left: 200px;
  top: 80px;
}

#rentDuration {
  width: 200px;
  height: 35px;
  position: relative;
  left: 700px;
  top: -117px;
}

#rentReason {
  width: 200px;
  position: relative;
  left: 200px;
  top: -80px;
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
  margin-top: -190px;
}

#pDate {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
  margin-left: 425px;
}
#pTime {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
  margin-left: 425px;
}
#pDuration {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
  margin-left: 425px;
}
#pReason {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
  margin-left: 425px;
}
#roomSlt {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
  margin-left: 690px;
}
#confirm {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  border: 2px solid black;
  background-color: #000;
  font-family: GeosansLight;
  top: 160px;
  left: 100px;
}
#confirm:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
#cancel:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

#cancel {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  border: 2px solid black;
  background-color: #000;
  font-family: GeosansLight;
  top: 160px;
  left: -100px;
}
</style>