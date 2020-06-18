<template>
  <div class="events">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <h3 id="title">
      <hr id="lineLeft" />
      Eventos e Catering
      <hr id="lineRight" />
    </h3>

    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <p id="description">
            O Restaurante de Aplicação da ESHT permite-te fazer reservas de
            Eventos e Catering, agora de forma mais simples e intuitiva, com um
            seguimento de passos que facilita a tua comunicação connosco.
          </p>
          <p id="description">
            Diz-nos o que mais gostas e o que não queres de todo no teu evento.
            Quantas pessoas queres convidar e a localização ideal para o
            acontecimento.
          </p>
          <div>
            <router-link
              tag="button"
              id="btnReserve"
              class="menus"
              :to="{ name: 'menu' }"
            >
              <b>Ver menus</b>
            </router-link>
            <router-link
              tag="button"
              id="btnReserve"
              v-if="this.$store.state.loggedUser.length == 0"
              :to="{ name: 'login' }"
              >Fazer Reserva</router-link
            >
            <router-link
              tag="button"
              id="btnReserve"
              v-else
              :to="{ name: 'eventsReserv' }"
              >Fazer Reserva</router-link
            >
          </div>
        </div>
        <div class="col">
          <b-img src="../assets/eventosImg.jpg" id="image"></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.catering {
  position: relative;
  width: 1263px;
}
#lineLeft {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: 30px;
  margin-left: 30%;
}
#lineRight {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 30%;
}
#title {
  margin-top: -3%;
  font-family: Channel;
  color: black;
}
#description {
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  margin-left: 60px;
}
#image {
  height: 400px;
  width: auto;
  padding-bottom: 50px;
}
#description2 {
  position: relative;
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  top: -190px;
  left: 700px;
}
.menus {
  font-family: GeosansLight;
}
#btnReserve {
  width: 120px;
  height: 40px;
  font-size: 100%;
  color: white;
  border: 2px solid black;
  margin: 10px;
  background-color: #232323;
  font-family: GeosansLight;
}
#btnReserve:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
</style>
