<template>
  <div>
    <form v-on:submit.prevent="addWorkshop()">
         <div class="form-group">
          <label for="txtTitle" class="nameLabel">Titulo do Workshop:</label>
          <input type="text" class="form-control" id="txtTitle" placeholder="Insira o seu titulo" required v-model="title"
          />
        </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data: () => ({
    id: 0,
    title: "",
    date: "",
    place: "",
    teacher: "",
    vacancies: 0
  }),
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("workshops")) {
      this.$store.state.workshops = JSON.parse(
        localStorage.getItem("workshops")
      );
    }
  },
  methods: {
    saveStorage() {
      localStorage.setItem(
        "workshops",
        JSON.stringify(this.$store.state.workshops)
      );
    },
    addWorkshop() {
      this.$store.commit("ADD_WORKSHOP", {
        id: this.getLastId() + 1,
        title: this.title,
        date: this.date,
        place: this.place,
        teacher: this.teacher,
        vacancies: this.vacancies
      });
    }
  }
};
</script>