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
      <b-modal id="modal-1" title="Iniciar Sessão">
        <div class="form-group">
          <label for>E-mail:</label>
          <input
            type="email"
            class="form-control"
            name
            id
            aria-describedby="emailHelpId"
            placeholder
          />
          <label for>Palavra-Chave:</label>
          <input
            type="password"
            class="form-control"
            name
            id
            aria-describedby="emailHelpId"
            placeholder
          />
        </div>
      </b-modal>
    </nav>
    <!--/.Navbar-->
    <!--Navbar-->
    <nav class="navbar" id="navBar2">
      <div class="container" style="justify-content: center">
        <p>Eventos e Catering</p>

        <p>Espaços</p>

        <p>Workshops</p>

        <p>Menus</p>
      </div>
    </nav>
    <!--/.Navbar-->
  </div>
</template>

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

p {
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;

  color: white;
}
</style>