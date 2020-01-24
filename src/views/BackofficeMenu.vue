<template>
  <div class="bckAdmin">
    <br>
    <h1>Menu Administrador</h1>

    <router-link to="/usersadmin">
     <b-button variant="dark" class="btn100"  size="lg" style="padding:20px;left: -30px;">USERS</b-button></router-link>
    
   <!-- <span> </span> -->
   <router-link to="/menusBackoffice"> 
    <b-button variant="dark" class="btn100" size="lg" style="padding:20px;left: 0px;">MENUS</b-button></router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/workshopadmin"> 
    <b-button variant="dark" class="btn100" size="lg" style="padding:20px; left:30px;">WORKSHOP</b-button> </router-link>
<br><br><br>
    <!-- <span> ///// </span> -->
    <router-link to="/reservationsBackoffice"> 
   <b-button variant="dark" class="btn100" size="lg" style="padding:20px;right:30px;">RESERVAS DE EVENTOS</b-button></router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/reservationsBackoffice"> 
   <b-button variant="dark" class="btn100" size="lg" style="padding:20px;right:0px;">ALUGUER DE ESPAÇOS</b-button></router-link>
  </div>
</template>

<style>
.btn100 {
  width:150px;
  height: 150px;
  position: relative;
  top:5px;
}
</style>