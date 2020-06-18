<template>
  <div class="eventsReserve">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeft" />
    <h3 id="title">Eventos e Catering</h3>
    <hr id="lineRight" />

    <p id="guide">Complete as seguintes etapas para efetuar a sua reserva</p>

    <b-card no-body>
      <b-tabs align="center" v-model="tabIndex" small card id="tab">
        <!-- TAB EVENTO -->
        <b-tab title="Evento" :title-link-class="'tab-title-class'" active>
          <b-progress
            id="progress"
            :value="16.66"
            variant="warning"
            :striped="striped"
          ></b-progress>
          <br />
          <br />
          <p class="guide2">
            ▶
            <b style="color: #daaa29; font-size: 130% ">Escolha</b> o tipo de
            Evento que pretende realizar
          </p>
          <br />
          <div class="container">
            <div class="row" v-for="e in eventType" :key="e.id_tipo_reserva">
              <div class="col-sm-4" v-if="e !== 'Todos'">
                <b-button id="btn4" @click="getMenuByType(e.id_tipo_reserva)">
                  <div style="background-color: black;">
                    <h1 id="eventType" class="centered">
                      <b>{{ e.descritivo }}</b>
                    </h1>
                  </div>
                </b-button>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- TAB INFO -->
        <b-tab title="Informações">
          <b-progress
            id="progress"
            :value="33.33"
            variant="warning"
            :striped="striped"
          ></b-progress>
          <form action>
            <div class="form-group">
              <label for class="dateLabel">▶ Data e hora do evento</label>
              <input
                type="date"
                class="form-control"
                id="txtDate"
                v-model="day"
              />
              <input
                type="time"
                class="form-control"
                id="txtTime"
                v-model="time"
              />
              <label for class="personsLabel">▶ Número de Pessoas</label>
              <input
                type="number"
                class="form-control"
                id="txtPersons"
                placeholder="0"
                min="1"
                max="100"
                v-model="persons"
              />
              <label for class="durationLabel">▶ Tempo de duração</label>
              <input
                type="number"
                max="12"
                min="1"
                class="form-control"
                id="txtDuration"
                v-model="duration"
              />

              <label for="sltLocation" class="locationLabel"
                >▶ Localização</label
              >
              <select id="sltLocation" v-model="location">
                <option v-for="l in schools" :value="l" :key="l.id_ipp">{{
                  l.nome
                }}</option>
              </select>
            </div>
          </form>
          <b-img id="waiter" src="../assets/noun_Waiter_1306700.png"></b-img>
        </b-tab>
        <!-- TAB MENU -->
        <b-tab id="second" title="Menu">
          <div class="container">
            <div v-if="menus.length !== 0">
              <b-progress
                id="progress"
                :value="49.66"
                variant="warning"
                :striped="striped"
              ></b-progress>
              <div class="row">
                <div class="col-sm-3" v-for="menu in this.menus" :key="menu.id">
                  <b-card
                    id="cardMenu"
                    :title="menu.name"
                    :img-src="menu.img"
                    img-alt="Image"
                    img-top
                    tag="article"
                    img-height="100px"
                    style="max-width: 10rem; margin-top: 20px"
                    class="mb-5 border-0"
                  >
                    <b-button
                      v-b-modal="menu.id"
                      @click="chooseMenu(menu.name, menu.id)"
                      id="cardBtn"
                      >Escolher</b-button
                    >
                    <div></div>
                  </b-card>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="noEvent">
                Selecione primeiro o tipo de evento que pretende realizar
              </p>
            </div>
          </div>
        </b-tab>
        <!-- TAB COMPONENTES -->
        <b-tab title="Componentes">
          <b-progress
            id="progress"
            :value="65.99"
            variant="warning"
            :striped="striped"
          ></b-progress>
          <br />

          <div class="container">
            <p class="guide3">
              ▶
              <b style="color: #daaa29; font-size: 130% ">Escolha</b> a farda
              que pretende que seja usada pelos nossos colaboradores
            </p>
            <br />
            <b-button
              v-for="u in this.uniforms"
              :key="u.id_uniform"
              id="btn5"
              @click="uni(u)"
            >
              <b-img :src="u.img" style="width:150px"></b-img>
              <p>{{ u.descritivo }}</p>
            </b-button>
          </div>

          <div class="container">
            <br />
            <p class="guide4">
              ▶
              <b style="color: #daaa29; font-size: 130% ">Escolha</b> a
              decoração que mais gosta para o seu evento
            </p>
            <b-button
              v-for="d in this.decorations"
              :key="d.id_decoracao"
              id="btn9"
              @click="decor(d)"
            >
              <b-img :src="d.img" style="width:200px"></b-img>
              <p>{{ d.descritivo }}</p>
            </b-button>
          </div>
        </b-tab>
        <!-- TAB EXTRAS -->
        <b-tab title="Extras">
          <b-progress
            id="progress"
            :value="82.33"
            variant="warning"
            :striped="striped"
          ></b-progress>
          <br />
          <p class="guide6">
            ▶
            <b style="color: #daaa29; font-size: 130% ">Selecione</b> os extras
            que pretenda
          </p>
          <b-img
            id="imgKids"
            src="../assets/dc6f0020e99c65d6f42b96820d04cbaa.jpg"
          ></b-img>
          <form action>
            <div class="form-check" v-for="i in this.extras" :key="i.id_extra">
              <b-button @click="extraChoose(i)">{{ i.descritivo }}</b-button>
            </div>
          </form>
          <p class="observ">▶ Observações</p>
          <textarea
            id="textArea2"
            cols="130"
            rows="5"
            placeholder="Escreva aqui..."
            v-model="obsDecor"
          ></textarea>
        </b-tab>
        <!-- TAB RESUMO -->
        <b-tab title="Resumo">
          <h3 class="resume2">
            <b>{{ title }}</b>
          </h3>
          <hr id="resumeLine2" />

          <div class="container">
            <div class="row">
              <div
                class="col"
                align="left"
                style="margin-left: 300px; font-family: GeosansLight"
              >
                <p id="inform2">
                  <b>Informações</b>
                </p>
                <p id="pDate2">Dia: {{ day }}</p>
                <p id="pTime2">Hora: {{ time }}h</p>
                <p id="pDuration2">Duração: {{ duration }}h</p>
                <p id="pPersons2">Lugares: {{ persons }}</p>
                <p id="pLocation">Local: {{ location.nome }}</p>
              </div>

              <div
                class="col"
                align="left"
                style="margin-right: 50px; font-family: GeosansLight"
              >
                <p id="components2">
                  <b>Componentes</b>
                  <br />
                </p>
                <p>
                  {{ slctDecor }}
                  <br />
                  {{ slctUniform }}
                </p>
              </div>
            </div>
            <div class="row">
              <div
                class="col"
                align="left"
                style="margin-left: 300px; font-family: GeosansLight"
              >
                <p id="menu2">
                  <b>Menu</b>
                </p>
                <p id="choiceMenu2">{{ slctMenu }}</p>
              </div>
              <div
                class="col"
                align="left"
                style="margin-right: 50px; font-family: GeosansLight"
              >
                <p id="extras2">
                  <b>Extras</b>
                </p>
                <div>
                  <p>{{ extraName }}</p>
                </div>
                <p id="observ2">
                  <b>Observações</b>
                </p>
                <p id="observMade2">
                  {{ obsDecor }}
                  <br />
                </p>
              </div>
            </div>
          </div>

          <a
            name
            id="confirm2"
            class="btn btn-primary"
            role="button"
            @click="addReservation()"
            >Confirmar</a
          >
          <a
            name
            id="cancel2"
            class="btn btn-primary"
            href="/events"
            role="button"
            >Cancelar</a
          >
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      reservations: [],
      id: 0,
      type: "",
      day: "",
      time: "",
      people: "",
      duration: "",
      location: [],
      schools: [],
      slctDecor: "",
      slctMenu: "",
      decoration: [],
      uniforms: [],
      slctUniform: "",
      place: "",
      obsUniform: "",
      obsDecor: "",
      extra_reserv: "",
      eventType: [],
      extras: [],
      user: "",
      curMenu: "",
      state: "Pendente",
      tabIndex: 1,
      title: "",
      menus: [],
      persons: "",
      id_evenType: "",
      id_menu: "",
      id_extra: "",
      extraName: "",
      id_decor: "",
      id_uniforme:""
    };
  },
  created() {
    this.getAllEventTypes();
    // this.getAllComponents();
    this.getAllUniforms();
    this.getAllDecorations();
    this.getAllExtras();
    this.getAllSchools();
  },

  methods: {
    async getMenuByType(id) {
      try {
        await this.$store.dispatch("getEventypesId", { id: id });
        this.menus = this.getEventypesId;
        this.id_evenType = id;
        this.tabIndex++;
      } catch (err) {
        alert(err);
      }
    },
    uni(uni) {
      this.slctUniform = uni.descritivo;
      this.id_uniforme = uni.id_farda
      if (this.slctDecor != "" && this.slctUniform != "") {
        this.tabIndex++;
      }
    },
    decor(decor) {
      this.slctDecor = decor.descritivo;
      this.id_decor = decor.id_decoracao;
      if (this.slctDecor != "" && this.slctUniform != "") {
        this.tabIndex++;
      }
    },
    extraChoose(extra) {
      this.id_extra = extra.id_extra;
      this.extraName = extra.descritivo;
    },
    chooseMenu(name, id) {
      this.slctMenu = name;
      this.id_menu = id;
      this.tabIndex++;
    },
    getLastIdEvents() {
      return this.$store.getters.getLastIdEvents;
    },
    getLoggedUserId() {
      return this.$store.getters.getLoggedUserId;
    },
    eventsReserv() {
      if (
        this.day == "" ||
        this.time == "" ||
        this.persons == "" ||
        this.duration == "" ||
        this.location == "" ||
        this.slctMenu == ""
      ) {
        this.$bvToast.toast("Precisa de preencher todos os campos");
      } else {
        this.addReservation();
      }
    },
    async getAllEventTypes() {
      try {
        await this.$store.dispatch("getEvenTypes");
        this.eventType = this.getEvenTypes;
      } catch (err) {
        alert(err);
      }
    },
    // async getAllComponents() {
    //   try {
    //     await this.$store.dispatch("getComponentsMenus");
    //     this.components = this.getComponentsMenus;
    //   } catch (err) {
    //     alert(err);
    //   }
    // },
    async getAllUniforms() {
      try {
        await this.$store.dispatch("getUniforms");
        this.uniforms = this.getUniforms;
      } catch (err) {
        alert(err);
      }
    },
    async getAllDecorations() {
      try {
        await this.$store.dispatch("getDecorations");
        this.decorations = this.getDecorations;
      } catch (err) {
        alert(err);
      }
    },
    async getAllExtras() {
      try {
        await this.$store.dispatch("getExtras");
        this.extras = this.getExtras;
      } catch (err) {
        alert(err);
      }
    },
    async getAllSchools() {
      try {
        await this.$store.dispatch("getSchools");
        this.schools = this.getSchools;
      } catch (err) {
        alert(err);
      }
    },
    async addReservation() {
      try {
        await this.$store.dispatch("addReservations", {
          id_extra: this.id_extra,
          n_people: this.persons,
          dateTime_reserv: Date.now(),
          dateTime_event: this.day + " " + this.time,
          id_uniform: this.id_uniforme,
          id_evenType: this.id_evenType,
          id_menu: this.id_menu,
          id_local: this.location.id_ipp,
          id_decoration: this.id_decor,
          obs: this.obsDecor
        });
      } catch (err) {
        alert(err);
      }
    },
    saveStorage() {
      localStorage.setItem(
        "reservations",
        JSON.stringify(this.$store.state.reservations)
      );
    }
  },
  computed: {
    ...mapGetters(["getEvenTypes"]),
    ...mapGetters(["getMenus"]),

    ...mapGetters(["getUniforms"]),
    ...mapGetters(["getDecorations"]),
    ...mapGetters(["getExtras"]),
    ...mapGetters(["getSchools"]),
    ...mapGetters(["getEventypesId"])
  }
};
</script>

