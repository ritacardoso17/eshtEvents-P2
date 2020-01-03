<template>
  <div class="rooms">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br><br><br>
    <hr id="lineLeft" />
    <h3 id="titule">Os nossos Espaços</h3>
    <hr id="lineRight" />

    <br />
    <h5 id="room1">Cozinha</h5>
    <br />
    <p class="paragraph1">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
    </p>
    <b-img class="kitchen" src="../assets/cozinha.jpg"></b-img>
    
    <h5 id="room2">Cozinha</h5>
    <br />
    <p class="paragraph2">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
    </p>
    <b-img class="outdoor" src="../assets/t30_2x_bapt_6_121452.jpg"></b-img>
   
    <h5 id="room3">Cozinha</h5>
    <br />
    <p class="paragraph3">
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
      Lorem ipsum quisque venenatis mi lacus morbi elit lacinia non, placerat urna quam commodo iaculis dictumst porttitor dictum
      suspendisse, mollis tempor dapibus euismod id neque taciti leo. amet cubilia elementum nec ante habitant condimentum fringilla quam.
    </p>
    <b-img class="kitchen2" src="../assets/cozinha.jpg"></b-img>

    <router-link tag="button" id="btnRent" :to="{ name: 'rentRoom' }">Alugar</router-link>
    <br><br>
  </div>
</template>

<style>
.paragraph1 {
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  margin-left: 60px;
}
.paragraph2 {
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  margin-left: 700px;
}
.paragraph3 {
  font-family: GeosansLight;
  text-align: justify;
  width: 500px;
  margin-left: 60px;
}
#room1 {
  font-family: GeosansLight;
  text-align: justify;
  margin-left: 60px;
}
#room2 {
  font-family: GeosansLight;
  text-align: justify;
  margin-left: 700px;
  margin-top: -100px;
}
#room3 {
  font-family: GeosansLight;
  text-align: justify;
  margin-left: 60px;
  margin-top: -200px;
  
}
.kitchen{
    position: relative;
    width: 30%;
    height: auto;
    left: 300px;
    top: -200px;
}
.outdoor{
    position: relative;
    width: 30%;
    height: auto;
    right: 300px;
    top: -270px;
}
.kitchen2{
    position: relative;
    width: 30%;
    height: auto;
    left: 400px;
    top: -200px;
}
#btnRent {
  position: relative;
  width: 150px;
  height: 50px;
  font-size: 100%;
  color: white;
  bottom: -10px;
  left: -200px;
  background-color: #232323;
  font-family: GeosansLight;
}
#btnRent:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
</style>