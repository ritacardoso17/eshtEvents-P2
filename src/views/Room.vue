<template>
  <div class="rooms">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />

    <div class="container-full title">
      <h3 id="redTitle">Os nossos Espaços</h3>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>

    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12"> 
        <b-card no-body class="overflow-hidden cards border-0" style="max-width: 70vw;">
          <div class="card-header" id="header">Restaurante Aplicação</div>
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="require('../assets/restApp.jpg')"
                class="rounded-0"
                style="margin-top: 5px;"
                img-right
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text>
                  Restaurante com capacidade para 50 pessoas,
                  onde são aplicados os métodos de serviço leccionados
                  nas UC de Práticas Hoteleiras.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      </div>

      <div class="row">
        <div class="col-sm-12"> 
        <b-card no-body class="overflow-hidden cards border-0" style="max-width: 70vw;">
          <div class="card-header" id="header">Cozinha de Aplicação</div>
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="require('../assets/img_cozinha.jpg')"
                class="rounded-0"
                style="margin-top: 5px;"
                img-right
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text>Possuimos uma cozinha totalmente equipada e preparada para os mais diversos serviços.</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12"> 
        <b-card no-body class="overflow-hidden cards border-0" style="max-width: 70vw;">
          <div class="card-header" id="header">Bar de Aplicação</div>
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="require('../assets/img_bar.jpg')"
                class="rounded-0"
                style="margin-top: 5px;"
                img-right
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text>
                  No Bar Aplicação,
                  os estudantes poêm em prática os conhecimentos de serviço de bar,
                  obtidos nas aulas da Licenciatura. É um espaço agradável e acolhedor.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        </div>
      </div>
      <router-link
        tag="button"
        id="btnRent"
        v-if="this.$store.state.loggedUser.length != 0"
        :to="{ name: 'rentRoom' }"
      >Alugar</router-link>
      <router-link tag="button" id="btnRent" v-else :to="{ name: 'login' }">Alugar</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.catering {
  position: relative;
  width: 1263px;
}
#lineLeftR {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 300px;
}
#lineRightR {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-right: 300px;
}
#titule {
  margin-top: -4%;
  font-family: Channel;
  color: black;
}
.paragraph1 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 18px;
  width: 500px;
  padding-left: 50px;
}
.paragraph2 {
  font-family: GeosansLight;
  text-align: justify;
  font-size: 18px;
  width: 500px;
}
.paragraph3 {
  margin-top: 10px;
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  font-size: 18px;
  padding-left: 50px;
}
#room1 {
  margin-top: 10px;
  font-family: GeosansLight;
  text-align: justify;
  color: #daaa29;
  font-size: 28px;
}
#room2 {
  font-family: GeosansLight;
  margin-top: 50px;
  text-align: justify;
  color: #daaa29;
  font-size: 28px;
}
#room3 {
  font-family: GeosansLight;
  text-align: justify;
  color: #daaa29;
  font-size: 28px;
  margin-top: 50px;
}

#header {
  background-color: white;
  border: 0px transparent;
  color: #daaa29;
  height: 50px;
  text-align: justify;
  font-family: GeosansLight;
  font-size: 150%;
}
.restaurant {
  margin-top: 10px;
}
.kitchen {
  margin-top: 50px;
}
.barApp {
  margin-top: 50px;
}
#btnRent {
  position: relative;
  width: 120px;
  height: 30px;
  font-size: 100%;
  color: white;
  margin-bottom: 50px;
  background-color: #000;
  border-color: black;
  font-family: GeosansLight;
}
#btnRent:hover {
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

.title {
  
    padding-bottom: 50px;
  }
 
  #whiteRect {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 300px;
    position: relative;
    display: block;
    z-index: 6
  }
  
  .back-line {
    background-color: #daaa29;
    margin-top: -25px;
    width: 70%;
    display: block;
    z-index: 5;
    position: relative;
    height: 1px;
  }
  #redTitle {
    font-family: "Channel";
    color: black;
    display: block;
    z-index: 7;
    position: relative;
  }



.col-sm-12{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;

}
</style>