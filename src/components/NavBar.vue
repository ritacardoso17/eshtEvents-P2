<template>
  <div class="navBar">
    <!--Navbar-->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand text-left" href="/">
        <img src="../assets/logo.eshtEvents.png" class="img-fluid" alt />
      </a>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <img src="../assets/Logo.mao.png" class="img-fluid" id="camp" alt />
        </li>
      </ul>

      <a class="nav-link" v-b-modal.modal-1 id="login">Iniciar Sessão<!-- moustache? --></a>
      <b-modal id="modal-1" centered size="m" title="Iniciar Sessão" hide-footer>
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
        <router-link to="/events" id="eventsLink"> Eventos e Catering</router-link> <span> ///// </span>
        <router-link to="/room" id="roomsLink">Espaços</router-link> <span> ///// </span>
        <router-link to="/" id="workshopsLink"> Workshops</router-link> <span> ///// </span>
        <router-link to="/" id="menusLink"> Menus</router-link>
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
  background-color: #232323;
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
.container{
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;
  font-family: GeosansLight;

}
#eventsLink{
  color: white;
  text-decoration: none;
}
#eventsLink:hover{
  color: #f7ca18;
}
#roomsLink{
  color: white;
  text-decoration: none;
}
#roomsLink:hover{
  color: #f7ca18;
}
#workshopsLink{
  color: white;
  text-decoration: none;
}
#workshopsLink:hover{
  color: #f7ca18;
}
#menusLink{
  color: white;
  text-decoration: none;
}
#menusLink:hover{
  color: #f7ca18;
}
span{
  color: #232323;
}
</style>