<template>
  <div id="workshop">
    <b-img class="catering" src="../assets/zaton-catering-001.jpg"></b-img>
    <br />
    <br />
    <br />
    <hr id="lineLeftW" />
    <h3 id="titule">Workshops</h3>
    <hr id="lineRightW" />
    <b-button @click="orderByName()">Ordenar por nome</b-button>
    <b-button @click="orderByDate()">Ordenar por Data</b-button>
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
    /* ascending(a, b) {
      let bigger = a.workshop.title;
      let lower = b.workshop.title;
      return bigger > lower ? -1 : lower > bigger ? 1 : 0;
    },

    descending(a, b) {
      let higher = a.workshop.title;
      let lower = b.workshop.title;
      return higher > lower ? 1 : lower > higher ? -1 : 0;
    },

    orderByName() {
      if (this.compareName === true) {
        this.workshops.sort(this.higher);
        this.compareName = false;
      } else if (this.compareName === false) {
        this.workshops.sort(this.lower);
        this.compareName = true;
      }
      alert("ordenei por Nome");
    }, */

    ascending(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    },
    descending(a, b) {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      else return 0;
    },
    orderByName() {
      if (this.compareName === true) {
        this.workshops = this.workshops.sort(this.ascending);
        this.compareName = false;
      } else if (this.compareName === false) {
        this.workshops = this.workshops.sort(this.descending);
        this.compareName = true;
      }
      /* this.workshops = this.workshops.sort(this.ascending); */
      alert("ordenei por Nome");
    },
    orderByDate(){
       this.workshops.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      return this.workshops;
    }
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