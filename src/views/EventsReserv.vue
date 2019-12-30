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
          <p class="guide2">
            Escolha o tipo de Evento que pretende realizar
          </p>
          <b-button id="btn1"><img src="../assets/transferir.jpg" id="img1" alt=""></b-button>
        </b-tab>
        <b-tab title="Informações">
          <p class="when">Data e hora do evento</p>
          <input type="date" name="" id="date">
          <input type="time" id="time">
        </b-tab>
        <b-tab title="Menu">Sibzamini!</b-tab>
        <b-tab title="Componentes">I'm the last tab</b-tab>
        <b-tab title="Extras">I'm the last tab</b-tab>
        <b-tab title="Resumo">I'm the last tab</b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" id="btnPrevious">Anterior</b-button>
        <b-button @click="tabIndex++" id="btnNext">Seguinte</b-button>
      </b-button-group>
    </div>
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

.card-header:first-child{
  background-color: #232323;
}
.tab-content{
  height: 400px;
}
/* Primeira Tab */
#btn1{
  border: 2px solid #232323;
  width: 300px;
  height: 150px;
}
#img1{
  width: 270px;
  height: 120px;
}
.guide2 {
  font-family: GeosansLight;
  text-align: center;
  font-size: 100%;
}
/* Segunda Tab */
.when {
font-family: GeosansLight;
margin-left: -600px;
font-size: 120%;
}
#date{
  margin-left: -150px;
}
#time{
   margin-left: 60px;
   margin-top: 50px;
}

/* Terceira Tab */
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