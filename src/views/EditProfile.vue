<template>
  <div class="editProfile">
    <h1 id="title">Editar Perfil</h1>
    <div id="container">
      <div id="linha1"></div>
      <div id="linha2"></div>
      <div id="picture">
        <img id="picture" />
      </div>
      <a id="editPhoto">Editar Foto</a>

      <h3 id="name">Mafalda Cunha</h3>

      <label for="birthDate" class="birth"><p>Data de Nascimento:</p></label>
      <input type="date" class="form-control" id="birthDate" />

      <label for="number" class="phone"><p>Contacto:</p></label>
      <input type="text" class="form-control" id="number" placeholder="912345678" />

      <label for="institution" class="school"><p>Instituição:</p></label>
      <input type="text" class="form-control" id="institution" placeholder="ISEP" />

      <label for="schoolEmail" class="email"><p>E-mail:</p></label>
      <input type="text" class="form-control" id="schoolEmail" placeholder="mafaldacunha97@isep.ipp.pt"/>

      <router-link to="/Profile"><button type="submit" id="edit">Confirmar</button></router-link>
      
    </div>
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
#birthDate {
  position: relative;
  font-family: GeosansLight;
  /* border-bottom-style: hidden; */
  bottom: 45px;
  left: 615px;
  height: 20px;
  width: 160px;
}
.birth {
    position: relative;
    margin-top: 40px;
  font-family: GeosansLight;
  margin-left: 65px;
}
#number {
  position: relative;
  font-family: GeosansLight;
  /* border-bottom-style: hidden; */
  bottom: 45px;
  left: 545px;
  height: 20px;
  width: 100px;
}
.phone {
  position: relative;
  font-family: GeosansLight;
  right: 3px;
}
#institution {
  position: relative;
  font-family: GeosansLight;
  /* border-bottom-style: hidden; */
  bottom: 45px;
  left: 548px;
  height: 20px;
  width: 100px;
}
.school {
  position: relative;
  font-family: GeosansLight;
  right: 2px;
}
#schoolEmail {
  position: relative;
  font-family: GeosansLight;
  /* border-bottom-style: hidden; */
  bottom: 45px;
  left: 525px;
  height: 20px;
  width: 200px;
}
.email {
  position: relative;
  font-family: GeosansLight;
  right: 12px;
}

#edit {
  position: relative;
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
</style>