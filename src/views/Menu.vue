<template>
  <div class="menu">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <div class="container-full title" style="padding-bottom: 50px;">
      <h3 id="redTitle">Menus</h3>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>

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
#whiteRect {
  background-color: white;
  margin-top: -35px;
  height: 35px;
  width: 170px;
  position: relative;
  display: block;
  z-index: 6;
}

.back-line {
  background-color: #daaa29;
  margin-top: -25px;
  width: 700px;
  display: block;
  z-index: 5;
  position: relative;
  height: 1px;
}

#redTitle {
  font-family: "Channel";
  color: black;
  display: block;
  z-index: 7;
  position: relative;
}
.catering {
  position: relative;
  width: 66.5%;
}
</style>
