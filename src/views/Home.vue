<template>
  <div class="home">
    <Carousel />
    <!-- <img alt="Vue logo" id="logoola" class="img-fluid" src="../assets/logo.eshtEvents.png" /> -->
    <button type="submit" class="btnAboutUs">Descobre mais sobre nós</button>
    <router-link to="/profile">
      <button type="submit" class="btnAboutUs">Profile</button>
    </router-link>

    <br />
    <br />
    <br />
    <br />
    <!-- PRIMEIRO CARD -->
    <div class="container">
      <b-card no-body class="overflow-hidden" id="firstCard">
        <div class="card-header" id="header1">Eventos e Catering<hr id="line"></div>
        
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard1"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <br />
    <br />
    <br />
    <br />

  <!-- SEGUNDO CARD -->
    <div class="container">
      <b-card no-body class="overflow-hidden" id="firstCard">
        <div class="card-header" id="header2">Espaços<hr id="line"></div>
        
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard1"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b-card-text class="text2">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <br />
    <br />
    <br />
    <br />

    <!-- TERCEIRO CARD -->
    <div class="container">
      <b-card no-body class="overflow-hidden" id="firstCard">
        <div class="card-header" id="header3">Workshops<hr id="line"></div>
        
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard1"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  }
};
</script>

<style>
#logoola {
  width: 30%;
  height: auto;
}
.btnAboutUs {
  position: relative;
  width: 200px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight;
}
.btnAboutUs:hover {
  position: relative;
  color: white;
  border-color: #f7ca18;
  background-color: #000;
  border-width: thick;
}
#firstCard {
  width: 1000px;
  height: 400px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
#imgCard1 {
  width: 400px;
  height: 300px;
  margin-top: 30px;
}
.text {
  font-size: 80%;
  text-align: justify;
  margin-bottom: 10px;
}
#header1{
  background-color: #000;
  color: white;
  height: 50px;
  text-align: justify;
  font-size: 150%;
}
#header2{
  background-color: #000;
  color: white;
  height: 50px;
  text-align: end;
  font-size: 150%;
}
#header3{
  background-color: #000;
  color: white;
  height: 50px;
  text-align: justify;
  font-size: 150%;
}
#line{
  background-color:#f7ca18;
  height: 5px;
  width: 1000px;
  position: relative;
  left: -20px;
  top: -15px;
}
.text2 {
  font-size: 80%;
  text-align: justify;
  margin-bottom: 10px;
}
</style>
