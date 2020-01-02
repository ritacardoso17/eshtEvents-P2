<template>
  <div class="eventsReserve">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <hr id="lineLeft" />
    <h3 id="titule">Eventos e Catering</h3>
    <hr id="lineRight" />

    <p id="guide">Complete as seguintes etapas para efetuar a sua reserva</p>

    <b-card no-body>
      <b-tabs align="center" v-model="tabIndex" small card id="tab">
        <b-tab title="Evento" :title-link-class="'tab-title-class'" active>
          <br />
          <br />
          <p class="guide2">Escolha o tipo de Evento que pretende realizar</p>
          <b-button id="btn1"></b-button>
          <b-button id="btn2"></b-button>
          <b-button id="btn3"></b-button>
          <b-button id="btn4"></b-button>
        </b-tab>
        <b-tab title="Informações">
          <p class="when">Data e hora do evento</p>
          <input type="date" name id="date" />
          <input type="time" id="time" />
        </b-tab>
        <b-tab title="Menu">Sibzamini!</b-tab>
        <b-tab title="Componentes">
          <br />
          <p class="guide3">Escolha a farda que pretende que seja usada pelos nossos colaboradores</p>
          <b-button id="btn5"></b-button>
          <b-button id="btn6"></b-button>
          <b-button id="btn7"></b-button>
          <b-button id="btn8"></b-button>
          <p class="guide4">Escolha a decoração que mais gosta para o seu evento</p>
          <b-button id="btn9"></b-button>
          <b-button id="btn10"></b-button>
          <b-button id="btn11"></b-button>
          <p class="guide5">Observações</p>
          <textarea id="textArea" cols="80" rows="3">Escreva aqui...</textarea>
        </b-tab>
        <b-tab title="Extras">
          <br>
          <p class="guide6">Selecione os extras que pretenda</p>
          <b-img id="imgKids" src="../assets/dc6f0020e99c65d6f42b96820d04cbaa.jpg"></b-img>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check1" value="checkedValue" unchecked>Música Ambiente
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check2" value="checkedValue" unchecked>Flores
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check3" value="checkedValue" unchecked>Babysitting
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check4" value="checkedValue" unchecked>Música Ambiente
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check5" value="checkedValue" unchecked>Música Ambiente
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="check6" value="checkedValue" unchecked>Música Ambiente
            </label>
          </div>
        </b-tab>
        

        <b-tab title="Resumo">I'm the last tab</b-tab>
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
  data() {
    return {
      tabIndex: 1
    };
  }
};
</script>

<style>
#guide {
  font-family: GeosansLight;
  text-align: center;
  font-size: 150%;
}
.nav-link {
  color: white !important;
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
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 250px;
  top: 200px;
}
/* canto inferior esquerdo */
#btn2 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 250px;
  top: 400px;
}
/* canto superior direito */
#btn3 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 700px;
  top: 200px;
}
/* canto inferior direito */
#btn4 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 700px;
  top: 400px;
}
.guide2 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 110%;
}
/* INFO TAB*/
.when {
  font-family: GeosansLight;
  margin-left: -600px;
  font-size: 120%;
}
#date {
  margin-left: -150px;
}
#time {
  margin-left: 60px;
  margin-top: 50px;
}

/* MENUS TAB */
/* COMPONENTES TAB */
#btn5 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 250px;
  top: 150px;
}
#btn6 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 450px;
  top: 150px;
}
#btn7 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 650px;
  top: 150px;
}
#btn8 {
  border: 2px solid #232323;
  background-image: url("../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg");
  width: 150px;
  height: 150px;
  left: 850px;
  top: 150px;
}
.guide3 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 110%;
}
.guide4 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 110%;
  margin-top: 210px;
}
#btn9 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: 280px;
  top: 390px;
}
#btn10 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: 530px;
  top: 390px;
}
#btn11 {
  border: 2px solid #232323;
  background-image: url("../assets/imgInicial.jpg");
  width: 190px;
  height: 130px;
  left: 780px;
  top: 390px;
}
.guide5 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 110%;
  margin-top: 190px;
}
#textArea {
  color: grey;
  font-family: GeosansLight;
}
/* EXTRA TAB */
.guide6 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 110%;
}
#imgKids{
  width: 300px;
  height: auto;
  margin-left: -700px;
  margin-top: 20px;
}
/* --------------- */
#btnPrevious {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  bottom: -70px;
  left: 150px;
  background-color: #232323;
  font-family: GeosansLight;
}
#btnPrevious:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#btnNext {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  /* bottom: -70px;
  left: 150px; */
  background-color: #232323;
  font-family: GeosansLight;
}
#btnNext:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
</style>