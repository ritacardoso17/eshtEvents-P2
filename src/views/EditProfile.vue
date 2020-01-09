<template>
  <div class="editProfile">
    <h1 id="title">Editar Perfil</h1>
    <div id="container" >
      <div id="linha1"></div>
      <div id="linha2"></div>
      <div id="picture">
        <img id="picture" />
      </div>
      <a id="editPhoto">Editar Foto</a>

      <h3 id="name">{{loggedUser[0].name}}</h3>

      <label for="password" class="password"><p>Palavra-passe:</p></label>
      <input type="password" class="form-control" id="password"/>

      <label for="password" class="newPassword"><p>Nova palavra-passe:</p></label>
      <input type="password" class="form-control" id="newPassword"/>

      <label for="password" class="confirmPassword"><p>Confirmar palavra-passe:</p></label>
      <input type="password" class="form-control" id="confirmPassword"/>

      <router-link to="/Profile"><button type="submit" id="edit">Confirmar</button></router-link>
      
    </div>
  </div>
</template>

<script>
  export default{
  name: "editProfile",
  data(){
    return {
      loggedUser: [],
    }
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    }
  },
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  }
}
</script>

<style>
h1 {
  font-family: ScriptMTBold;
  color: #000;
  font-size: 70px;
}
#container {
  border-left: 6px solid black;
  border-right: 6px solid black;
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  height: 350px;
  width: 1050px;
}
#picture {
  position: absolute;
  margin-top: 10px;
  width: 200px;
  height: 300px;
  left: 100px;
}
#editPhoto {
  position: absolute;
  width: 200px;
  height: 300px;
  left: 200px;
  top: 340px;
  text-decoration: underline;
}
#password {
  position: relative;
  top: -50px;
  left: 600px;
  height: 20px;
  width: 100px;
  font-family: GeosansLight;
}
#newPassword {
  position: relative;
  font-family: GeosansLight;
  /* border-bottom-style: hidden; */
  bottom: 45px;
  left: 600px;
  height: 20px;
  width: 100px;
}
#confirmPassword {
  position: relative;
  font-family: GeosansLight;
  bottom: 45px;
  left: 610px;
  height: 20px;
  width: 100px;
}

#edit {
  position: relative;
  margin-left: 600px;
  width: 150px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight;
}
#edit:hover {
  position: relative;
  margin-left: 600px;
  color: white;
  border-color: #DAAA29;
  background-color: #000;
  border-width: thick;
}
</style>