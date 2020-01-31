<template>
  <div id="workshop">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeftW" />
    <h3 id="titule">Workshops</h3>
    <hr id="lineRightW" />
    <br />
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
  methods: {
   
  },
};
</script>


<style>
.catering {
  position: relative;
  width: 1263px;
}
#lineLeftW {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -15px;
  margin-left: 350px;
}
#lineRightW {
  position: relative;
  background-color: #daaa29;
  height: 0.5px;
  width: 150px;
  top: -30px;
  margin-right: 350px;
}
#titule {
  margin-top: -4%;
  font-family: Channel;
  color: black;
}
</style>