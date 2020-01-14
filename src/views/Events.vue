<template>
  <div class="events">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br><br><br>
    <hr id="lineLeft" />
    <h3 id="titule">Eventos e Catering</h3>
    <hr id="lineRight" />

    <br />
    <br />
    <p id="description">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam,
      gravida tortor feugiat tortor consequat curabitur tempor facilisis, ornare orci urna quisque nibh curabitur a. faucibus donec integer quam ut
    </p>
    <p id="description">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam,
      gravida tortor feugiat tortor consequat curabitur tempor facilisis, ornare orci urna quisque nibh curabitur a. faucibus donec integer quam ut
    </p>

    <b-img src="../assets/transferir.jpg" id="image"></b-img>

    <p id="description2">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam,
      gravida tortor feugiat tortor consequat curabitur tempor facilisis, ornare orci urna quisque nibh curabitur a. faucibus donec integer quam ut
    </p>
    <p id="description2">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam,
      gravida tortor feugiat tortor consequat curabitur tempor facilisis, ornare orci urna quisque nibh curabitur a. faucibus donec integer quam ut
    </p>

    <router-link tag="a" class="menus" :to="{ name: 'menu' }"><b>Ver menus</b></router-link>
    <router-link tag="button" id="btnReserve" :to="{ name: 'eventsReserv' }">Fazer Reserva</router-link>
  </div>
</template>

<style>
.catering {
  position: relative;
  width: 1263px;
}
#lineLeft {
  position: relative;
  background-color: #DAAA29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 290px;
}
#lineRight {
  position: relative;
  background-color: #DAAA29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 290px;
}
#titule {
  margin-top: -4%;
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
  position: relative;
  top: -265px;
  right: -320px;
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
  position: relative;
  font-family: GeosansLight;
  margin-left: -570px;
  top: -455px;
}
#btnReserve {
  position: relative;
  width: 150px;
  height: 50px;
  font-size: 100%;
  color: white;
  top: -380px;
  left: -110px;
  background-color: #232323;
  font-family: GeosansLight;
}
#btnReserve:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
</style>