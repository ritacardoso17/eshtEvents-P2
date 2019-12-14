<template>
  <div class="navBar">
    <b-navbar toggleable="lg" style="background-Color:black" type="dark">
      <b-navbar-brand href="#">
        <img src="../assets/logoWhite.png" style="width: 180px" />
      </b-navbar-brand>

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <mdb-navbar-toggler></mdb-navbar-toggler>

      <b-collapse id="nav-collapse" is-nav style="margin-left: 380px">
        <!-- Right aligned nav items -->
        <img src="../assets/Logo.mao.png" style="width: 50px" />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div>
            <b-button v-b-modal.modal-1>Iniciar Sessão</b-button>

            <b-modal id="modal-1" title="Iniciar Sessão">
              <div class="form-group">
                <label for="">E-mail:</label>
                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
                <label for="">Palavra-Chave:</label>
                <input type="password" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
              </div>
            </b-modal>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
