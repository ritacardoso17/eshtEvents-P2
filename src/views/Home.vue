<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <b-img src="../assets/cateringWelcome.png" class="imgCarousel" />
        
        
      </div>
      <div class="row">
        <b-img src="../assets/bandeja.preto.png" class="bandeja"></b-img>
      </div>
      <div class="row">
        <b-img :src="require('../assets/eshtEvents.dourado.png')" class="douradoLogo" />
      </div>
      <div id="subTitle">
        <h5>Eventos & Catering</h5>
      </div>
      <div class="row" id="text">
        <p>
          O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto,
          com capacidade para 50 pessoas.
          Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.
        </p>
      </div>
    </div>
    <button class="btnAboutUs" @click="location()">Descobre mais sobre nós</button>
    <router-link to="/profile">
      <!--PARA TIRAR-->
    </router-link>

  

    <div class="container cardContainer">
      <!-- PRIMEIRO CARD -->

      <div class="row">
  <b-card no-body class="overflow-hidden cards" style="max-width: 70vw;">
    <div class="card-header" id="header">
            Eventos e Catering
            <hr id="line" />
          </div>
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require('../assets/CatePessoas.jpg')" style="margin-top: 5px;" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            O Restaurante de Aplicação da ESHT permite-te fazer reservas
            de Eventos e Catering, agora de forma mais simples e intuitiva,
            com um seguimento de passos que facilita a tua comunicação connosco.
          </b-card-text>
          <router-link tag="button" id="seeMore" :to="{ name: 'events' }">Ver Mais</router-link>
                <router-link tag="button" id="reserve" v-if="this.$store.state.loggedUser.length == 0" :to="{ name: 'login' }">Reservar Agora</router-link>
                <router-link tag="button" id="reserve" v-else :to="{ name: 'eventsReserv' }">Reservar Agora</router-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      </div>

         <div class="row">
  <b-card no-body class="overflow-hidden cards" style="max-width: 70vw;">
    <div class="card-header" id="header">
            Espaços
            <hr id="line" />
          </div>
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require('../assets/cozinha.jpg')" class="rounded-0" style="margin-top: 5px;" img-right></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            A Escola Superior de Hotelaria e Turismo dá-te a possibilidade de alugares um dos seus espaços para organizares o teu próprio evento,
                palestra ou outro uso que seja adequado ao espaço pretendido. Vem conhecer as nossas instalações!
          </b-card-text>
          <router-link tag="button" id="seeMore" :to="{ name: 'events' }">Ver mais</router-link>
              <router-link
                tag="button"
                id="reserve"
                v-if="this.$store.state.loggedUser.length == 0"
                :to="{ name: 'login' }"
              >Reservar Agora</router-link>
              <router-link
                tag="button"
                id="reserve"
                v-else
                :to="{ name: 'eventsReserv' }"
              >Reservar Agora</router-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      </div>

         <div class="row">
  <b-card no-body class="overflow-hidden cards" style="max-width: 70vw;">
    <div class="card-header" id="header">
            Workshops
            <hr id="line" />
          </div>
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require('../assets/works.jpg')" style="margin-top: 5px;" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
           A Wine School da Escola Superior de Hotelaria e Turismo do Instituto Politécnico
                  do Porto pretende dar a conhecer o potencial dos vinhos a entusiastas e
                  apreciadores de vinho que têm curiosidade e/ou vontade de aprender um pouco mais sobre a área.
                  Esta história divide-se em seis capítulos e é aberta ao público.
          </b-card-text>
          <router-link
                  tag="button"
                  id="workshopsbtn"
                  :to="{ name: 'workshops' }"
                >Ver Workshops</router-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      </div>

    </div>
  </div> 
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    location() {
      window.location = "./About";
    }
  }
};
</script>

<style>

.row{
  display:flex;
  flex-direction: row;
  align-items: center;

}

.cards{
  margin-bottom: 50px;

}

.container{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.imgCarousel {
  position: relative;
  width: 90vw;
  height: auto;
  margin:auto;
 
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

@media screen and (max-width: 600px){
.bandeja {
  width: 70px;
  height: auto;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 40px;
}
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
  width: 70vw;
  font-family: GeosansLight;
  margin-top: 50px;
  margin-top: 40px;

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
  border-color: #232323;
  background-color: #232323;
  font-family: GeosansLight;
  margin:50px;
}
.btnAboutUs:hover {
  border: 2px solid;
  border-color: #daaa29;
}
#seeMore {
  width: 100px;
  height: 40px;
  font-size: 100%;
  color: white;
  border-color: #232323;
  background-color: #232323;
  font-family: GeosansLight;
  margin: 5px;
}
#seeMore:hover {
  border: 2px solid;
  border-color: #daaa29;
}
#reserve {
  width: 120px;
  height: 40px;
  font-size: 100%;
  color: white;
  border-color: #232323;
  background-color: #232323;
  font-family: GeosansLight;
  margin: 5px;
}
#reserve:hover {
  border: 2px solid;
  border-color: #daaa29;
}

#workshopsbtn {
  width: 140px;
  height: 40px;
  font-size: 100%;
  color: white;
  border-color: #232323;
  background-color: #232323;
  font-family: GeosansLight;
}
#workshopsbtn:hover {
  border: 2px solid;
  background-color: #000;
}

#header {
  background-color: #232323;
  color: white;
  height: 50px;
  text-align: justify;
  font-family: GeosansLight;
  font-size: 150%;
}

#line {
  background-color: #daaa29;
  height: 5px;
  width: 1000px;
  position: relative;
  left: -20px;
  top: -15px;
}

.text {
  font-size: 16px;
  font-family: GeosansLight;
}
</style>
