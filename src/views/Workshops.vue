<template>
  <div id="workshop">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <br />
    <div
      class="container-full title"
      style="padding-bottom: 50px; margin-top: -20px"
    >
      <h3 id="redTitle">Workshop</h3>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>
    <br />
    <cardWorkshop />
  </div>
</template>

<script>
import cardWorkshop from "@/components/cardWorkshop.vue";

export default {
  name: "Workshop",
  components: {
    cardWorkshop
  },
  methods: {}
};
</script>

<style>
#whiteRect {
  background-color: white;
  margin-top: -35px;
  height: 35px;
  width: 200px;
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
