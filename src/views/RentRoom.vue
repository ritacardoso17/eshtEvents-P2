<template>
  <div class="rentRoom">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeft" />
    <h3 id="titule">Os nossos Espaços</h3>
    <hr id="lineRight" />

    <b-card no-body>
      <b-tabs align="center" v-model="tabIndex" small card id="tab1">
        <b-tab title="Espaço" :title-link-class="'tab-title-class'" active>
          <br />
          <p class="guide7">▶ Escolha o espaço que pretende alugar</p>
          <b-button id="cozinha" name="cozinha" v-if="roomType"></b-button>
          <b-button id="bar" name="bar"></b-button>
          <b-button id="restaurante" name="restaurante"></b-button>
          <b-button id="butn4" name="butn4" disabled></b-button>
        </b-tab>
        <b-tab title="Informação">
          <p class="guide8">▶ Data e hora para o aluguer</p>
          <b-form-input v-model="text" type="date" id="rentDate"></b-form-input>
          <b-form-input v-model="text" type="time" id="rentTime"></b-form-input>
          <p class="guide9">▶ Tempo de duração</p>
          <b-form-input v-model="text" type="time" id="rentDuration"></b-form-input>
        </b-tab>
        <b-tab title="Resumo">
          <h3 class="resume">
            <b>Resumo</b>
          </h3>
          <hr id="resumeLine" />
          <p id="inform">
            <b>Informações</b>
          </p>
          <p id="pDate">▶ AQUI VAI SER A DATA</p>
          <p id="pTime">▶ AQUI AS HORAS</p>
          <p id="pDuration">▶ E A DURAÇÃO</p>
          <p id="room">
            <b>Espaço</b>
          </p>
          <a name id="confirm" class="btn btn-primary" href="#" role="button">Confirmar</a>
          <a name id="cancel" class="btn btn-primary" href="#" role="button">Cancelar</a>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default{
  name: "rentRoom",
  data: () => ({
    type: "",
    day: "",
    time: "",
    duration: "",
  }),
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    },
    getTypeById(type) {
      return this.rooms.filter(room => room.type === type)[0].name;
    }
  },
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("rooms")) {
      this.$store.state.rooms = JSON.parse(localStorage.getItem("rooms"));
    }
  }
}
</script>

<style>
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
#cozinha {
  border: 2px solid #232323;
  background-image: url("../assets/cozinha.jpg");
  width: 190px;
  height: 130px;
  left: -15px;
  top: 0px;
}

#bar {
  border: 2px solid #232323;
  background-image: url("../assets/cozinha.jpg");
  width: 190px;
  height: 130px;
  left: 425px;
  top: 370px;
}
#restaurante {
  border: 2px solid #232323;
  background-image: url("../assets/cozinha.jpg");
  width: 190px;
  height: 130px;
  left: 190px;
  top: 0px;
}
#butn4 {
  border: 2px solid #232323;
  background-image: url("../assets/cozinha.jpg");
  width: 190px;
  height: 130px;
  left: 0px;
  top: 155px;
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
  margin-top: 15px;
  margin-left: 880px;
  font-size: 110%;
}
input#rentDate.form-control {
  position: relative;
  width: 200px;
}
#rentTime {
  margin-top: 10px;
  width: 200px;
}
#rentDuration {
  width: 200px;
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