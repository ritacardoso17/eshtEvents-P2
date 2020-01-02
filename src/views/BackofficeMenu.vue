<template>
  <div class="bckAdmin">
    <router-link to="/usersadmin">
    <button id="btnUsers" >USERS</button> </router-link>
    
   <span> ///// </span>
   <router-link to="/register"> 
    <button id="btnMenus">USERS</button> </router-link>

    <span> ///// </span>
    <router-link to="/"> 
    <button id="btnReservations">USERS</button> </router-link>

    <span> ///// </span>
    <router-link to="/"> 
    <button id="btnlolz">USERS</button> </router-link>
  </div>
</template>

<style>
button {
  width: 250px;
  height: 250px;
  position: relative;
  color: transparent;
  background-color: transparent;
}
#btnUsers{
  background-image: url('../assets/noun_User_2501722.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;

}
#btnMenus{

  background-image: url('../assets/noun_menu_2070492.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;

}
#btnReservations{

  background-image: url('../assets/noun_reservation_2548917.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;

}

</style>