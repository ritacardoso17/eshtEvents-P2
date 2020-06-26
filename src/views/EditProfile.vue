<template>
  <div class="editProfile">
    <br />
    <h1 id="title">Editar Perfil</h1>
    <div id="container">
      <h3 style="color: #daaa29" id="name">
        <b>{{ this.$store.state.loggedUser.user[0].nome }}</b>
      </h3>
      <div>
        <img
          class="imgEdit"
          style="width:200px; height:auto"
          :src="this.$store.state.loggedUser.user[0].foto_perfil"
        />
      </div>
      <form v-on:submit.prevent="changePassword()">
        <label for="password" class="password">Palavra-passe:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />

        <label for="password" class="newPassword">Nova palavra-passe:</label>
        <input
          type="password"
          class="form-control"
          id="newPassword"
          v-model="newPassword"
          required
        />

        <label for="password" class="confirmPassword"
          >Confirmar palavra-passe:</label
        >
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
    <br />
    <br />
    <br />
    <br />
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
    async changePassword() {
      if (this.password === this.newPassword) {
        this.$bvToast.toast("A nova password não pode ser igual à atual!");
      } else if (this.newPassword === this.confirmPassword) {
        try {
          await this.$store.dispatch("editUser", {
            pass: this.newPassword,
            oldPass: this.loggedUser.user[0].password,
            img: ""
          });
          this.password = "";
          this.newPassword = "";
          this.confirmPassword = "";
        } catch (err) {
          alert(err);
        }
      } else {
        this.$bvToast.toast("Passwords diferentes");
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
  top: 2vw;
  left: 22vw;
  height: 20vw;
  width: 55vw;
  font-family: GeosansLight;
}
form {
  position: relative;
  margin-top: -20%;
  left: 50%;
  width: 15vw;
  text-align: left;
}
#name {
  text-align: justify;
  margin-left: 12%;
}
#password {
  position: relative;
  top: -2.5vw;
  left: 70%;
  width: 75%;
  font-family: GeosansLight;
}
.password {
  position: relative;
  font-family: GeosansLight;
}
#newPassword {
  position: relative;
  font-family: GeosansLight;
  top: -2.5vw;
  left: 70%;
  width: 75%;
}
.newPassword {
  position: relative;
  font-family: GeosansLight;
}
#confirmPassword {
  position: relative;
  font-family: GeosansLight;
  top: -2.5vw;
  left: 70%;
  width: 75%;
}
.confirmPassword {
  position: relative;
  font-family: GeosansLight;
}
.imgEdit {
  margin-left: -35vw;
  margin-top: 5%;
}

#edit {
  position: relative;
  margin-left: 55%;
  margin-top: 10%;
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
