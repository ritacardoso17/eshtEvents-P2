<template>
  <div class="bckAdmin">
    <router-link to="/usersadmin">
    <button class="btn" id="btnUsers" >USERS</button> </router-link>
    
   <!-- <span> </span> -->
   <router-link to="/register"> 
    <button class="btn" id="btnMenus">USERS</button> </router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/"> 
    <button class="btn" id="btnReservations">USERS</button> </router-link>

    <!-- <span> ///// </span> -->
    <router-link to="/workshopadmin"> 
    <button class="btn" id="btnWorkshops">USERS</button> </router-link>
  </div>
</template>

<style>
.btn {
  width: 250px;
  height: 250px;
  position: relative;
  color: transparent;
  background-color: transparent;
  border-color: black;
   top:5px;
}
#btnUsers{
  background-image: url('../assets/noun_User_2501722.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;
  left: -60px;
 
}
#btnMenus{

  background-image: url('../assets/noun_menu_2070492.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;
  left: -30px;

}
#btnReservations{

  background-image: url('../assets/noun_reservation_2548917.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;
  left: 0px;

}
#btnWorkshops{
  background-image: url('../assets/noun_reservation_2548917.png') ;
  background-size: 280px ;
  background-position: -13px 1px;
  font-family: GeosansLight;
  left: 30px;
}


</style>