<template>
  <div class="container" style=" margin: auto; width:500px; ">
    <h1 id="loginTitle">Iniciar Sessão</h1>
    <form v-on:submit.prevent="login()" id="formLogin">
      <label for="txtEmailLogin" class="emailLogin">E-mail:</label>
      <input
        type="email"
        class="form-control"
        id="txtEmailLogin"
        placeholder="Insira o seu e-mail"
        v-model="email"
        required
      />
      <label for="txtPasswordLogin" class="passLogin">Palavra-Chave:</label>
      <input
        type="password"
        class="form-control"
        id="txtPasswordLogin"
        placeholder="Insira a sua palavra-chave"
        v-model="password"
        required
      />´
      <b-button type="submit" class="btn btn-primary float-right" id="btnLogin">Entrar</b-button>
    </form>
    <router-link
      tag="a"
      id="join"
      :to="{ name: 'register' }"
    >Ainda não estás registado? Junta-te a nós!</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  created: function() {
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
    localStorage.setItem(
      "foodMenus",
      JSON.stringify(this.$store.state.foodMenus)
    );
    localStorage.setItem(
      "workshops",
      JSON.stringify(this.$store.state.workshops)
    );
  },
  methods: {
    login() {
      this.$store.commit("LOGIN", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#loginTitle {
  font-family: channel;
  color: black;
  font-size: 200%;
  padding-top: 60px;
  padding-bottom: 20px;
}

#join {
  font-size: 16px;
  font-family: GeosansLight;
  color: #000;
  right: 520px;
  position: absolute;
  margin-top: 50px;
}

.emailLogin {
  font-size: 16px;
  padding: 10px;
  margin-right: 250px;
  padding-bottom: 0px;
}

.passLogin {
  font-size: 16px;
  margin-right: 205px;
  padding: 10px;
  padding-bottom: 0px;
}

#txtEmailLogin {
  width: 300px;
  margin: auto;
  padding: 5px;
}

#txtPasswordLogin {
  width: 300px;
  margin: auto;
  padding: 5px;
}

#formLogin {
  padding: 10px;
  font-family: GeosansLight;
  position: relative;
}

#btnLogin {
  width: 110px;
  font-size: 16px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  border: 2px solid black;
  margin-right: 175px;
  margin-top: 40px;
}

#btnLogin:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
</style>