<style>
.catering {
  position: relative;
  width: 66.5%;
}

#progress {
  width: 400px;
  margin: auto;
  height: 8px;
}

#lineLeft {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 30%;
}

#lineRight {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 30%;
}

#title {
  margin-top: -2%;
  font-family: Channel;
  color: black;
}

#guide {
  font-family: GeosansLight;
  text-align: center;
  font-size: 150%;
}
#cardBtn {
  background-color: black;
  font-family: GeosansLight;
  height: 35px;
}
#cardBtn:hover {
  border: 2px solid #daaa29;
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

.tab-content {
  height: 650px;
}

/* EVENTO TAB */
#btn4 {
  border: 2px solid black;
  background-color: black;
  width: 200px;
  margin: 10px;
  margin-left: 450px;
  margin-top: 20px;
}
#btn4:hover {
  border: 3px solid #daaa29;
}

.guide2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  position: absolute;
  left: 30vw;
  top: 100px;
}

#bar2 {
  position: absolute;
  opacity: 0.8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 30px;
  background-color: black;
}

#eventType {
  font-size: 20px;
  color: white;
  font-family: Champagne;
}

/* INFO TAB*/
.dateLabel {
  font-family: GeosansLight;
  left: 34%;
  top: 100px;
  font-size: 110%;
  position: absolute;
}

