<template>
  <div class="menu">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <h3 id="titleMenu">
      <hr id="lineLeft2" />Menus
      <hr id="lineRight2" />
    </h3>

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
  top: 30px;
  margin-left: 30%;
}
#lineRight2 {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 30%;
}
#titleMenu {
  margin-top: -3%;
  font-family: Channel;
  color: black;
}
.catering {
  position: relative;
  width: 66.5%;
}
</style>