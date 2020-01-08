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
        <b-tab title="Evento" :title-link-class="'tab-title-class'" active>
          <br />
          <br />
          <p class="guide2">▶ Escolha o tipo de Evento que pretende realizar</p>
          <b-button id="btn1">
            <div id="bar2">
              <h1 id="eventType" class="centered">
                <b>Coffee Break</b>
              </h1>
            </div>
          </b-button>
          <b-button id="btn2">
            <div id="bar2">
              <h1 id="eventType" class="centered">
                <b>Porto de Honra</b>
              </h1>
            </div>
          </b-button>
          <b-button id="btn3">
            <div id="bar2">
              <h1 id="eventType" class="centered">
                <b>Almoço</b>
              </h1>
            </div>
          </b-button>
          <b-button id="btn4">
            <div id="bar2">
              <h1 id="eventType" class="centered">
                <b>Jantar</b>
              </h1>
            </div>
          </b-button>
        </b-tab>
        <b-tab title="Informações">
          <form action>
            <div class="form-group">
              <label for class="dateLabel">▶ Data e hora do evento</label>
              <input type="date" class="form-control" id="txtDate" required v-model="date" />
              <input type="time" class="form-control" id="txtTime" required v-model="time" />
              <label for class="personsLabel">▶ Número de Pessoas</label>
              <input
                type="number"
                class="form-control"
                id="txtPersons"
                required
                placeholder="0"
                v-model="persons"
                min="0"
              />
              <label for class="durationLabel">▶ Tempo de duração</label>
              <input type="time" class="form-control" id="txtDuration" required v-model="duration" />

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
        <b-tab title="Menu">Sibzamini!</b-tab>
        <b-tab title="Componentes">
          <br />
          <p class="guide3">▶ Escolha a farda que pretende que seja usada pelos nossos colaboradores</p>
          <b-button id="btn5"></b-button>
          <b-button id="btn6"></b-button>
          <b-button id="btn7"></b-button>
          <b-button id="btn8"></b-button>
          <p class="guide4">▶ Escolha a decoração que mais gosta para o seu evento</p>
          <b-button id="btn9"></b-button>
          <b-button id="btn10"></b-button>
          <b-button id="btn11"></b-button>
          <p class="guide5">▶ Observações</p>
          <textarea id="textArea" cols="80" rows="3">Escreva aqui...</textarea>
        </b-tab>
        <b-tab title="Extras">
          <br />
          <p class="guide6">▶ Selecione os extras que pretenda</p>
          <b-img id="imgKids" src="../assets/dc6f0020e99c65d6f42b96820d04cbaa.jpg"></b-img>
          <form action>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check1"
                  value="checkedValue"
                  unchecked
                />Música Ambiente
              </label>
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check2"
                  value="checkedValue"
                  unchecked
                />Flores
              </label>
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check3"
                  value="checkedValue"
                  unchecked
                />Babysitting
              </label>
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check4"
                  value="checkedValue"
                  unchecked
                />Música Ambiente
              </label>
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check5"
                  value="checkedValue"
                  unchecked
                />Música Ambiente
              </label>
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name
                  id="check6"
                  value="checkedValue"
                  unchecked
                />Música Ambiente
              </label>
            </div>
          </form>
          <p class="observ">▶ Observações</p>
          <textarea id="textArea2" cols="130" rows="5">Escreva aqui...</textarea>
        </b-tab>
        <b-tab title="Resumo">
          <h3 class="resume2">
            <b>TIPO DE EVENTO ESCOLHIDO</b>
          </h3>
          <hr id="resumeLine2" />
          <p id="inform2">
            <b>Informações</b>
          </p>
          <p id="pDate2">▶ AQUI VAI SER A DATA</p>
          <p id="pTime2">▶ AQUI AS HORAS</p>
          <p id="pDuration2">▶ E A DURAÇÃO</p>
          <p id="pPersons2">▶ NºPESSOAS</p>
          <p id="components2">
            <b>Componentes</b>
          </p>
          <a name id="confirm2" class="btn btn-primary" href="#" role="button">Confirmar</a>
          <a name id="cancel2" class="btn btn-primary" href="#" role="button">Cancelar</a>
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
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 250px;
  top: 50px;
}
/* canto inferior esquerdo */
#btn2 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: -50px;
  top: 250px;
}
/* canto superior direito */
#btn3 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: 50px;
  top: 50px;
}
/* canto inferior direito */
#btn4 {
  border: 2px solid #232323;
  background-image: url("../assets/transferir.jpg");
  width: 300px;
  height: 150px;
  left: -250px;
  top: 250px;
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
  width: 650px;
  height: 2px;
  background-color: #daaa29;
  border: none;
}
#inform2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 360px;
}
#components2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 20px;
  color: black;
  margin-left: 700px;
  margin-top: -180px;
}
#pDate2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 350px;
}
#pTime2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 350px;
}
#pDuration2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 350px;
}
#pPersons2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 12px;
  color: black;
  margin-left: 350px;
}
#confirm2 {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 400px;
  left: 100px;
}
#cancel2 {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  top: 400px;
  left: -100px;
}
/* --------------- */
</style>