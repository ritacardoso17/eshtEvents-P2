<template>
  <div class="menu">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeft2" />
    <h3 id="titleMenu">Menus</h3>
    <hr id="lineRight2" />

    
    <menuMaker />
  </div>
</template>

<script>
import menuMaker from "@/components/menuMaker.vue";

export default {
  name: "menus",
  components: {
    menuMaker
  }
};
</script>

<style>
#lineLeft2 {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 380px;
}
#lineRight2 {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 390px;
}
#titleMenu {
  margin-top: -4%;
  font-family: Channel;
  color: black;
}
.catering {
  position: relative;
  width: 1263px;
}

</style>