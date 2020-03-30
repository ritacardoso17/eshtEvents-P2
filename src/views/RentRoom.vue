<template>
  <div class="rentRoom">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <div class="container-full title">
      <h3 id="redTitle">Os nossos Espaços</h3>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>


    <p id="guideRoom">Complete as seguintes etapas para efetuar a sua reserva</p>

    <b-tabs align="center" v-model="tabIndex" small card id="tab1">
      <!-- TAB DA ESCOLHA DO ESPAÇO -->
      <b-tab title="Espaço" :title-link-class="'tab-title-class'" active>
        <div class="container">
          <div class="row" id="progressRow">
            <b-progress
              align="center"
              id="progress"
              :value="33"
              variant="warning"
              :striped="striped"
            ></b-progress>
          </div>
          <div class="row">
            <p class="guide7">
              ▶
              <b style="color: #daaa29; font-size: 130% ">Escolha</b> o espaço que pretende alugar
            </p>
          </div>
          <div class="row">
            <div class="col-sm-4" v-for="r in this.rooms" :key="r.id">
              <b-card
                :img-src="r.img"
                style="max-width: 20rem; border:0px solid transparent;"
                img-alt="Image"
                img-top
                class="mb-2"
              >
                <button @click="chooseRoom(r.name)" id="btnChoose">{{r.name}}</button>
              </b-card>
            </div>
          </div>
        </div>
      </b-tab>
      <!-- TAB DA INFO -->
      <b-tab title="Informação">
        <div class="container">
          <div class="row" id="progressRow">
            <b-progress id="progress" :value="66" variant="warning" :striped="striped"></b-progress>
          </div>
          <form action>
            <div class="container" style="margin-bottom:100px">
              <div class="row">
                <div class="col-sm-5">
                  <label for="input1" style="margin-top:50px; float:left">▶Data</label>
                  <b-form-input
                    style="margin-bottom:50px"
                    v-model="day"
                    type="date"
                    id="input1"
                    required
                  ></b-form-input>
                  <label for="input2" style="float: left">▶ Tempo de duração</label>
                  <b-form-input
                    v-model="duration"
                    type="number"
                    max="12"
                    min="1"
                    id="input2"
                    required
                  ></b-form-input>
                </div>
                <div class="col-sm-2"></div>
                <div class="col-sm-5" style="margin-top:50px; margin-bottom:50px">
                  <label for="input4" style="float: left">▶Hora</label>
                  <b-form-input
                    v-model="time"
                    type="time"
                    style="margin-bottom:50px"
                    id="input4"
                    required
                  ></b-form-input>
                  <label for="input3" style="float: left">▶ Motivo da reserva</label>
                  <textarea
                    cols="50"
                    style="float: left; resize:none"
                    rows="2"
                    v-model="reason"
                    id="input3"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </b-tab>
      <!-- TAB DO RESUMO -->
      <b-tab title="Resumo">
        <div class="container">
          <div class="row" id="progressRow" >
            <h3 class="resume">
              <b>Resumo</b>
            </h3>
            <hr id="resumeLine" />
          </div>
          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-3">
              <p id="inform">
                <b>Informações</b>
              </p>
              <div>
                <p id="pDate">▶ Dia: {{day}}</p>
                <p id="pTime">▶ Hora: {{time}}h</p>
                <p id="pDuration">▶ Duração: {{duration}}h</p>
                <p id="pReason">▶ Motivo: {{reason}}</p>
              </div>
            </div>

            <div class="col-sm-3">
              <p id="room">
                <b>Espaço</b>
              </p>
              <p id="roomSlt">{{slctRoom}}</p>
            </div>
            <div class="col-sm-3"></div>
          </div>

          <a id="confirm" class="btn btn-primary" @click="rentRoom()" role="button">Confirmar</a>
          <a id="cancel" class="btn btn-primary" href="/room" role="button">Cancelar</a>
        </div>
      </b-tab>
    </b-tabs>
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
        this.$bvToast.toast("Tem de preencher todos os campos");
      } else {
        location.href = "./room";
        this.$bvToast.toast("Alguer de Espaço efetuado com sucesso");
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

/* ESPAÇO TAB */
.guide7 {
  font-family: GeosansLight;
  text-align: justify;
  margin-top: 15px;
  font-size: 110%;
}
#btnChoose {
  font-size: 12px;
  margin-top: 10px;
  height: 40px;
  color: white;
  background-color: #000;
  border: 2px solid black;
  font-family: GeosansLight;
}
#btnChoose:hover {
  background-color: #000;
  border: 2px solid #daaa29;
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
}
#room {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
}

#pDate {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
}
#pTime {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
}
#pDuration {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
}
#pReason {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
}
#roomSlt {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 14px;
  color: black;
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
    margin: 10px;
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
  margin: 10px;
}

.col-sm-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;
}

.col-sm-12 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;
}
.col-sm-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;
}
.col-sm-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;
}
#progress {
  width: 400px;
  height: 8px;
}

#progressRow {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  
    padding-bottom: 50px;
  }
 
  #whiteRect {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 300px;
    position: relative;
    display: block;
    z-index: 6
  }
  
  .back-line {
    background-color: #daaa29;
    margin-top: -25px;
    width: 70%;
    display: block;
    z-index: 5;
    position: relative;
    height: 1px;
  }
  #redTitle {
    font-family: "Channel";
    color: black;
    display: block;
    z-index: 7;
    position: relative;
  }

</style>