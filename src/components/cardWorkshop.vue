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
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button
            href="#"
            variant="primary"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
        <br> <br> <br>
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
          img-width="50%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button
            href="#"
            variant="primary"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
        <br> <br> <br>
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
  text-align: justify;
  font-size: 150%;
}
#lineCards {
  background-color: #DAAA29;
  height: 15px;
  width: 1100px;
  position: relative;
  left: -20px;
  top: -20px;
}
</style>