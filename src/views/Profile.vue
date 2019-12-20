<template>
  <div class="profile">
    <h1 id="title">Perfil</h1>
    <div id="container">
      <div id="linha1"></div>
      <div id="linha2"></div>
      <div id="picture">
        <img id="picture" />
      </div>
      <a id="editPhoto">Editar Foto</a>

      <h3 id="name">Mafalda Cunha</h3>

      <p id="info">Data de Nascimento: 05/12/1997</p>

      <p id="info">Contacto: 912345678</p>

      <p id="info">Instituição: ISEP</p>

      <p id="info">E-mail: mafaldacunha97@isep.ipp.pt</p>

      <router-link to="/Profile/editProfile"><button id="edit">Editar Perfil</button></router-link>
    </div>
    
    <router-link to="/Profile" id="profileLinks"> <u>Eventos</u> |</router-link>
    <router-link to="/Profile/roomProfile" id="profileLinks"> Espaços</router-link>

    <hr id="line1"><h2 id="subtitle">Os teus eventos</h2><hr id="line2">
  </div>
</template>

<script>
</script>

<style>
h1 {
  font-family: ScriptMTBold;
  color: #000;
  font-size: 70px;
}
#container {
  border-left: 6px solid black;
  border-right: 6px solid black;
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  height: 350px;
  width: 1050px;
}
#picture {
  position: absolute;
  margin-top: 10px;
  width: 200px;
  height: 300px;
  left: 100px;
}
#editPhoto {
  position: absolute;
  width: 200px;
  height: 300px;
  left: 200px;
  top: 340px;
  text-decoration: underline;
}
#name {
  position: relative;
  padding-top: 10px;
  margin-left: 106px;
  font-weight: bold;
  font-family: Champagne;
}
#info {
  position: relative;
  margin-top: 40px;
  margin-left: 490px;
  text-align: left;
  font-family: GeosansLight;
}
#edit {
  position: relative;
  margin-top: 40px;
  margin-left: 600px;
  width: 150px;
  color: white;
  background-color: #000;
  border-color: #0000;
  border-width: thick;
  font-family: GeosansLight;
}
#edit:hover {
  position: relative;
  margin-left: 600px;
  color: white;
  border-color: #f7ca18;
  background-color: #000;
  border-width: thick;
}
#profileLinks{
  position: relative;
  top: 100px;
  font-size: 35px;
  font-family: GeosansLight;
  color: black;
}
#subtitle{
  position: relative;
  top: 150px;
}
#line1{
  position: relative;
  background-color: #f7ca18;
  height: 0.5px;
  width: 150px;
  top: 187px;
  margin-left: 350px;
}
#line2{
  position: relative;
  background-color: #f7ca18;
  height: 0.5px;
  width: 150px;
  top: 117px;
  margin-right: 350px;
}
</style>