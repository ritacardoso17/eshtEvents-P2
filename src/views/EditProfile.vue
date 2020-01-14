<template>
  <div class="editProfile">
    <h1 id="title">Alterar Palavra-passe</h1>
    <div id="container" >
      <div id="linha1"></div>
      <div id="linha2"></div>
      <div id="picture">
        <img id="picture" />
      </div>
      <a id="editPhoto">Editar Foto</a>

      <h3 id="name">{{loggedUser[0].name}}</h3>

      <label for="password" class="password"><p>Palavra-passe:</p></label>
      <input type="password" class="form-control" id="password" v-model="password" required/>

      <label for="password" class="newPassword"><p>Nova palavra-passe:</p></label>
      <input type="password" class="form-control" id="newPassword" v-model="newPassword" required/>

      <label for="password" class="confirmPassword"><p>Confirmar palavra-passe:</p></label>
      <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required/>

      <router-link to="/Profile"><button type="submit" id="edit" @click="changePassword()">Confirmar</button></router-link>
      
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
    },
    changePassword(){
      this.$store.commit("CHANGE_PASSWORD",{
        id: this.id,
        name: this.name,
        school: this.school,
        typeUser: this.typeUser,
        email: this.email,
        password: this.password,
        contact: this.contact,
        birth: this.birth,
      });
    },

  },
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  }
}
</script>

<style>
h1 {
  font-family: ScriptMTBold;
  margin-top: 30px;
  color: #000;
  font-size: 50px;
}
#container {
  border-left: 6px solid black;
  border-right: 6px solid black;
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  height: 350px;
  width: 1050px;
  font-family: GeosansLight;
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
  left: 560px;
  height: 20px;
  width: 100px;
  font-family: GeosansLight;
}
.password {
  right: 10px;
  margin-top: 30px;
  position: relative;
  font-family: GeosansLight;
}
#newPassword {
  position: relative;
  font-family: GeosansLight;
  bottom: 45px;
  left: 600px;
  height: 20px;
  width: 100px;
}
.newPassword {
  left: 10px;
  position: relative;
  font-family: GeosansLight;
}
#confirmPassword {
  position: relative;
  font-family: GeosansLight;
  bottom: 45px;
  left: 620px;
  height: 20px;
  width: 100px;
}
.confirmPassword {
  position: relative;
  font-family: GeosansLight;
  left: 20px;
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