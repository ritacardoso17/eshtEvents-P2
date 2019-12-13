<template>
    <div class="navBar">
      <b-navbar toggleable="lg" style="background-Color:black" type="dark">
        <b-navbar-brand href="#">
          <img src="../assets/logoWhite.png" style="width: 180px" />
          <img src="../assets/Logo.mao.png" style="width: 40px" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right></b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
