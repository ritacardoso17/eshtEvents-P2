<template>
  <div class="eventsReserve">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeft" />
    <h3 id="titule">Eventos e Catering</h3>
    <hr id="lineRight" />

    <p id="guide">Complete as seguintes etapas para efetuar a sua reserva</p>

    <b-card no-body>
      <b-tabs align="center" v-model="tabIndex" small card id="tab">
        <!-- TAB EVENTO -->
        <b-tab title="Evento" :title-link-class="'tab-title-class'" active>
          <b-progress id="progress" :value="16.66" variant="warning" :striped="striped"></b-progress>
          <br />
          <br />
          <p class="guide2">▶ Escolha o tipo de Evento que pretende realizar</p>
          <div class="container">
            <div class="row">
              <div class="col-sm-4" v-for="e in eventType" :key="e">
                <b-button id="btn4" @click="x(e)" value="jantar">
                  <div style="background-color: black;">
                    <h1 id="eventType" class="centered">
                      <b>{{e}}</b>
                    </h1>
                  </div>
                </b-button>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- TAB INFO -->
        <b-tab title="Informações">
          <b-progress id="progress" :value="33.33" variant="warning" :striped="striped"></b-progress>
          <form action>
            <div class="form-group">
              <label for class="dateLabel">▶ Data e hora do evento</label>
              <input type="date" class="form-control" id="txtDate" required v-model="day" />
              <input type="time" class="form-control" id="txtTime" required v-model="time" />
              <label for class="personsLabel">▶ Número de Pessoas</label>
              <input
                type="number"
                class="form-control"
                id="txtPersons"
                required
                placeholder="0"
                min="0"
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
                required
                v-model="duration"
              />

              <label for class="locationLabel">▶ Localização</label>
              <select id="sltLocation" v-model="location">
                <option value="esht">ESHT</option>
                <option value="esmad">ESMAD</option>
                <option value="isep">ISEP</option>
                <option value="iscap">ISCAP</option>
                <option value="ese">ESE</option>
                <option value="esmae">ESMAE</option>
                <option value="ess">ESS</option>
              </select>
            </div>
          </form>
          <b-img id="waiter" src="../assets/noun_Waiter_1306700.png"></b-img>
        </b-tab>
        <!-- TAB MENU -->
        <b-tab class="container" style="padding-left:100px; padding-top:80px;" title="Menu">
          <b-progress id="progress" :value="49.66" variant="warning" :striped="striped"></b-progress>
          <div class="row">
            <div class="col-sm-3" v-for="menu in menuType" :key="menu.id">
              <b-card
                id="cardMenu"
                :title="menu.name"
                :img-src="menu.img"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 10rem;"
                class="mb-5 border-0"
              >
                <b-button v-b-modal="menu.id" @click="chooseMenu(menu.name)" id="cardBtn">Escolher</b-button>
                <div></div>
              </b-card>
            </div>
          </div>
        </b-tab>
        <!-- TAB COMPONENTES -->
        <b-tab title="Componentes">
          <b-progress id="progress" :value="65.99" variant="warning" :striped="striped"></b-progress>
          <br />
          <div class="container">
            <p
              class="guide3"
            >▶ Escolha a farda que pretende que seja usada pelos nossos colaboradores</p>
            <b-button v-for="u in this.uniforms" :key="u.id" id="btn5" @click="uni(u)">{{u.name}}</b-button>
          </div>

          <div class="container">
            <p class="guide4">▶ Escolha a decoração que mais gosta para o seu evento</p>
            <b-button
              v-for="d in this.decorations"
              :key="d.id"
              id="btn9"
              @click="decor(d.name)"
            >{{d.name}}</b-button>
          </div>
        </b-tab>
        <!-- TAB EXTRAS -->
        <b-tab title="Extras">
          <b-progress id="progress" :value="82.33" variant="warning" :striped="striped"></b-progress>
          <br />
          <p class="guide6">▶ Selecione os extras que pretenda</p>
          <b-img id="imgKids" src="../assets/dc6f0020e99c65d6f42b96820d04cbaa.jpg"></b-img>
          <form action>
            <div class="form-check" v-for="i in this.extras" :key="i.id">
              <input
                type="checkbox"
                class="form-check-input"
                name
                id="check6"
                :value="i.name"
                unchecked
                v-model="extra_reserv"
              />
              {{i.name}}
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
          <b-progress id="progress" :value="100" variant="warning" :striped="striped"></b-progress>
          <h3 class="resume2">
            <b>{{title}}</b>
          </h3>
          <hr id="resumeLine2" />

          <div class="container">
            <div class="row">
              <div class="col-sm-4"></div>

              <div class="col-sm-4"></div>

              <div class="col-sm-4"></div>
            </div>
          </div>
          <p id="inform2">
            <b>Informações</b>
          </p>
          <p id="pDate2">▶ Dia: {{day}}</p>
          <p id="pTime2">▶ Hora: {{time}}h</p>
          <p id="pDuration2">▶ Duração: {{duration}}h</p>
          <p id="pPersons2">▶ Lugares: {{persons}}</p>
          <p id="pLocation">▶ Local: {{location}}</p>
          <p id="components2">
            <b>Componentes</b>
            {{slctDecor}}
            {{slctUniform}}
          </p>
          <p id="menu2">
            <b>Menu</b>
          </p>
          <p id="choiseMenu2">▶ {{slctMenu}}</p>
          <p id="addMenu2">▶ COMPLEMENTOS ADICIONADOS:</p>
          <p id="observ2">
            <b>Observações</b>
          </p>
          <p id="observMade2">
            ▶ {{obsDecor}}
            <br />
          </p>
          <p id="extras2">
            <b>Extras</b>
          </p>
          <div v-for="extra in this.extra_reserv" :key="extra">
            <p>{{extra}}</p>
          </div>

          <a
            name
            id="confirm2"
            class="btn btn-primary"
            href="/events"
            role="button"
            @click="eventsReserv()"
          >Confirmar</a>
          <a name id="cancel2" class="btn btn-primary" href="/events" role="button">Cancelar</a>
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <!-- <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" id="btnPrevious">Anterior</b-button>
        <b-button @click="tabIndex++" id="btnNext">Seguinte</b-button>
      </b-button-group>
    </div>-->
  </div>
