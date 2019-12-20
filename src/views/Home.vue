<template>
  <div class="home">
    <Carousel/>
    <!-- <img alt="Vue logo" id="logoola" class="img-fluid" src="../assets/logo.eshtEvents.png" /> -->
    <button type="submit" class="btnAboutUs">Descobre mais sobre nós</button>
    <router-link to="/profile"><button type="submit" class="btnAboutUs">Profile</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  }
};
</script>

<style>
#logoola {
    width: 30%;
    height: auto
}
.btnAboutUs {
  position: relative;
  width: 200px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight
}
.btnAboutUs:hover {
  position: relative;
  color: white;
  border-color: #f7ca18;
  background-color: #000;
  border-width: thick;
}
</style>
