<template>
  <div class="editProfile">
    <br>
    <h1 id="title">Editar Perfil</h1>
    <div id="container">
      <h3 style="color: #daaa29" id="name">{{this.$store.state.loggedUser.user[0].nome}}</h3>
      <div>
        <img  class="imgEdit" style="width:200px; height:auto" :src="this.$store.state.loggedUser.user[0].foto_perfil" />
      </div>
      <form v-on:submit.prevent="changePassword()">
        <label for="password" class="password">Palavra-passe:</label>
        <input type="password" class="form-control" id="password" v-model="password" required />

        <label for="password" class="newPassword">Nova palavra-passe:</label>
        <input type="password" class="form-control" id="newPassword" v-model="newPassword" required />

        <label for="password" class="confirmPassword">Confirmar palavra-passe:</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
        <button type="submit" id="edit" href="Profile">Confirmar</button>
      </form>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "editProfile",
  data() {
    return {
      loggedUser: [],
      users: [],
      password: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  methods: {
    changePassword() {
      if (
        this.loggedUser[0].password === this.password &&
        this.newPassword === this.confirmPassword
      ) {
        this.loggedUser[0].password = this.newPassword;
        localStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
        this.$store.state.loggedUser = this.loggedUser;
        for (let i in this.users) {
          if (this.users[i].id == this.loggedUser[0].id) {
            this.users[i].password = this.newPassword;
            localStorage.setItem("users", JSON.stringify(this.users));
            this.$store.state.users = this.users;
          }
        }
        this.$bvToast.toast('Palavra-Passe alterada!')
      } else if (this.loggedUser[0].password !== this.password) {

         this.$bvToast.toast('A palavra-passe não coincide com a atual!')
      } else {
         this.$bvToast.toast('Passwords diferentes')
        
      }
    }
  },
  created() {
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
    this.users = this.$store.state.users;
    this.loggedUser = this.$store.state.loggedUser;
  },
  computed: {
    getUserLogged() {
      return this.$store.state.loggedUser;
    },
    getUser() {
      return this.$store.state.users;
    }
  }
};
</script>

<style>
h1 {
  font-family: Channel;
  margin-top: 30px;
  color: #000;
  font-size: 20px;
}
#container {
  border-left: 2px solid black;
  border-right: 2px solid black;
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  height: 300px;
  width: 1050px;
  font-family: GeosansLight;
}
#name {
  text-align: justify;
  margin-left: 50px;
}
#password {
  position: relative;
  top: -90px;
  left: 480px;
  height: 20px;
  width: 210px;
  font-family: GeosansLight;
}
.password {
  left: -100px;
  top: -60px;
  position: relative;
  font-family: GeosansLight;
}
#newPassword {
  position: relative;
  font-family: GeosansLight;
  top: -77px;
  left: 520px;
  height: 20px;
  width: 170px;
}
.newPassword {
  left: -80px;
  top: -50px;
  position: relative;
  font-family: GeosansLight;
}
#confirmPassword {
  position: relative;
  font-family: GeosansLight;
  top: -55px;
  left: 540px;
  height: 20px;
  width: 150px;
}
.confirmPassword {
  position: relative;
  font-family: GeosansLight;
  left: -70px;
  top: -30px;
}
.imgEdit{
  margin-left: -800px;
  margin-top: 50px;
}

#edit {
  position: relative;
  margin-left: 40px;
  width: 120px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight;
}
#edit:hover {
  color: white;
  border-color: #daaa29;
  background-color: #000;
}
</style>