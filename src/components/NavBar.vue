<template>
  <div class="navBar">
    <!--Navbar-->
  <nav style="background-Color:black" type="dark">

    <!-- Navbar brand -->
    <a class="navbar-brand" href="#">
      <img src="../assets/logoWhite.png" style="width: 180px" id="logo" />
      <img src="../assets/Logo.mao.png" style="width: 50px"/>
    </a>

    <b-modal id="modal-1" title="Iniciar Sessão">
      <div class="form-group">
        <label for="">E-mail:</label>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
        <label for="">Palavra-Chave:</label>
        <input type="password" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
      </div>
    </b-modal>

    <!-- Collapse button -->
    <button class="navbar-toggler toggler-example purple darken-3" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false"
      aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent41">


      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img class="user_img" src="#" alt="" href="#">Perfil</a>
        </li>
        <li class="nav-item6">
          <a class="nav-link" href="#">Eventos e Catering</a>
        </li>
        <li class="nav-item5">
          <a class="nav-link" href="#">Espaços</a>
        </li>
        <li class="nav-item4">
          <a class="nav-link" href="#">Workshops</a>
        </li>
        <li class="nav-item4">
          <a class="nav-link" href="#">Menus</a>
        </li>
        <li class="nav-item1" id="sobreNos">
          <a class="nav-link" href="#">Sobre Nós</a>
        </li>
        <li class="nav-item2" id="terminarSessao">
          <a class="nav-link" v-b-modal.modal-1 id="login">Iniciar Sessão<!-- moustache? --></a>
        </li>
        
      </ul>
      <!-- Links -->

    </div>
    <!-- Collapsible content -->

  </nav>
  <!--/.Navbar-->
  </div>
</template>

<style>
#logo{
  position: absolute;
  left: 30px;
}

#login{
  color: white;
  font-family: Geosans;
}

.nav-link{
  color: white;
  font-family: Geosans;
  margin-right: 30px;
}

.navbar-nav{
  width: 200px;
  text-align: right;
  float: right;
  background-color: black
}

.navbar-toggler{
  position: absolute;
  background-color: #F7CA18;
  right: 50px;
  top: 10px;
}
</style>