</template>

<script>
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
      location: "",
      slctDecor: "",
      slctMenu: "",
      decoration: [],
      uniforms: [],
      slctUniform: "",
      place: "",
      obsUniform: "",
      obsDecor: "",
      extra_reserv: [],
      eventType: [],
      extras: [],
      user: "",
      curMenu: "",
      state: "Pendente",
      tabIndex: 1,
      title: "",
      menus: []
    };
  },
  created() {
    window.addEventListener("unload", this.saveStorage);
    localStorage.setItem("extras", JSON.stringify(this.$store.state.extras));

    if (localStorage.getItem("foodMenus")) {
      this.menus = JSON.parse(localStorage.getItem("foodMenus"));
    }
    localStorage.setItem(
      "eventType",
      JSON.stringify(this.$store.state.eventType)
    );
    if (localStorage.getItem("eventType")) {
      this.eventType = JSON.parse(localStorage.getItem("eventType"));
    }
    localStorage.setItem(
      "eventType",
      JSON.stringify(this.$store.state.eventType)
    );
    if (localStorage.getItem("eventType")) {
      this.eventType = JSON.parse(localStorage.getItem("eventType"));
    }
    localStorage.setItem(
      "uniforms",
      JSON.stringify(this.$store.state.uniforms)
    );
    if (localStorage.getItem("uniforms")) {
      this.uniforms = JSON.parse(localStorage.getItem("uniforms"));
    }
    localStorage.setItem(
      "decorations",
      JSON.stringify(this.$store.state.decorations)
    );
    if (localStorage.getItem("decorations")) {
      this.decorations = JSON.parse(localStorage.getItem("decorations"));
    }
    if (localStorage.getItem("extras")) {
      this.extras = JSON.parse(localStorage.getItem("extras"));
    }
    if (localStorage.getItem("reservations")) {
      this.$store.state.reservations = JSON.parse(
        localStorage.getItem("reservations")
      );
      this.reservations = this.$store.state.reservations;
    }
  },

  methods: {
    x(event) {
      for (let e in this.eventType) {
        if (event === this.eventType[e]) {
          this.title = event;
          this.filter = event;
        }
      }
    },
    uni(uni) {
      for (let u in this.uniforms) {
        if (uni.name === this.uniforms[u].name) {
          this.slctUniform = uni.name;
        }
      }
    },
    decor(decor) {
      for (let d in this.decorations) {
        if (decor === this.decorations[d].name) {
          this.slctDecor = decor;
        }
      }
    },
    chooseMenu(menu) {
      for (let m in this.menus) {
        if (menu === this.menus[m].name) {
          this.slctMenu = menu;
        }
      }
    },
    getLastIdEvents() {
      return this.$store.getters.getLastIdEvents;
    },
    getLoggedUserEmail() {
      return this.$store.getters.getLoggedUserEmail;
    },
    eventsReserv() {
      this.$store.commit("ADD_RESERVATION", {
        id: this.getLastIdEvents() + 1,
        day: this.day,
        time: this.time,
        people: this.persons,
        duration: this.duration,
        place: this.location,
        obs: this.obsDecor,
        decor: this.slctDecor,
        extra: this.extra_reserv,
        userName: this.$store.state.loggedUser[0].name,
        userMail: this.getLoggedUserEmail(),
        state: "Pendente",
        eventType: this.title,
        menu: this.slctMenu,
        uniform: this.slctUniform
      });
      alert("adicionei reserva de evento");
    },
    saveStorage() {
      localStorage.setItem(
        "reservations",
        JSON.stringify(this.$store.state.reservations)
      );
    }
  },
  computed: {
    menuType() {
      return this.menus.filter(menu => {
        let menuTypeResult = true;
        if (this.title !== "") {
          menuTypeResult = menu.type.includes(this.filter);
          // alert(this.menuTypeResult);
        }
        return menuTypeResult;
      });
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
}

#lineLeft {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 290px;
}

