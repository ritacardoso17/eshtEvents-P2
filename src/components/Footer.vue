<template>
  <!-- Footer -->
  <footer class="page-footer font-small indigo">
    <hr id="lineFooter" />
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4"></h5>

          <b-img src="../assets/bandejaTxt.png" class="logoFooter" />
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <p id="textFooter">
            Escola Superior de Hotelaria e Turismo
            <br />Rua D. Sancho I, n.º 981 <br />4480-876 Vila do Conde Portugal
            <br />T. +351 252 291 700 <br />E. geral@esht.ipp.pt
          </p>
        </div>

        <div class="col-md-3 mx-auto">
          <!-- LOGO IPP -->
          <b-img src="../assets/p.porto.png" class="ipp" />
        </div>
      </div>
    </div>
    <hr class="clearfix w-100 d-md-none" />

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3" id="copyright">
      © 2019 Copyright:
      <a href="#">eshtEvents</a>
    </div>

    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script></script>

<style>
#lineFooter {
  background-color: #232323;
  height: 0.25vw;
}
#textFooter {
  font-size: 15px;
  margin-top: 30px;
  font-family: GeosansLight;
}

@media screen and (max-width: 600px) {
  .logoFooter {
    width: 30%;
    height: auto;
  }
}

.logoFooter {
  width: 50%;
  height: auto;
}
.logo1Footer {
  position: relative;
  width: 50%;
  height: auto;
  bottom: -80px;
  left: -90px;
}
.ipp {
  width: 58.5%;
}
#copyright {
  font-family: GeosansLight;
}
</style>