#txtDate {
  width: 250px;
  position: absolute;
  top: 150px;
  left: 34%;
}

#txtTime {
  width: 250px;
  position: absolute;
  top: 250px;
  left: 34%;
}

.personsLabel {
  font-family: GeosansLight;
  left: 55%;
  top: 100px;
  font-size: 110%;
  position: absolute;
}

#txtPersons {
  width: 250px;
  position: absolute;
  top: 150px;
  left: 55%;
}

.durationLabel {
  font-family: GeosansLight;
  top: 260px;
  left: 55%;
  font-size: 110%;
  position: absolute;
}

#txtDuration {
  width: 250px;
  position: absolute;
  top: 310px;
  left: 55%;
}

.locationLabel {
  font-family: GeosansLight;
  top: 420px;
  left: 55%;
  font-size: 110%;
  position: absolute;
}

#sltLocation {
  width: 250px;
  position: absolute;
  top: 480px;
  left: 55%;
}

#waiter {
  position: absolute;
  width: 505px;
  height: auto;
  left: -65px;
  top: 300px;
}

/* MENUS TAB */
.noEvent {
  font-family: GeosansLight;
  font-size: 25px;
  margin-top: 2%;
}

/* COMPONENTES TAB */
#btn5 {
  border: 0px solid #232323;
  background-color: transparent;
  color: #000;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  font-family: GeosansLight;
}
#btn5:hover {
  transform: scale(1.1);
}
.guide3 {
  position: absolute;
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  left: 29%;
}

