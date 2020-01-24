<template>
  <div class="editProfile">
    <h1 id="title">Alterar Palavra-passe</h1>
    <div id="container">
      <div id="picture">
        <img id="picture" />
      </div>
      <a id="editPhoto">Editar Foto</a>

      <h3 id="name">{{loggedUser[0].name}}</h3>
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
        alert("Palavra-Passe alterada!");
      } else if (this.loggedUser[0].password !== this.password) {
        alert("A palavra-passe não coincide com a atual!");
      } else {
        alert("As palavras-passe estão diferentes!");
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
  border-color: #daaa29;
  background-color: #000;
  border-width: thick;
}
</style>