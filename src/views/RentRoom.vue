<template>
  <div class="rentRoom">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <div class="container-full title" style="padding-bottom: 50px;">
      <h3 id="redTitle">Os nossos Espaços</h3>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>

    <p id="guideRoom">
      Complete as seguintes etapas para efetuar a sua reserva
    </p>

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
              <b style="color: #daaa29">Escolha</b> o espaço que pretende alugar
            </p>
          </div>
          <div class="row">
            <div class="col-sm-4" v-for="r in this.rooms" :key="r.id_espaco">
              <b-card
                :img-src="r.img"
                style="max-width: 20rem; border:0px solid transparent;"
                img-alt="Image"
                img-top
                class="mb-2"
              >
                <button
                  @click="chooseRoom(r.descritivo, r.id_espaco)"
                  id="btnChoose"
                >
                  {{ r.descritivo }}
                </button>
              </b-card>
            </div>
          </div>
        </div>
      </b-tab>
      <!-- TAB DA INFO -->
      <b-tab title="Informação">
        <div class="container">
          <div class="row" id="progressRow">
            <b-progress
              id="progress"
              :value="66"
              variant="warning"
              :striped="striped"
            ></b-progress>
          </div>
          <form action>
            <div class="container" style="margin-bottom:100px">
              <div class="row">
                <div class="col-sm-5">
                  <label for="input1" style="margin-top:50px; float:left"
                    >▶Data</label
                  >
                  <b-form-input
                    style="margin-bottom:50px"
                    v-model="day"
                    type="date"
                    id="input1"
                    required
                  ></b-form-input>
                  <label for="input2" style="float: left"
                    >▶ Tempo de duração</label
                  >
                  <b-form-input
                    v-model="duration"
                    type="number"
                    max="6"
                    min="1"
                    id="input2"
                    placeholder="min:1h; max:6h"
                    required
                  ></b-form-input>
                </div>
                <div class="col-sm-2"></div>
                <div
                  class="col-sm-5"
                  style="margin-top:50px; margin-bottom:50px"
                >
                  <label for="input4" style="float: left">▶Hora</label>
                  <b-form-input
                    v-model="time"
                    type="time"
                    style="margin-bottom:50px"
                    id="input4"
                    required
                  ></b-form-input>
                  <label for="input3" style="float: left"
                    >▶ Motivo da reserva</label
                  >
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
          <div class="row" id="progressRow">
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
                <p id="pDate">▶ Dia: {{ day }}</p>
                <p id="pTime">▶ Hora: {{ time }}h</p>
                <p id="pDuration">▶ Duração: {{ duration }}h</p>
                <p id="pReason">▶ Motivo: {{ reason }}</p>
              </div>
            </div>

            <div class="col-sm-3">
              <p id="room">
                <b>Espaço</b>
              </p>
              <p id="roomSlt">{{ slctRoom }}</p>
            </div>
            <div class="col-sm-3"></div>
          </div>

          <a
            id="confirm"
            class="btn btn-primary"
            @click="rentRooms()"
            role="button"
            >Confirmar</a
          >
          <a id="cancel" class="btn btn-primary" href="/room" role="button"
            >Cancelar</a
          >
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "rentRoom",
  data: () => ({
    id: 0,
    type: "",
    day: "",
    time: "",
    duration: "",
    user: "",
    slctRoom: "",
    rooms: [],
    tabIndex: 1,
    reason: "",
    roomId: ""
  }),
  created() {
    this.getAllRooms();
  },
  computed: {
    ...mapGetters(["getRooms"])
  },
  methods: {
    rentRooms() {
      if (
        this.day == "" ||
        this.time == "" ||
        this.reason == "" ||
        this.duration == "" ||
        this.slctRoom == ""
      ) {
        this.$bvToast.toast("Precisa de preencher todos os campos");
      } else if (this.duration < 1 || this.duration > 6) {
        this.$bvToast.toast("Os campos estão mal preenchidos");
      } else {
        this.addARent();
      }
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
    chooseRoom(room, id) {
      for (let r in this.rooms) {
        if (room === this.rooms[r].descritivo) {
          this.slctRoom = room;
          this.roomId = id;
        }
      }
      this.tabIndex++;
    },
    async getAllRooms() {
      try {
        await this.$store.dispatch("getRooms");
        this.rooms = this.getRooms;
      } catch (err) {
        alert(err);
      }
    },
    async addARent() {
      try {
        await this.$store.dispatch("addRents", {
          id_room: this.roomId,
          date_reserv: Date.now(),
          date_required: this.day,
          duration: this.duration,
          id_user: this.$store.state.loggedUser.user[0].id_utilizador,
          reason: this.reason
        });
        
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
.catering {
  position: relative;
  width: 66.5%;
}

#whiteRect {
  background-color: white;
  margin-top: -35px;
  height: 35px;
  width: 350px;
  position: relative;
  display: block;
  z-index: 6;
}

.back-line {
  background-color: #daaa29;
  margin-top: -25px;
  width: 700px;
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
  margin-top: 15px;
  font-size: 130%;
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

#pDate,
#pTime,
#pDuration,
#pReason,
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

.col-sm-3 {
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
</style>
