<template>
  <!-- Footer -->
  <footer class="page-footer font-small indigo">
    <hr id="lineFooter">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4"></h5>

          <b-img src="../assets/bandeja.preto.png" class="logoFooter" />
          <b-img src="../assets/logo.eshtEvents.png" class="logo1Footer"/>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-3 mx-auto">

          <p id="textFooter">
            Escola Superior de Hotelaria e Turismo
            <br />Rua D. Sancho I, n.º 981
            <br />4480-876 Vila do Conde Portugal
            <br />T. +351 252 291 700
            <br />E. geral@esht.ipp.pt
          </p>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- empty column -->
          
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- LOGO IPP -->
          <b-img src="../assets/p.porto.png" class="ipp"/>
        
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3" id="copyright">
      © 2019 Copyright:
      <a href="#">eshtEvents</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {};
</script>

<style>
#lineFooter {
  background-color: #232323;
  height: 5px;
}
#textFooter {
  font-size: 15px;
  margin-top: 30px;
  margin-left: -60px;
}
.logoFooter{
  width: 30%;
  height: auto;
}
.logo1Footer{
  position: relative;
  width: 50%;
  height: auto;
  bottom: -80px;
  left: -90px;
}
.ipp{
  margin-bottom: -300px;
  margin-left: 200px;
}
#copyright{
  font-family: GeosansLight;
}
</style>