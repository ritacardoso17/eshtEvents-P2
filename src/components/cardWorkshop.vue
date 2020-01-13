<template>
  <div>
    <div v-for="workshop in workshops" v-bind:key="workshop.id">
      <span v-if="workshop.id % 2 == 0">
        <b-card
          :title="workshop.title"
          :img-src="workshop.img"
          img-alt="Image"
          img-right
          tag="article"
          class="mb-2"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button
            href="#"
            variant="primary"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
      </span>
      <span v-else>
        <b-card
          :title="workshop.title"
          :img-src="workshop.img"
          img-alt="Image"
          img-left
          tag="article"
          class="mb-2"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button
            href="#"
            variant="primary"
            @click="sign(workshop.id,workshop.vacancies)"
          >Inscrever-me</b-button>
        </b-card>
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
    sign(id, vacancies) {
      //SEPARAR IF PARA POR ALERTS DIFERENTES!!!
      //COMO GUARDAR STORAGE??
      let newVacancies;
      for (const workshop of this.workshops) {
        if (workshop.id == id && vacancies != 0) {
          alert(workshop.vacancies - 1);
          newVacancies = workshop.vacancies - 1;
          this.$store.state.workshops.push(workshop.vacancies === newVacancies);
        }
        localStorage.setItem("workshops",JSON.stringify(this.$store.state.workshops)
        );
      }
    }
  }
};
</script>