#lineRight {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 290px;
}

#titule {
  margin-top: -4%;
  font-family: Channel;
  color: black;
}

#guide {
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

.tab-content {
  height: 650px;
}

/* EVENTO TAB */
/* canto superior esquerdo */
#btn1 {
  border: 2px solid #232323;
  width: 200px;
  left: 250px;
  top: 50px;
}

/* canto inferior esquerdo */
#btn2 {
  border: 2px solid #232323;
  width: 300px;
  height: 150px;
  left: -50px;
  top: 250px;
}

/* canto superior direito */
#btn3 {
  border: 2px solid #232323;
  width: 300px;
  height: 150px;
  left: 50px;
  top: 50px;
}

/* canto inferior direito */
#btn4 {
  border: 2px solid #daaa29;
  background-color: black;
  width: 200px;
  margin: 10px;
}

.guide2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  position: absolute;
  left: 280px;
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
  left: 280px;
  top: 100px;
  font-size: 110%;
  position: absolute;
}

#txtDate {
  width: 250px;
  position: absolute;
  top: 150px;
  left: 280px;
}

#txtTime {
  width: 250px;
  position: absolute;
  top: 250px;
  left: 280px;
}

.personsLabel {
  font-family: GeosansLight;
  left: 750px;
  top: 100px;
  font-size: 110%;
  position: absolute;
}

#txtPersons {
  width: 250px;
  position: absolute;
  top: 150px;
  left: 750px;
}

.durationLabel {
  font-family: GeosansLight;
  top: 260px;
  left: 750px;
  font-size: 110%;
  position: absolute;
}

#txtDuration {
  width: 250px;
  position: absolute;
  top: 310px;
  left: 750px;
}

.locationLabel {
  font-family: GeosansLight;
  top: 420px;
  left: 750px;
  font-size: 110%;
  position: absolute;
}

#sltLocation {
  width: 250px;
  position: absolute;
  top: 480px;
  left: 750px;
}

#waiter {
  position: absolute;
  left: -65px;
  top: 300px;
}

/* MENUS TAB */
/* COMPONENTES TAB */
#btn5 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 200px;
  top: 50px;
}

#btn6 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 250px;
  top: 50px;
}

#btn7 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 300px;
  top: 50px;
}

#btn8 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 350px;
  top: 50px;
}

.guide3 {
  position: absolute;
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  left: 250px;
}

.guide4 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 110%;
  position: absolute;
  left: 250px;
  top: 320px;
}

#btn9 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: -400px;
  top: 270px;
}

#btn10 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: -320px;
  top: 270px;
}

#btn11 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: -250px;
  top: 270px;
}

.guide5 {
  font-family: GeosansLight;
  text-align: justify;
  position: absolute;
  font-size: 110%;
  left: 250px;
  top: 530px;
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
  left: 250px;
  top: 100px;
}

#imgKids {
  position: absolute;
  width: 300px;
  height: auto;
  left: 250px;
  top: 150px;
}

.observ {
  font-family: GeosansLight;
  text-align: justify;
  position: absolute;
  font-size: 110%;
  left: 250px;
  top: 420px;
}

#textArea2 {
  color: grey;
  font-family: GeosansLight;
  position: absolute;
  left: 250px;
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
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 320px;
}

#pDate2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
}

#pTime2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
}

#pDuration2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
}

#pPersons2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
}

#pLocation {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
}

#components2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 770px;
  margin-top: -180px;
}

#menu2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 320px;
  top: 350px;
}

#choiseMenu2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
  top: 400px;
}

#addMenu2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
  top: 420px;
  width: 300px;
}

#observ2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 320px;
  top: 500px;
}

#observMade2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 300px;
  top: 550px;
  width: 600px;
}

#extras2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 770px;
  top: 350px;
}

#choiseExtras2 {
  font-family: GeosansLight;
  position: absolute;
  text-align: justify;
  font-size: 13px;
  color: black;
  margin-left: 770px;
  top: 400px;
  width: 40px;
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
  top: 440px;
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
  top: 440px;
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