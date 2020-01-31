<template>
  <div class="bckAdmin">
    <br>
    <h1 class="adminTitle">Menu Administrador</h1>

    <router-link to="/usersadmin">
     <b-button variant="dark" class="btn100"  size="lg" style="padding:20px;left: -30px;">UTILIZADORES</b-button></router-link>
    
   <!-- <span> </span> -->
   <router-link to="/menusBackoffice"> 
    <b-button variant="dark" class="btn100" size="lg" style="padding:20px;left: 0px;">MENUS</b-button></router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/workshopadmin"> 
    <b-button variant="dark" class="btn100" size="lg" style="padding:14px; left:30px;">WORKSHOPS</b-button> </router-link>
<br><br><br>
    <!-- <span> ///// </span> -->
    <router-link to="/reservationsBackoffice"> 
   <b-button variant="dark" class="btn100" size="lg" style="padding:20px;right:30px;">RESERVAS DE EVENTOS</b-button></router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/eventsBackoffice"> 
   <b-button variant="dark" class="btn100" size="lg" style="padding:20px;right:0px;">ALUGUER DE ESPAÇOS</b-button></router-link>
  </div>
</template>

<style>
.btn100 {
  width:150px;
  height: 150px;
  font-family: GeosansLight;
  background-color: black;
  position: relative;
  top:5px;
}
.btn100:hover{
  border: 3px solid #daaa29;
  background-color: black;

}
.adminTitle{
  font-family: GeosansLight;
  color:black;
}
</style>