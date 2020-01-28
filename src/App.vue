<template>
  <div id="app">
    <div v-if="this.$route.name !== 'inicialPage' && this.$route.name !== 'login' && this.$route.name !== 'about' && this.$route.name !== 'register' && this.$route.name !== 'menuadmin' ">
      <NavBar />
      <router-view></router-view>
      <Footer />
    </div>
    <div v-else-if="this.$route.name === 'login'" >
      <NavBar />
      <router-view></router-view>
    </div>
    <div v-else-if=" this.$route.name === 'about' || this.$route.name === 'register' || this.$route.name === 'menuadmin' " >
      <NavBar />
      <router-view></router-view>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

import swal from 'sweetalert2';
window.Swal = swal;

export default {
  name: "InicialPage",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
@font-face {
  font-family: Channel;
  src: url(/assets/Fonts/Channel.ttf);
}

@font-face {
  font-family: Champagne;
  src: url(/assets/Fonts/Champagne&Limousines.ttf);
}

@font-face {
  font-family: GeosansLight;
  src: url(/assets/Fonts/GeosansLight.ttf);
}

@font-face {
  font-family: ScriptMTBold;
  src: url(/assets/Fonts/ScriptMTBold.ttf);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>