<template>
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
      <br>
      <br>
        O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, <br>  com capacidade para 50 pessoas sentadas.
        Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<script>
export default {
  name: "Carousel",
  data() {
  },
  methods: {

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
</style>