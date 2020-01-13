<template>
  <div class="container">
    <div v-for="workshop in workshops" v-bind:key="workshop.id">
      <!-- CARD WORKSHOPS À DIREITA -->
      <span v-if="workshop.id % 2 == 0">
        <div class="card-header" id="headerWork">
          {{workshop.title}}
          <hr id="lineCards" />
        </div>
        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-right
          img-width="40%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip">{{workshop.description}}</b-card-text>
          <b-card-text id="workInfo2">
            {{workshop.date}}
            <br />
            Sala: {{workshop.room}}
            <br />
            Locutor: {{workshop.locutor}}
            <br />
            Vagas: {{workshop.vacancies}}
          </b-card-text>

          <b-button
            href="#"
            id="workInscp2"
            variant="primary"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
        <br />
        <br />
        <br />
      </span>
      <!-- CARD WORKSHOPS À ESQUERDA -->
      <span v-else>
        <div class="card-header" id="headerWork">
          {{workshop.title}}
          <hr id="lineCards" />
        </div>
        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-left
          img-width="40%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip">{{workshop.description}}</b-card-text>
          <b-card-text id="workInfo">
            {{workshop.date}}
            <br />
            Sala: {{workshop.room}}
            <br />
            Locutor: {{workshop.locutor}}
            <br />
            Vagas: {{workshop.vacancies}}
          </b-card-text>

          <b-button
            href="#"
            variant="primary"
            id="workInscp"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
        <br />
        <br />
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workshops: this.$store.state.workshops
    };
  },
  created() {
    if (localStorage.getItem("workshops")) {
      //  this.workshops  = JSON.parse(localStorage.getItem("workshops"));
      //  this.workshops=this.$store.state.workshops
      this.$store.state.workshops = JSON.parse(
        localStorage.getItem("workshops")
      );
    }
  },
  methods: {
    getLoggedUser() {
      return this.$store.getters.getLoggedUser;
    },
    sign(id) {
      //SEPARAR IF PARA POR ALERTS DIFERENTES!!!
      //COMO GUARDAR STORAGE??
      let newVacancies = 0;
      for (const i of this.workshops) {
        alert(this.workshops[i]);
        if (this.workshops[i].id === id) {
          newVacancies = this.workshops[i].vacancies - 1;

          this.$store.state.workshops.push(
            this.workshop[i].vacancies === newVacancies
          );
        }
        localStorage.setItem(
          "workshops",
          JSON.stringify(this.$store.state.workshops)
        );
      }
    }
  }
};
</script>

<style>
#workCard {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  box-shadow: 2px 2px #f5f5f0;
  padding: 10px;
}
#headerWork {
  background-color: #000;
  color: white;
  height: 50px;
  text-align: end;
  font-size: 150%;
  font-family: GeosansLight;
}
#lineCards {
  background-color: #daaa29;
  height: 15px;
  width: 1100px;
  position: relative;
  left: -20px;
  top: -20px;
}
#workDescrip {
  text-align: justify;
  font-family: GeosansLight;
  width: 450px;
}
#workInfo {
  text-align: justify;
  position: absolute;
  font-family: GeosansLight;
  width: 450px;
  font-size: 100%;
  bottom: -10px;
}
#workInfo2 {
  text-align: justify;
  position: absolute;
  font-family: GeosansLight;
  width: 450px;
  font-size: 100%;
  bottom: -10px;
  left: 180px;
}
#workInscp {
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  border: 1px solid black;
  bottom: -100px;
  left: 270px;
  background-color: #232323;
  font-family: GeosansLight;
}
#workInscp:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
#workInscp2 {
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  border: 1px solid black;
  bottom: -100px;
  right: 270px;
  background-color: #232323;
  font-family: GeosansLight;
}
#workInscp2:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
</style>