<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <b-img src="../assets/catering-table-display.jpg" class="imgCarousel" />
        <div id="bar"></div>
        <h1 class="centered" id="welcome">Bem-vindo</h1>
      </div>
      <div class="row">
        <b-img src="../assets/bandeja.preto.png" class="bandeja"></b-img>
      </div>
      <div class="row">
        <b-img src="../assets/eshtEvents.dourado.png" class="douradoLogo" />
      </div>
      <div id="subTitle">
        <h5>Eventos & Catering</h5>
      </div>
      <div class="row" id="text">
        <p>
          <br />
          <br />O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto,
          <br />com capacidade para 50 pessoas sentadas.
          Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.
        </p>
      </div>
    </div>
    <button class="btnAboutUs" @click="location()">Descobre mais sobre nós</button>
    <router-link to="/profile">
      <button type="submit" class="btnAboutUs">Profile</button>
      <!--PARA TIRAR-->
    </router-link>

    <br />
    <br />
    <br />
    <br />
    <!-- PRIMEIRO CARD -->
    <div class="container">
      <b-card no-body class="overflow-hidden" id="firstCard">
        <div class="card-header" id="header1">
          Eventos e Catering
          <hr id="line" />
        </div>

        <b-row no-gutters>
          <b-col md="6">
            <b-img src="../assets/CatePessoas.jpg" class="rounded-0" id="imgCard1"></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <router-link tag="button" id="seeMore" :to="{ name: 'events' }">Ver Mais</router-link>
              <router-link tag="button" id="reserve" :to="{ name: 'eventsReserv' }">Reservar Agora</router-link>
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
        <div class="card-header" id="header2">
          Espaços
          <hr id="line" />
        </div>

        <b-row no-gutters>
          <b-col md="6">
            <b-img src="../assets/CatePessoas.jpg" class="rounded-0" id="imgCard2"></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text2">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <router-link tag="button" id="seeMore2" :to="{ name: 'events' }">Ver mais</router-link>
              <router-link tag="button" id="reserve2" :to="{ name: 'eventsReserv' }">Reservar Agora</router-link>
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
        <div class="card-header" id="header3">
          Workshops
          <hr id="line" />
        </div>

        <b-row no-gutters>
          <b-col md="6">
            <b-img src="../assets/CatePessoas.jpg" class="rounded-0" id="imgCard1"></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <router-link tag="button" id="workshopsbtn" :to="{ name: 'workshops' }">Ver Workshops</router-link>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods:{
    location(){
          window.location = './About'
    }
  }
};
</script>

<style>
.imgCarousel {
  position: relative;
  left: -67px;
  width: 1263px;
  height: auto;
  background-color: white;
  -webkit-filter: blur(2px);
  filter: blur(2px);
}
#welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Channel;
  font-size: 210%;
  color: black;
}
#bar {
  position: absolute;
  opacity: 0.6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1263px;
  height: 90px;
  background-color: white;
}
.bandeja {
  width: 100px;
  height: auto;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 40px;
}
.douradoLogo {
  width: 250px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

#text {
  color: black;
  font-family: GeosansLight;
}

#subTitle {
  text-align: center;
  font-family: GeosansLight;
}
.btnAboutUs {
  position: relative;
  width: 200px;
  height: 40px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
}
.btnAboutUs:hover {
  position: relative;
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#seeMore {
  position: absolute;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  top: 250px;
  left: 300px;
  background-color: #232323;
  font-family: GeosansLight;
}
#seeMore:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#reserve {
  position: absolute;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  white-space: nowrap;
  padding: 4px;
  top: 250px;
  left: 400px;
  background-color: #232323;
  font-family: GeosansLight;
}
#reserve:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#seeMore2 {
  position: absolute;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  top: 250px;
  left: -480px;
  background-color: #232323;
  font-family: GeosansLight;
}
#seeMore2:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#reserve2 {
  position: absolute;
  width: 80px;
  height: 30px;
  white-space: nowrap;
  padding: 4px;
  font-size: 70%;
  color: white;
  top: 250px;
  left: -380px;
  background-color: #232323;
  font-family: GeosansLight;
}
#reserve2:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#workshopsbtn {
  position: absolute;
  width: 120px;
  height: 30px;
  font-size: 70%;
  color: white;
  top: 250px;
  left: 350px;
  background-color: #232323;
  font-family: GeosansLight;
}
#workshopsbtn:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
#firstCard {
  width: 1000px;
  height: 350px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  box-shadow: 2px 2px #f5f5f0;
}
#imgCard1 {
  position: absolute;
  width: 80%;
  left: 10px;
  top: 20px;
}
#imgCard2 {
  position: absolute;
  width: 80%;
  top: 20px;
  left: 590px;
}
#header1 {
  background-color: #000;
  color: white;
  height: 50px;
  text-align: justify;
  font-size: 150%;
}
#header2 {
  background-color: #000;
  color: white;
  height: 50px;
  text-align: end;
  font-size: 150%;
}
#header3 {
  background-color: #000;
  color: white;
  height: 50px;
  text-align: justify;
  font-size: 150%;
}
#line {
  background-color: #DAAA29;
  height: 5px;
  width: 1000px;
  position: relative;
  left: -20px;
  top: -15px;
}
.text2 {
  position: absolute;
  font-size: 110%;
  text-align: justify;
  font-family: GeosansLight;
  width: 400px;
  right: 560px;
}
.text {
  position: absolute;
  font-size: 110%;
  left: -50px;
  text-align: justify;
  font-family: GeosansLight;
  width: 400px;
}
</style>
