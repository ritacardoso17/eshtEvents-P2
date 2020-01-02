<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <b-img src="../assets/zaton-catering-001.jpg" class="imgCarousel" />
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
    <button type="submit" class="btnAboutUs">Descobre mais sobre nós</button>
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
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard1"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <b-button id="seeMore" href="#">Ver Mais</b-button>
              <b-button id="reserve" href="../views/EventsReserv.vue">Reservar Agora</b-button>
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
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard2"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text2">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <button type="submit" id="seeMore2" class="btn">Ver Mais</button>
              <button type="submit" id="reserve2" class="btn">Reservar Agora</button>
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
            <b-card-img src="../assets/catering-table-display.jpg" class="rounded-0" id="imgCard1"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title>
              <b-card-text class="text">
                O Restaurante de Aplicação da Escola Superior de Hotelaria
                <br />e Turismo é da responsabilidade do Politécnico do Porto, com capacidade
                <br />para 50 pessoas sentadas.
                Durante estes últimos anos, o Restaurante tem acolhido
                <br />diversos eventos, conseguindo sempre estar à altura
                das expectativas dos clientes.
              </b-card-text>
              <button type="submit" id="workshopsbtn" class="btn">Ver Workshops</button>
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
  components: {
 
  }
};
</script>

<style>
.imgCarousel {
  width: 1000px;
  height: auto;
  background-color: white;
  /* -webkit-filter: blur(2px);
  filter: blur(2px); */
  display: block;
  margin-left: auto;
  margin-right: auto;
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

#subTitle{
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
  border-color: #f7ca18;
  background-color: #000;
}
#seeMore {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  bottom: -70px;
  left: 135px;
  background-color: #232323;
  font-family: GeosansLight;
}
#seeMore:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#reserve {
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
#reserve:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#seeMore2 {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  bottom: -140px;
  left: -650px;
  background-color: #232323;
  font-family: GeosansLight;
}
#seeMore2:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#reserve2 {
  position: relative;
  width: 80px;
  height: 30px;
  font-size: 70%;
  color: white;
  bottom: -140px;
  left: -635px;
  background-color: #232323;
  font-family: GeosansLight;
}
#reserve2:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#workshopsbtn {
  position: relative;
  width: 120px;
  height: 30px;
  font-size: 70%;
  color: white;
  bottom: -70px;
  left: 170px;
  background-color: #232323;
  font-family: GeosansLight;
}
#workshopsbtn:hover {
  color: white;
  border: 2px solid;
  border-color: #f7ca18;
  background-color: #000;
}
#firstCard {
  width: 1000px;
  height: 400px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  box-shadow: 2px 2px #f5f5f0;
}
#imgCard1 {
  width: 400px;
  height: 300px;
  margin-top: 30px;
}
#imgCard2 {
  position: relative;
  width: 400px;
  height: 300px;
  margin-top: 30px;
  left: 500px;
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
  background-color: #f7ca18;
  height: 5px;
  width: 1000px;
  position: relative;
  left: -20px;
  top: -15px;
}
.text2 {
  /* position: absolute; */
  font-size: 80%;
  text-align: justify;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: -490px;
  font-family: GeosansLight;
  font-size: 17px;
}
.text {
  font-size: 80%;
  text-align: justify;
  margin-bottom: 10px;
  margin-top: 25px;
  font-family: GeosansLight;
  font-size: 17px;
}
</style>
