<template>
  <div class="about">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />

    <h3 id="title">
      <hr id="lineLeftW" />Sobre Nós
      <hr id="lineRightW" />
    </h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <p id="whatIs">
            O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas.
            Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.
          </p>
          <p id="whereIs">
            Escola Superior de Hotelaria e Turismo
            <br />Rua D. Sancho I, n.º 981
            <br />4480-876 Vila do Conde Portugal
            <br />T. +351 252 291 700
            <br />E. geral@esht.ipp.pt
          </p>
          <br />
          <br />
          <api />
          <br />
          <br />
        </div>
        <div class="col-sm-4">
          <b-img src="../assets/bandeja.preto.png" class="bandeja2"></b-img>
          <b-img src="../assets/eshtEvents.dourado.png" class="douradoLogo2" />

          <div id="subTitle2">
            <h5>Eventos & Catering</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/components/api.vue";

export default {
  name: "Api",
  components: {
    api
  }
};
</script>

<style>
.catering {
  position: relative;
  /* width: 1263px; */
  width: 66.5%;
}
#lineLeftW {
  position: absolute;
  background-color: #daaa29;
  height: 0.5px;
  width: 20%;
  top: 53%;
  margin-left: 20%;
}
#lineRightW {
  position: absolute;
  background-color: #daaa29;
  height: 0.5px;
  width: 20%;
  top: 53%; 
  margin-left: 60%;
}
#title {
  margin-top: 0%;
  font-family: Channel;
  color: black;
}
#whatIs {
  font-family: GeosansLight;
  font-size: 110%;
  text-align: justify;
  width: 500px;
  padding-top: 20px;
  padding-left: 100px;
}
#whereIs {
  font-family: GeosansLight;
  font-size: 110%;
  text-align: justify;
  width: 400px;
  padding-top: 20px;
  padding-left: 100px;
}
#subTitle2 {
  text-align: center;
  font-family: GeosansLight;
  position: relative;
  top: 150px;
  right: 120px;
}
.bandeja2 {
  width: 100px;
  height: auto;
  position: relative;
  display: block;
  top: 150px;
}
.douradoLogo2 {
  width: 250px;
  position: relative;
  height: auto;
  top: 150px;
  right: 120px;
}
</style>