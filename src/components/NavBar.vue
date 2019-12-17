<template>
  <div class="navBar">
    <!--Navbar-->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand text-left" href="#">
        <img src="../assets/logo.eshtEvents.png" class="img-fluid" alt />
      </a>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <img src="../assets/Logo.mao.png" class="img-fluid" id="camp" alt />
        </li>
      </ul>

      <a class="nav-link" v-b-modal.modal-1 id="login">Iniciar Sessão<!-- moustache? --></a>
      <b-modal id="modal-1" title="Iniciar Sessão" hide-footer>
        <div class="form-group">
           <form v-on:submit.prevent="login()">
          <label for="txtEmailLogin">E-mail:</label>
          <input  type="email" class="form-control" id="txtEmailLogin" aria-describedby="emailHelpId" placeholder="Insira o seu e-mail" v-model="email" required/>
          <label for="txtPasswordLogin">Palavra-Chave:</label>
         <input type="password" class="form-control"  id="txtPasswordLogin" aria-describedby="emailHelpId" placeholder="Insira a sua palavra-chave" v-model="password" required/>
         <b-button type="submit" class="btn btn-primary  float-right">Entrar</b-button>
        </form>
        </div>
      </b-modal>
    </nav>
    <!--/.Navbar-->
    <!--Navbar-->
    <nav class="navbar" id="navBar2">
      <div class="container" style="justify-content: center">
        <router-link to="/"> Eventos e Catering</router-link> <span></span>
        <router-link to="/">Espaços</router-link> <span></span>
        <router-link to="/"> Workshops</router-link>
        <router-link to="/"> Menus</router-link>
      </div>
    </nav>
    <!--/.Navbar-->
  </div>
</template>

<script>
export default {
  name:"Login",
  data:()=>({
    email:"",
    password:""
  }),
  created: function () {
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if(localStorage.getItem("loggedUser")){
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
  methods:{
    /**VER SE EXISTE UM USER COM O EMAIL E PASS */
    login(){
      this.$store.commit('LOGIN',{
        email:this.email,
        password:this.password
      })
    }
  }
  
}
</script>

<style>
.navbar-light {
  background-color: white !important;
}

#navBar2 {
  background-color: black;
  height: 40px;
}

img {
  width: 40%;
  height: auto;
}

#camp {
  width: 10%;
  height: auto;
}

#text {
  color: white;
  font-family: Geosans;
}

.container{
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;

}
</style>

