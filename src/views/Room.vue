<template>
  <div class="rooms">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeftR" />
    <h3 id="titule">Os nossos Espaços</h3>
    <hr id="lineRightR" />

    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h5 id="room1">Restaurante Aplicação</h5>
          <br />
          <p class="paragraph1">
            Restaurante com capacidade para 50 pessoas,
            onde são aplicados os métodos de serviço leccionados
            nas UC de Práticas Hoteleiras.
          </p>
        </div>
        <div class="col">
          <b-img class="restaurant" src="../assets/restApp.jpg"></b-img>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-img class="kitchen" src="../assets/img_cozinha.jpg"></b-img>
        </div>
        <div class="col">
          <h5 id="room2">Cozinha Aplicação</h5>
          <br />
          <p
            class="paragraph2"
          >Possuimos uma cozinha totalmente equipada e preparada para os mais diversos serviços.</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 id="room3">Bar Aplicação</h5>
          <br />
          <p class="paragraph3">
            No Bar Aplicação,
            os estudantes poêm em prática os conhecimentos de serviço de bar,
            obtidos nas aulas da Licenciatura. É um espaço agradável e acolhedor.
          </p>
        </div>
        <div class="col">
          <b-img class="barApp" src="../assets/img_bar.jpg"></b-img>
        </div>
      </div>

      <router-link
        tag="button"
        id="btnRent"
        v-if="this.$store.state.loggedUser.length != 0"
        :to="{ name: 'rentRoom' }"
      >Alugar</router-link>
      <router-link tag="button" id="btnRent" v-else :to="{ name: 'login' }">Alugar</router-link>

      <br />
      <br />
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
  top: -30px;
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
  padding-left: 50px;
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
  padding-left: 50px;
  margin-top: 50px;
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
  bottom: 30px;
  left: -445px;
  background-color: #000;
  border-color: black;
  font-family: GeosansLight;
}
#btnRent:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
</style>