<template>
  <div>
    <div class="google-map" id="myMap"></div>
    <button id="mapButton" @click="renderMap()" style="display: none"></button>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data: function() {
    return {
      map: "",
      marker: ""
    };
  },
  beforeCreate() {
    window.onload = function() {
      document.getElementById("mapButton").click();
    };
  },
  created() {
    window.onload = function() {
      document.getElementById("mapButton").click();
    };
  },
  updated() {
    window.onload = function() {
      document.getElementById("mapButton").click();
    };
  },
  methods: {
    renderMap() {
      this.map = new google.maps.Map(document.querySelector("#myMap"), {
        center: {
          lat: 41.3667925,
          lng: -8.739608
        },
        zoom: 16
      });

      this.marker = new google.maps.Marker({
        position: {
          lat: 41.3667925,
          lng: -8.739608
        },
        map: this.map
      });
      this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    }
  }
};
</script>
<style scoped>
.google-map {
  width: 400px;
  height: 260px;
  margin-left: 100px;
  border: 2px solid #daaa29;
}
</style>
