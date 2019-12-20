<template>
  <div id="app">
        <NavBar/>
    <div id="nav">
    </div>
<!--       <router-link to="/menu">Menu</router-link> |
      <router-link to="/room">Room</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/eventsProfile">EventsProfile</router-link> |
      <router-link to="/roomProfile">RoomProfile</router-link> |
      <router-link to="/editProfile">EditProfile</router-link> |
      <router-link to="/reservation">Reservation</router-link> |
      <router-link to="/events">EventsReserv</router-link> |
      <router-link to="/information">Information</router-link> |
      <router-link to="/menu">MenuReserv</router-link> |
      <router-link to="/components">Components</router-link> |
      <router-link to="/extra">Extra</router-link> |
      <router-link to="/summary">Summary</router-link> -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "InicialPage",
  components: {
    NavBar
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