<template>
  <div id="workshop">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <br />
    <hr id="lineLeftW" />
    <h3 id="title">Workshops</h3>
    <hr id="lineRightW" />
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
.catering {
  position: relative;
  width: 66.5%;
}
#lineLeftW {
  position: absolute;
  background-color: #daaa29;
  height: 0.5px;
  width: 20%;
  top: 52%;
  margin-left: 20%;
}
#lineRightW {
  position: absolute;
  background-color: #daaa29;
  height: 0.5px;
  width: 20%;
  top: 52%;
  margin-left: 60%;
}
#title {
  margin-top: -2%;
  font-family: Channel;
  color: black;
}
</style>
