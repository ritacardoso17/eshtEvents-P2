  <template>
  <div>
    <form v-on:submit.prevent="addWorkshop()">
      <div class="form-group">
        <label for="txtTitle" class="nameLabel">Titulo do Workshop:</label>
        <input
          type="text"
          class="form-control"
          id="txtTitle"
          placeholder="Insira o seu titulo"
          v-model="title"
        />
      </div>
      <div class="form-group">
        <label for="txtVacancies" class="nameLabel">Imagem do Workshop:</label>
        <input
          type="url"
          class="form-control"
          id="txtVacancies"
          placeholder="Insira a imagem para o Workshop"
          v-model="img"
        />
      </div>
      <div class="form-group">
        <label for="txtdate" class="nameLabel">Data do Workshop:</label>
        <input
          type="date"
          class="form-control"
          id="txtdate"
          placeholder="Insira a data"
          v-model="date"
        />
      </div>
      <div class="form-group">
        <label for="txtPlace" class="nameLabel">Lugar do Workshop:</label>
        <input
          type="text"
          class="form-control"
          id="txtLugar"
          placeholder="Insira o lugar "
          v-model="place"
        />
      </div>
      <div class="form-group">
        <label for="txtTeacher" class="nameLabel">Locutor do Workshop:</label>
        <input
          type="text"
          class="form-control"
          id="txtTeacher"
          placeholder="Insira o nome do locutor"
          v-model="teacher"
        />
      </div>
      <div class="form-group">
        <label for="txtVacancies" class="nameLabel">Numero de Vagas do Workshop:</label>
        <input
          type="number"
          class="form-control"
          id="txtVacancies"
          placeholder="Insira o numero maximo de vagas"
          v-model="vacancies"
        />
      </div>
       <div class="form-group">
        <label for="txtDescription" class="nameLabel">Descrição:</label>
        <textarea
          type="text"
          class="form-control"
          id="txtDescription"
          style="resize:none;"
          placeholder="Insira uma descrição"
           v-model="description"
        ></textarea>
      </div>

      <button type="submit" class="btnConf">Confirmar</button>
    </form>
   </div>
</template>

<script>
export default {
  name: "Add",
  data: () => ({
    id: 0,
    title: "",
    img:"",
    date: "",
    place: "",
    teacher: "",
    vacancies: 0,
    description:""
  }),
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("workshops")) {
      this.$store.state.workshops = JSON.parse(localStorage.getItem("workshops"));
    }
  },
  methods: {
    saveStorage() {
      localStorage.setItem("workshops",JSON.stringify(this.$store.state.workshops));
    },
    getLastIdWorkshops() {
      return this.$store.getters.getLastIdWorkshops;
    },
    addWorkshop() {
      this.$store.commit("ADD_WORKSHOP", {
        id: this.getLastIdWorkshops() + 1,
        title: this.title,
        img:this.img,
        date: this.date,
        place: this.place,
        teacher: this.teacher,
        vacancies: this.vacancies,
        description:this.description
      });
    }
  }
};
</script>

<style>
</style>