.guide4 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  position: absolute;
  left: 29%;
  top: 420px;
}

#btn9 {
  border: 0px solid #232323;
  background-color: transparent;
  color: #000;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  font-family: GeosansLight;
}
#btn9:hover {
  transform: scale(1.1);
}

#textArea {
  color: grey;
  font-family: GeosansLight;
  position: absolute;
  left: 250px;
  top: 580px;
}

/* EXTRA TAB */
.guide6 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 110%;
  left: 30%;
  top: 100px;
}

#imgKids {
  position: absolute;
  width: 300px;
  height: auto;
  left: 30%;
  top: 150px;
}
.form-check {
  position: relative;
  text-align: justify;
  display: block;
  padding-left: 700px;
  padding-top: 10px;
  left: 20%;
  top: 55px;
}

.observ {
  font-family: GeosansLight;
  text-align: justify;
  position: absolute;
  font-size: 110%;
  left: 30%;
  top: 420px;
}

#textArea2 {
  color: grey;
  font-family: GeosansLight;
  position: absolute;
  left: 30%;
  top: 480px;
}

/* RESUMO TAB */
.resume2 {
  font-family: GeosansLight;
  color: black;
  margin-top: 20px;
}

#resumeLine2 {
  width: 800px;
  height: 2px;
  background-color: #daaa29;
  border: none;
}

#inform2 {
  font-size: 20px;
  color: black;
}
#components2 {
  font-size: 20px;
  color: black;
}

#menu2 {
  font-size: 20px;
  color: black;
  margin-top: 40px;
}
#extras2 {
  font-size: 20px;
  color: black;
  margin-top: -120px;
}

#observ2 {
  font-size: 20px;
  color: black;
  top: 500px;
}

#observMade2 {
  font-size: 12px;
  color: black;
  top: 550px;
}

#confirm2 {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  border: 2px solid black;
  top: 60px;
  left: 100px;
}

#confirm2:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

#cancel2 {
  position: relative;
  width: 90px;
  font-size: 12px;
  border: 2px solid black;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 60px;
  left: -100px;
}

#cancel2:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

#cardMenu {
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
}

/* --------------- */
</style>
