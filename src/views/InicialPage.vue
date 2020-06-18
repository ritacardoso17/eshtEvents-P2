<template>
  <div class="nuno d-flex justify-content-center align-items-center">
    <div class="container-fluid d-flex justify-content-center">
      <img
        src="../assets/imgInicial.jpg"
        id="imgInicial"
        class="position-absolute"
        alt
      />
      <h1 class="position-relative">EshtEvents</h1>
    </div>
  </div>
</template>

<style>
body,
html {
  height: 100%;
}
h1 {
  left: 50%;
}
#imgInicial {
  /* Full height */
  height: 100vh;
  width: 100%;
  -webkit-filter: blur(2px);
  filter: blur(2px);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
