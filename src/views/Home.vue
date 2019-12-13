<template>
  <div class="home">

    <Carousel/>
    <img alt="Vue logo" src="../assets/logo.eshtEvents.png" />
    
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
